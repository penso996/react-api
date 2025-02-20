// Main.jsx
import { useState } from "react";

// Initial posts array
const initialBlogPosts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        author: "Mario Rossi",
        content: "JavaScript è un linguaggio di programmazione utilizzato per creare interattività nei siti web.",
        category: "Programmazione",
        availability: true
    },
    {
        id: 2,
        title: "I benefici della meditazione",
        author: "Laura Bianchi",
        content: "La meditazione aiuta a ridurre lo stress e migliorare la concentrazione.",
        category: "Benessere",
        availability: true
    },
    {
        id: 3,
        title: "Viaggiare in Giappone: cosa sapere",
        author: "Giovanni Verdi",
        content: "Il Giappone offre un mix unico di tradizione e modernità. Ecco alcuni consigli per il tuo viaggio.",
        category: "Viaggi",
        availability: false
    },
    {
        id: 4,
        title: "Guida all'alimentazione sana",
        author: "Chiara Neri",
        content: "Una dieta equilibrata è essenziale per mantenere la salute e il benessere.",
        category: "Salute",
        availability: true
    },
    {
        id: 5,
        title: "Come migliorare la produttività",
        author: "Stefano Gialli",
        content: "Organizzare il tempo e ridurre le distrazioni può aumentare significativamente la produttività.",
        category: "Crescita Personale",
        availability: false
    }
];

export default function Main() {

    // useState to handle blogPosts
    const [posts, setPosts] = useState(initialBlogPosts);

    // FUNCTION to remove a post from ID (utilized for the button)
    function removePost(id) {
        const updatedBlogPost = posts.filter(post => post.id !== id);
        setPosts(updatedBlogPost);
    }

    // RETURN
    return (
        <main>

            {/* post container */}
            {posts.length === 0 ? (<div><h3>No posts to show</h3></div>) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <h5>{post.author}</h5>
                        <p>{post.content}</p>
                        <h6>{post.category}</h6>
                        <p>{post.availability === true ? "DISPONIBILE" : "NON DISPONIBILE"}</p>
                        <button onClick={() => removePost(post.id)}>Delete</button>
                    </div>
                ))
            )}

        </main>
    );
}