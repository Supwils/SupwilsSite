import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './blogAdmin.css';
const BlogAdmin = () =>
{
    const navigate = useNavigate();
    const handleCreateBlog = () =>
    {
        navigate('/create-blog');
    }
    const handleUploadImage = () =>
    {
        navigate('/upload-image');
    }
    return (
        <div className='blog-admin-container'>

            <div className='blog-admin-header'>
                <Button onClick={handleCreateBlog} variant='contained' color='primary'>Create Blog</Button>
                <Button variant='contained' color='secondary'>Manage Blogs</Button>
                <Button onClick={handleUploadImage} variant='contained' color='secondary'>Upload Image</Button>
            </div>
        
        
        
        </div>
    );
};

export default BlogAdmin;