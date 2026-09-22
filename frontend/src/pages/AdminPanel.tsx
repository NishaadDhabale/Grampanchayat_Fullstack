import React, { useState, useCallback, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader2, CheckCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { storageHelpers } from '@/lib/supabase-helpers';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface UploadedImage {
  file: File;
  preview: string;
  uploading: boolean;
  uploaded: boolean;
  url?: string;
  error?: string;
}

export const AdminPanel = ({ token, onAddImage, onLogout }: { token: string, onAddImage: (img: string) => void, onLogout?: () => void }) => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const navigate= useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFiles = useCallback((files: FileList) => {
    const newImages: UploadedImage[] = [];

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const preview = URL.createObjectURL(file);
        newImages.push({
          file,
          preview,
          uploading: false,
          uploaded: false,
        });
      }
    });

    setUploadedImages(prev => [...prev, ...newImages]);
  }, []);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const uploadToSupabase = async (image: UploadedImage, index: number): Promise<string | null> => {
    try {
      const result = await storageHelpers.uploadImage(image.file);
      return result.publicUrl;
    } catch (error) {
      console.error('Upload error:', error);
      return null;
    }
  };

  const handleUpload = async () => {
    const unuploadedImages = uploadedImages.filter(img => !img.uploaded && !img.uploading);

    for (let i = 0; i < unuploadedImages.length; i++) {
      const imageIndex = uploadedImages.findIndex(img => img === unuploadedImages[i]);

      // Set uploading state
      setUploadedImages(prev => prev.map((img, idx) =>
        idx === imageIndex ? { ...img, uploading: true, error: undefined } : img
      ));

      const url = await uploadToSupabase(unuploadedImages[i], imageIndex);

      // Update state with result
      setUploadedImages(prev => prev.map((img, idx) =>
        idx === imageIndex ? {
          ...img,
          uploading: false,
          uploaded: url !== null,
          url: url || undefined,
          error: url ? undefined : 'Upload failed'
        } : img
      ));

      if (url) {
        onAddImage(url);
        toast({
          title: "Upload Successful",
          description: `${unuploadedImages[i].file.name} has been uploaded to the gallery.`,
        });
        // Notify gallery to refresh remote images
        try {
          window.dispatchEvent(new Event('gallery-updated'));
        } catch (e) {
          console.warn('Could not dispatch gallery-updated event', e);
        }
          // Broadcast to other tabs via localStorage so they can refresh
          try {
            localStorage.setItem('gallery-updated', Date.now().toString());
          } catch (e) {
            console.warn('Could not set gallery-updated in localStorage', e);
          }
      } else {
        toast({
          title: "Upload Failed",
          description: `Failed to upload ${unuploadedImages[i].file.name}. Please try again.`,
          variant: "destructive",
        });
      }
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => {
      const newImages = prev.filter((_, i) => i !== index);
      // Revoke object URL to prevent memory leaks
      URL.revokeObjectURL(prev[index].preview);
      return newImages;
    });
  };

  const clearAll = () => {
    uploadedImages.forEach(img => URL.revokeObjectURL(img.preview));
    setUploadedImages([]);
  };

  const hasUnuploadedImages = uploadedImages.some(img => !img.uploaded && !img.uploading);
  const hasUploadingImages = uploadedImages.some(img => img.uploading);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-6 w-6" />
                Admin Panel - Gallery Image Upload
              </CardTitle>
              {onLogout && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4">
              <AlertDescription>
                Upload images to add them to the village gallery. Supported formats: JPG, PNG, GIF, WebP.
                Maximum file size: 10MB per image.
              </AlertDescription>
            </Alert>

            {/* Drag and Drop Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium mb-2">
                Drag and drop images here, or{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 underline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  browse files
                </button>
              </p>
              <p className="text-sm text-gray-500">
                You can select multiple images at once
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Action Buttons */}
            {uploadedImages.length > 0 && (
              <div className="flex gap-4 mt-6">
                <Button
                  onClick={handleUpload}
                  disabled={!hasUnuploadedImages || hasUploadingImages}
                  className="flex items-center gap-2"
                >
                  {hasUploadingImages ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      Upload All ({uploadedImages.filter(img => !img.uploaded && !img.uploading).length})
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={clearAll}
                  disabled={hasUploadingImages}
                >
                  Clear All
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Image Preview Grid */}
        {uploadedImages.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Selected Images ({uploadedImages.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />

                      {/* Status Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.uploading && (
                          <div className="text-white text-center">
                            <Loader2 className="h-8 w-8 mx-auto mb-2 animate-spin" />
                            <p className="text-sm">Uploading...</p>
                          </div>
                        )}
                        {image.uploaded && (
                          <div className="text-white text-center">
                            <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-400" />
                            <p className="text-sm">Uploaded</p>
                          </div>
                        )}
                        {image.error && (
                          <div className="text-white text-center">
                            <X className="h-8 w-8 mx-auto mb-2 text-red-400" />
                            <p className="text-sm">Error</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* File Info */}
                    <div className="mt-2">
                      <p className="text-sm font-medium truncate">{image.file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(image.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      {image.error && (
                        <p className="text-xs text-red-500 mt-1">{image.error}</p>
                      )}
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      disabled={image.uploading}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      <div>
        <Button className="flex justify-center mb-8" onClick={()=>{
          navigate('/')
        }}>
          Back
        </Button>
      </div>
    </div>
  );
};