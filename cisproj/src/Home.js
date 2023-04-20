import {useEffect, useState } from "react";
import BlogList from "./BlogList";
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
    .then(response => {
      if(response.status===200) {
        const fetchedData = response.data.rows;
        setData(fetchedData);
        console.log('info', fetchedData);
        console.log('data', data);
      }
    });
  }, []);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      {/*blogs && <BlogList blogs={blogs} title = "all Blogs" handleDelete ={handleDelete}/>*/}
    </div>
  );
}
 
export default Home;