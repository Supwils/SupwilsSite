import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogMain.css';
import BlogCard from './BlogCard/BlogCard';


const BlogMain = () => 
{
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const [posts, setPosts] = useState([]);
    const [loading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() =>
        {
            const fetchPosts = async () =>
            {
                try
                {
                    const response = await fetch(`${BACKEND_URL}/blogs/get-recent`);
                    if (!response.ok)
                    {
                        throw new Error('Failed to fetch posts');
                    }
                    const data = await response.json();
                    setPosts(data);
                } catch
                {
                    setError(error);
                }
                finally
                {
                    setIsLoading(false);
                }
            }
            fetchPosts();
        }, []);
    
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
    
        return (
            <div className="blog-main">
                <div className="blog-header">
                    <h1>New Blogs</h1>
                </div>
                    
                <div className="blog-container">
                    {posts.map(post => (
                        
                        <a key={post._id} href={`/blogs/${post._id}`}>
                        <BlogCard title={post.title} date={post.createdAt} tags={post.tags} description={post.description}/>
                    </a>
                    ))}
                </div>
            </div>
        );
    }

export default BlogMain;