# Supabase Setup Guide for Village Gallery

This guide will help you set up Supabase for the village gallery image upload functionality.

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in your project details:
   - Name: `village-gallery` (or your preferred name)
   - Database Password: Choose a strong password
   - Region: Select the region closest to your users
5. Click "Create new project"

## 2. Create Storage Bucket

1. In your Supabase dashboard, go to **Storage** in the left sidebar
2. You'll see the Storage interface. Look for one of these options:
   - **"New bucket"** button (if available)
   - **"Create bucket"** button (if available)
   - **"+" icon** or **"Add bucket"** option
   - If you don't see any of these, the bucket might be created automatically

3. If you can create a bucket manually, configure it:
   - **Name**: `village-gallery`
   - **Public**: ✅ **Enable** (this allows public access to images)
   - **File size limit**: 10MB (or adjust as needed)
   - **Allowed MIME types**: `image/*` (allows all image types)

4. **Alternative Method - Using SQL Editor**:
   If you can't find the UI option, you can create the bucket using SQL:
   1. Go to **SQL Editor** in the left sidebar
   2. Click **"New query"**
   3. Run this SQL command:
   ```sql
   INSERT INTO storage.buckets (id, name, public)
   VALUES ('village-gallery', 'village-gallery', true);
   ```
   4. Click **"Run"** to execute the query

## 3. Set Up Row Level Security (RLS)

1. Go to **Storage** → **Policies**
2. Click "New Policy" for the `village-gallery` bucket
3. Create a policy for **SELECT** (reading images):
   ```sql
   -- Policy name: Public read access
   -- Operation: SELECT
   -- Target roles: public
   -- USING expression: true
   ```
4. Create a policy for **INSERT** (uploading images):
   ```sql
   -- Policy name: Authenticated upload access
   -- Operation: INSERT
   -- Target roles: authenticated
   -- USING expression: true
   ```

## 4. Get Your Project Credentials

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy the following values:
   - **Project URL** (looks like: `https://sbyfefqtlecbmdxkzzeq.supabase.co`)
   - **anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieWZlZnF0bGVjYm1keGt6emVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjAzMzQsImV4cCI6MjA3NTkzNjMzNH0.A7wrmooUipkSfIu50mQn3hSqsTQsetNJvu-7W-nPbyY`)

## 5. Configure Environment Variables

Your environment variables are already configured in `env.local`:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://sbyfefqtlecbmdxkzzeq.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieWZlZnF0bGVjYm1keGt6emVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjAzMzQsImV4cCI6MjA3NTkzNjMzNH0.A7wrmooUipkSfIu50mQn3hSqsTQsetNJvu-7W-nPbyY.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieWZlZnF0bGVjYm1keGt6emVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjAzMzQsImV4cCI6MjA3NTkzNjMzNH0.A7wrmooUipkSfIu50mQn3hSqsTQsetNJvu-7W-nPbyY

# Backend API
VITE_API_URL=http://localhost:4000
```

✅ **Your Supabase credentials are already configured!**

## 6. Create Admin User in Supabase

### Method 1: Using Supabase Dashboard (Recommended)

1. Go to **Authentication** → **Users** in your Supabase dashboard
2. Click **"Add user"**
3. Fill in the details:
   - **Email**: `admin@village.com`
   - **Password**: `admin123`
   - **Email confirm**: ✅ Check this box
4. Click **"Create user"**

### Method 2: Using the Setup Script

1. Open your browser console (F12)
2. Go to your frontend application
3. Import and run the setup script:
   ```javascript
   import { setupAdmin } from './src/setup-admin';
   setupAdmin();
   ```

### Method 3: Manual SQL (Advanced)

Run this SQL in the Supabase SQL Editor:
```sql
-- Create admin user
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@village.com',
  crypt('admin123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);
```

## 7. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/admin` in your browser
3. Try logging in with your admin credentials
4. Upload a test image to verify the setup works

## 8. Production Considerations

### Environment Variables
Make sure to set the environment variables in your production deployment:
- Vercel: Add to Project Settings → Environment Variables
- Netlify: Add to Site Settings → Environment Variables
- Other platforms: Follow their specific documentation

### Storage Limits
- Supabase free tier includes 1GB of storage
- Consider upgrading if you need more space
- Monitor usage in your Supabase dashboard

### Security
- Keep your Supabase credentials secure
- Consider implementing additional security measures for production
- Regularly review and update your RLS policies

## Troubleshooting

### Common Issues

1. **"Bucket not found" error**
   - Make sure the bucket name in `supabase.ts` matches your bucket name
   - Verify the bucket exists in your Supabase dashboard
   - Try creating the bucket using the SQL method above

2. **"Permission denied" error**
   - Check your RLS policies are set up correctly
   - Ensure the bucket is marked as public
   - Verify the bucket was created with `public: true`

3. **"Can't find bucket creation option"**
   - Some Supabase projects create buckets automatically
   - Try uploading a file first - the bucket might be created automatically
   - Use the SQL Editor method to create the bucket manually
   - Check if you're on the correct project (verify project URL)

4. **Images not displaying**
   - Verify the public URL generation is working
   - Check browser console for any CORS errors
   - Ensure the bucket is public and RLS policies allow public access

5. **Upload fails**
   - Check file size limits (default is usually 50MB)
   - Verify MIME type restrictions
   - Check browser console for detailed error messages
   - Ensure you have the correct Supabase credentials in your environment variables

### Support
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Storage Guide](https://supabase.com/docs/guides/storage)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)

## Features Included

✅ **Drag & Drop Upload**: Modern drag-and-drop interface for easy image uploads  
✅ **Multiple File Selection**: Upload multiple images at once  
✅ **Real-time Preview**: See image previews before uploading  
✅ **Progress Indicators**: Visual feedback during upload process  
✅ **Error Handling**: Comprehensive error messages and retry functionality  
✅ **Responsive Design**: Works on desktop and mobile devices  
✅ **Authentication**: Secure admin access with logout functionality  
✅ **Automatic Gallery Updates**: Images appear in gallery immediately after upload  
✅ **Supabase Integration**: Reliable cloud storage with public URLs  
✅ **Fallback Authentication**: Works with existing backend auth system  
