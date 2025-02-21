// Main.jsx
import { useState, useEffect } from "react";
import axios from "axios";

// initial empty form
const initialPostData = {
    title: "",
    content: "",
    image: "",
    tags: [],
};

export default function Main() {

    // useState to handle blogPosts
    const [posts, setPosts] = useState([]);
    // useState to handle form
    const [newPost, setNewPost] = useState(initialPostData);

    // FUNCTION to handle API request
    function fetchBlogPost() {
        axios.get("http://localhost:3000/posts")
            .then((res) => setPosts(res.data))
            .catch((err) => console.error("Error fetching posts", err));
    }

    // fetch data once
    useEffect(fetchBlogPost, []);

    // FUNCTION to handle form data
    function handleFormData(e) {
        // handle various inputs type
        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;
        // use setNewForm with form input
        setNewPost((currentFormData) => (
            {
                ...currentFormData,
                [e.target.name]: value,
            }
        ));
    }

    // FUNCTION to handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // prevent empty form
        axios.post("http://localhost:3000/posts", newPost)
            .then((res) => {
                setPosts((prevPosts) => [...prevPosts, res.data]); // use setPost to create a new posts array
                setNewPost(initialPostData);  // reset form
            })
            .catch(err => {
                console.error("Error adding post", err);
            });
    }

    // RETURN
    return (
        <main>

            {/* post form */}
            <div>
                <h3>Inserisci un nuovo articolo</h3>

                <form onSubmit={handleSubmit}>
                    {/* form for blog post title */}
                    <input type="text"
                        name="title"
                        onChange={handleFormData}
                        value={newPost.title}
                        placeholder="Title"
                    />
                    {/* form for blog post content */}
                    <input type="text"
                        name="content"
                        onChange={handleFormData}
                        value={newPost.content}
                        placeholder="Content"
                    />
                    {/* form for blog post image */}
                    <input type="text"
                        name="image"
                        onChange={handleFormData}
                        value={newPost.image}
                        placeholder="Image"
                    />
                    {/* form for blog post category */}
                    <input type="text"
                        name="tags"
                        onChange={handleFormData}
                        value={newPost.tags.join(", ")}
                        placeholder="Tags (divisi da virgola)"
                    />

                    <button>Send</button>
                </form>

            </div>

            {/* post container */}
            {posts.length === 0 ? (<div><h3>No posts to show</h3></div>) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <img src={post.image} alt={post.title} />
                        <p>{post.tags.length === 1 ? post.tags[0] : post.tags.join(", ")}</p>
                    </div>
                ))
            )}

        </main>
    );
}