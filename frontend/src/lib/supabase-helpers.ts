import { supabase, GALLERY_BUCKET } from './supabase';

// Authentication helpers
export const authHelpers = {
  // Sign up a new admin user
  async signUpAdmin(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'admin',
          name: 'Admin User'
        }
      }
    });
    return { data, error };
  },

  // Sign in admin user
  async signInAdmin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  // Sign out user
  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // Check if user is admin
  async isAdmin() {
    const user = await this.getCurrentUser();
    return user?.user_metadata?.role === 'admin';
  }
};

// Storage helpers
export const storageHelpers = {
  // Upload image to Supabase storage
  async uploadImage(file: File, fileName?: string) {
    const fileExt = file.name.split('.').pop();
    const finalFileName = fileName || `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from(GALLERY_BUCKET)
      .upload(finalFileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: publicData } = supabase.storage
      .from(GALLERY_BUCKET)
      .getPublicUrl(finalFileName);

    return {
      fileName: finalFileName,
      publicUrl: publicData.publicUrl,
      path: data.path
    };
  },

  // Get all images from storage
  async getAllImages() {
    console.log('Getting all images from bucket:', GALLERY_BUCKET);
    
    const { data, error } = await supabase.storage
      .from(GALLERY_BUCKET)
      .list('', {
        limit: 100,
        offset: 0,
      });

    if (error) {
      console.error('Error listing files:', error);
      throw error;
    }

    console.log('Raw file data:', data);

    // Filter for image files by extension (more reliable than metadata)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];
    const imageFiles = data.filter(file => {
      const fileName = file.name?.toLowerCase() || '';
      return imageExtensions.some(ext => fileName.endsWith(ext));
    });

    console.log('Filtered image files:', imageFiles);

    // Get public URLs for all images
    const imageUrls = imageFiles.map(file => {
      const { data: publicData } = supabase.storage
        .from(GALLERY_BUCKET)
        .getPublicUrl(file.name);
      return {
        name: file.name,
        url: publicData.publicUrl,
        size: file.metadata?.size,
        uploadedAt: file.created_at
      };
    });

    console.log('Final image URLs:', imageUrls);
    return imageUrls;
  },

  // Delete image from storage
  async deleteImage(fileName: string) {
    const { error } = await supabase.storage
      .from(GALLERY_BUCKET)
      .remove([fileName]);
    
    return { error };
  }
};

// Database helpers (for future use)
export const dbHelpers = {
  // Get all gallery entries
  async getGalleryEntries() {
    const { data, error } = await supabase
      .from('gallery_entries')
      .select('*')
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  // Add gallery entry
  async addGalleryEntry(imageUrl: string, title?: string, description?: string) {
    const { data, error } = await supabase
      .from('gallery_entries')
      .insert([
        {
          image_url: imageUrl,
          title: title || 'Village Image',
          description: description || '',
          uploaded_by: 'admin'
        }
      ])
      .select();
    
    return { data, error };
  }
};
