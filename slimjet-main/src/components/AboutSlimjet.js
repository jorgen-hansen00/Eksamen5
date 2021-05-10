import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [aboutSlimjetData, setAboutSlimjet] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "aboutSlimjet"]{
            title,
            navn,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
           body,
            "authorImage": author->image
    }`)
    .then((data) => setAboutSlimjet(data))
    .catch(console.error);
  }, []);  
    
  return (
      <main className="bg-gray-200 min-h-screen p-12">
          <section className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
                  {aboutSlimjetData && aboutSlimjetData.map((aboutSlimjet, index) => (
                  <article key={index}>
                      <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 classname="cursive text-3xl lg:text-6xl mb-4">
                                {aboutSlimjet.title}
                                </h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={urlFor(aboutSlimjet.authorImage).url()}
                                className="w-10 h-10 rounded-full"/>
                                <p className="cursive flex items-center pl-2 text-2xl">
                                    {aboutSlimjet.name}</p>
                            </div>
                        </div>
                    </div>
                    <img src={aboutSlimjet.mainImage.asset.url} 
                    alt={aboutSlimjet.title} 
                    className="w-full object-cover rounded-t"
                    style={{ height: "400px" }}/>
                </header>
                      
                <div className="lg:prose-xl text-center ">
                <BlockContent 
                blocks={aboutSlimjet.body} 
                projectId="z0skifgr" 
                dataset="production"/>
                </div>
                          
                  </article>
                  ))}
          </section>
      </main>
  )
}