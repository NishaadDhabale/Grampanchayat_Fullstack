// Admin setup script for Supabase
// Run this in your browser console or as a one-time setup

import { authHelpers } from './lib/supabase-helpers';

export const setupAdmin = async () => {
  console.log('🚀 Setting up admin user in Supabase...');
  
  try {
    // Create admin user
    const { data, error } = await authHelpers.signUpAdmin(
      'admin@village.com', // Change this to your preferred email
      'admin123' // Change this to your preferred password
    );
    
    if (error) {
      if (error.message.includes('already registered')) {
        console.log('✅ Admin user already exists!');
        console.log('You can now login with:');
        console.log('Email: admin@village.com');
        console.log('Password: admin123');
      } else {
        console.error('❌ Error creating admin user:', error);
      }
    } else {
      console.log('✅ Admin user created successfully!');
      console.log('Email: admin@village.com');
      console.log('Password: admin123');
      console.log('📧 Check your email to confirm the account');
    }
  } catch (err) {
    console.error('❌ Setup failed:', err);
  }
};

// Instructions for running this setup
console.log(`
🔧 SUPABASE ADMIN SETUP INSTRUCTIONS:

1. Open your browser console (F12)
2. Copy and paste this code to run the setup
3. Or manually create an admin user in Supabase Dashboard:
   - Go to Authentication > Users
   - Click "Add user"
   - Email: admin@village.com
   - Password: admin123
   - Confirm email: true

4. Update the login page with the correct credentials

📝 Note: Make sure your Supabase project is configured correctly!
`);

export default setupAdmin;
