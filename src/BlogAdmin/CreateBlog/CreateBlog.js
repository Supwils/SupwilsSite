import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreateBlog.css';
import { generateSlug } from '../../libs/generateSlug';
import parse from "html-react-parser";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;



const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [showError, setShowError] = useState(false);

    function handleTitle(e) {
    const newTitle = e.target.value;
      setTitle(newTitle);
    }
    

    function handleTags(e)
    {
        const newTags = e.target.value;
        setTags(newTags);
    }

    const uploadImageToS3 = async (image) =>
    {
        const { url } = await fetch(`${BACKEND_URL}/image-upload-url`).then((res) => res.json());
        await fetch(url, {
            method: "PUT",
            body: image,
        })
        return url.split("?")[0];
        //return "https://supwils-site.s3.amazonaws.com/default-image.png";
    }

    const processImagesInContent = async (rawContent) =>
    {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = rawContent;

        const imageTags = tempDiv.getElementsByTagName('img');
        const promises = [];

        for (let img of imageTags) {
          const base64Data = img.src;
          const file = dataURItoBlob(base64Data); // Convert base64 to Blob/File

          promises.push(
        uploadImageToS3(file).then((url) => {
          img.src = url; // Replace the src with the S3 URL
        })
          );
        }

        await Promise.all(promises);
        return tempDiv.innerHTML;
    }

    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uintArray = new Uint8Array(arrayBuffer);
    
        for (let i = 0; i < byteString.length; i++) {
          uintArray[i] = byteString.charCodeAt(i);
        }
    
        return new Blob([uintArray], { type: mimeString });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!title || !tags || !description || !content) {
          setShowError(true); // Show error message
          setTimeout(() => setShowError(false), 3000); // Hide error message after 3 seconds
          return; // Exit the function to prevent submission
      }
        // Process images in content and replace with URLs
        const processedContent = await processImagesInContent(content);
    
        const newBlog = {
          title,
          tags,
          description,
          content: processedContent, // Use processed content with S3 image URLs
        };
    
        //console.log(newBlog);
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const response = await fetch(`${BACKEND_URL}/blogs/create-blog`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(newBlog),
        });
    
        if (response.ok) {
          console.log('Blog created successfully');
          setTitle('');
          setTags('');
          setDescription('');
          setContent('');
        } else {
          console.error('Failed to create blog1');
          console.log(response.json());
        }
      };
    

  //Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  return (
    <div className='create-blog-container'>
      <h2 className="text-5xl text-center font-semibold py-4">
        Blog Editor
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-2">
        {/* Blog Editor */}
        <div className="text-left w-full max-w-5xl p-5 my-6 bg-white border border-gray-800 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-800 pb-2 mb-5 text-black">
            Blog Editor
          </h2>
          <form onSubmit={handleSubmit}>
          {showError && ( // Conditional rendering for error message
                            <span className="text-red-500 mb-4 block">
                                All sections need to be filled!
                            </span>
                        )}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Title */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-lg font-medium leading-6 text-gray-900 mb-2 "
                >
                  Blog Title
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleTitle}
                    type="text"
                    value={title}
                    name="title"
                    id="title"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Type the Post title"
                  />
                </div>
              </div>
              {/* Slug */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="slug"
                  className="block text-lg font-medium leading-6 text-gray-900 mb-2 "
                >
                  Blog Tag
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleTags}
                    type="text"
                    value={tags}
                    name="tag"
                    id="tag"
                    autoComplete="tag"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Type the post tag"
                  />
                </div>
              </div>
              {/* Description */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className=" block mb-2 text-lg font-medium text-gray-900"
                >
                  Blog Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="block p-2.5 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              {/* Content */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Blog Content
                </label>
                <div className='text-black'>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
            >
              <button className="w-5 h-5 mr-2" />
              <span>Create Blog Post</span>
            </button>
          </form>
        </div>

        {/* Blog View */}
        <div className="blogview text-left w-full max-w-5xl p-6 my-4 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-5 text-black">
            Blog View
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Title */}
            <div className="sm:col-span-2">
              <h2 className="block text-2xl font-medium leading-6 text-gray-900 mb-2 ">
                Blog Title
              </h2>
              <div className="mt-2">
                <p className="text-2xl font-bold text-black">{title}</p>
              </div>
            </div>
            {/* Slug */}
            <div className="sm:col-span-2">
              <h2 className="block text-md font-medium leading-6 text-gray-900 mb-2 ">
                Blog Tags
              </h2>
              <div className="mt-2">
                <p>{tags}</p>
              </div>
            </div>
            {/* Description */}
            <div className="sm:col-span-2">
              <h2 className="block mb-2 text-md font-medium text-gray-900 ">
                Blog Description
              </h2>
              <p>{description}</p>
            </div>
            <div className="sm:col-span-full">
              <h2 className="block mb-2 text-md font-medium text-gray-900">
                Blog Content
              </h2>
              <div className='text-black max-w-4xl text-2xl'>
              {parse(content)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;




