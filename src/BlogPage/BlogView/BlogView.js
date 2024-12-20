import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import parse from "html-react-parser";
import './BlogView.css';


const BlogView = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPost(data[0]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div className='blog-view-container'>
            
            <div className='blog-view'>
                <Link className='blog-back-link' href="/blogs" color="inherit">Back to Blog</Link>
                <h2>{post.title}</h2>
                {/* tags seprate by # */}
                <p>
                {post.tags && post.tags.map((tag, index) => (
                    <span key={index} className="tag-item">{`#${tag} `}</span>
                ))}
                </p>

                {parse(post.content)}
            
            </div>
        </div>
    );
};

export default BlogView;