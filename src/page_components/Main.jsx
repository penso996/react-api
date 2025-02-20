// Main.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {

    // useState to handle blogPosts
    const [posts, setPosts] = useState([]);

    // FUNCTION to handle API request
    function fetchBlogPost() {
        axios.get("http://localhost:3000/posts")
            .then((res) =>
                setPosts(res.data)
            )
    }

    // fetch data once
    useEffect(fetchBlogPost, []);

    // RETURN
    return (
        <main>

            {/* post container */}
            {posts.length === 0 ? (<div><h3>No posts to show</h3></div>) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <img src={post.image} alt={post.title} />
                        <p>{post.tags}</p>
                    </div>
                ))
            )}

        </main>
    );
}