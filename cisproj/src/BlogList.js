const BlogList = ({ blogs, title, handleDelete }) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.name} >
            <h2>{ blog.name }</h2>
            <p>Written by { blog.area }</p>
            <button onClick={() => handleDelete(blog.name)}>delete blog</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;