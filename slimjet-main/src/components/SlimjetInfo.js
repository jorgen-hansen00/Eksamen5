import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";


export default function Home() {
    const [slimjetInfo, setSlimjetInfo] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "slimjetInfo"]{
            title,
            description,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
        }
    }`)
    .then((data) => setSlimjetInfo(data))
    .catch(console.error);
  }, []);  

  return (
    <div className="mt-24">
             <main className="relative">
              <h1 className="text-5xl relative flex justify-center cursive">Why Slimjet</h1>
              
               <div className="grid sg:grid-cols-1 lg:grid-cols-2 gap-8 ">
                  {slimjetInfo && slimjetInfo.map((slimjetInfo, index) => (
                  <article className="">
                      <span key={index}>
                          <figure className="">
                            <img src={slimjetInfo.mainImage.asset.url} 
                            alt={slimjetInfo.mainImage.alt} />
                            <figcaption>
                               <span className="text-2xl font-bold">{slimjetInfo.title}</span>
                               <br></br>
                               <span className="">{slimjetInfo.description}</span>
                            </figcaption>
                          </figure>
                       </span>
                  </article>

                  ))}
              </div> 
      </main> 

    </div>
    
  );
}