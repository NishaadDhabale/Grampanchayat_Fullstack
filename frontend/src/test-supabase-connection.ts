// Test Supabase connection and bucket setup
// Run this in browser console to debug issues

import { supabase, GALLERY_BUCKET } from './lib/supabase';
import { storageHelpers } from './lib/supabase-helpers';

export const testSupabaseConnection = async () => {
  console.log('🧪 Testing Supabase Connection...');
  
  try {
    // Test 1: Check Supabase client
    console.log('1. Testing Supabase client...');
    console.log('Supabase URL:', supabase.supabaseUrl);
    console.log('Bucket name:', GALLERY_BUCKET);
    
    // Test 2: List buckets
    console.log('2. Listing storage buckets...');
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
    
    if (bucketsError) {
      console.error('❌ Error listing buckets:', bucketsError);
      return;
    }
    
    console.log('✅ Available buckets:', buckets);
    const targetBucket = buckets.find(b => b.name === GALLERY_BUCKET);
    
    if (!targetBucket) {
      console.error(`❌ Bucket '${GALLERY_BUCKET}' not found!`);
      console.log('Available buckets:', buckets.map(b => b.name));
      return;
    }
    
    console.log(`✅ Bucket '${GALLERY_BUCKET}' found:`, targetBucket);
    
    // Test 3: List files in bucket
    console.log('3. Listing files in bucket...');
    const { data: files, error: filesError } = await supabase.storage
      .from(GALLERY_BUCKET)
      .list('', { limit: 10 });
    
    if (filesError) {
      console.error('❌ Error listing files:', filesError);
      return;
    }
    
    console.log('✅ Files in bucket:', files);
    
    // Test 4: Test getAllImages helper
    console.log('4. Testing getAllImages helper...');
    const images = await storageHelpers.getAllImages();
    console.log('✅ Images from helper:', images);
    
    console.log('🎉 All tests passed! Supabase is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};

// Instructions
console.log(`
🧪 SUPABASE CONNECTION TEST

To run this test:
1. Open browser console (F12)
2. Import and run: testSupabaseConnection()

This will test:
- Supabase client connection
- Storage bucket existence
- File listing
- Image retrieval

Make sure your Supabase project is properly configured!
`);

export default testSupabaseConnection;
