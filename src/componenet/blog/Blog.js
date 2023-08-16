import React from "react";
import style from "./Blog.module.css";
import { Link } from "react-router-dom";
const posts = [
  {
    id: 1,
    title: "Introduction to Web Development",
    content:
      "Web development refers to the process of creating and building websites and web applications that are accessible through the internet. It involves a combination of programming, design, and content creation to produce websites that are functional, visually appealing, and user-friendly. Web development encompasses various stages, including planning, designing, coding, testing, and deploying a website or application.",
  },
  {
    id: 2,
    title: "Introduction to Front-End Development",
    content:
      "Front-end development focuses on creating the user interface that users interact with directly. It involves using technologies such as HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript to structure content, apply styling, and add interactivity to web pages.",
  },
  {
    id: 3,
    title: "Introduction to -End Development",
    content:
      "Front-end development focuses on creating the user interface that users interact with directly. It involves using technologies such as HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript to structure content, apply styling, and add interactivity to web pages.",
  },
  
  // Add more web development-related blog post objects as needed
];

const Blog = () => {
  return (
    <div className={style.blog}>
      <h1>Blog Posts</h1>
      <div className={style.posts}>
        {posts.map((post) => (
          <div className={style.post} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to="/about" className={style.btnMore}>Explore More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
