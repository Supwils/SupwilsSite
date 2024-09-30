import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = () => {
    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission, e.g., send the content to a server
        console.log('Submitted content:', content);
    };

    return (
        <div className="blog-editor">
            <form onSubmit={handleSubmit}>
                <ReactQuill value={content} onChange={handleChange} />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default BlogEditor;