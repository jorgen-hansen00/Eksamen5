import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Blog() {
    const [postData, setPost] = useState(null);
    
    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            description,
            published,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
        }
    }`)
    .then((data) => setPost(data))
    .catch(console.error);
  }, []);

    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <section className="container shadow-lg mx-auto bg-blue-100 rounded-lg flex flex-col">
            <div className="grid ">
            {postData && postData.map((post, index) =>
            <article className="pl-8 py-4 pr-8">
                
                    <span key={index} className="flex md:flex-row flex-col rounded-2xl p-6 bg-blue-400">
                        <div>
                        <figure className="figure">
                        <img src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-40 rounded-2xl" />
                        </figure>
                        </div>

                        <div className="pl-4">
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <h1 className="text-4xl cursive pt-4">{post.title}</h1>
                            </Link>
                            <p>{post.description}</p>
                            <p className="pt-4">Published: {post.published}</p>
                        </div>
                    </span>
                
            </article>
            )}
            </div>
            </section>
            
        </main>
    )
}

