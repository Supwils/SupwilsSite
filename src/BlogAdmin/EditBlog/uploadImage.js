import React, { useState } from 'react';
import './uploadImage.css';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    // Get the signed URL from the backend
    const { url } = await fetch(`${BACKEND_URL}/image-upload-url`).then((res) => res.json());

    console.log('Upload URL:', url);

    // Create form data to send the file
    const formData = new FormData();
    formData.append('file', selectedFile);  // Change 'image' to 'file' for consistency

    const response = await fetch(url, {
      method: 'PUT',
      body: selectedFile,  // Send the file directly (no need for FormData)
    });

    if (response.ok) {
      alert('Image uploaded successfully!');
      const imageUrl = url.split('?')[0];
      console.log('Image URL:', imageUrl);
      setImageUrl(imageUrl);    
    } else {
      alert('Failed to upload the image.');
    }
  };

  return (
    <div className='upload-image-container'>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
          {imageUrl && (
              <div>
                  <img src={imageUrl} alt="Uploaded" />
              </div>
          )}
    </div>
  );
};

export default UploadImage;