import './BlogCard.css';

const BlogCard = ({ title, date, tags, description }) =>
{
    const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    return (
        <div className="blog-card">
            <h3>{title}</h3>
            <p>{formattedDate}</p>
            <p>{tags.join(', ')}</p>
            <p>{description}</p>
        </div>
    )
}

export default BlogCard;