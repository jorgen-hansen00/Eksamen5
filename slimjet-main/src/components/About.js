import React, { useEffect, useState} from "react";
import sanityClient from "../client.js";
import AboutSlimjet from "../components/AboutSlimjet";

export default function About() {
    const [about, setabout] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "about"]{
            title,
            navn,
            description,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
        }
    }`)
    .then((data) => setabout(data))
    .catch(console.error);
  }, []);  

    return (
    <div>
    <AboutSlimjet />

    <h1 className="text-2xl font-bold m-16">Our employees</h1>
    <div className="m-16 grid sg:grid-cols-1 lg:grid-cols-2 gap-8 place-items-end">
                  {about && about.map((about, index) => (
                  <article className="p-3.5">
                      <span key={index}>
                          <figure className="flex h-56">
                            <img src={about.mainImage.asset.url} 
                            alt={about.mainImage.alt} />
                            <figcaption className="mx-8">
                               <span className="text-2xl font-bold">{about.title}</span>
                               <br></br>
                               <span>{about.description}</span>
                            </figcaption>
                          </figure>
                       </span>
                  </article>
        

                  ))}
    </div>
    </div>
    )}