
import { useEffect, useState } from "react";
const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);
  useEffect(() => {
    fetch('gallery.json')
      .then(res => res.json())
      .then(data => setGallerys(data))
  }, [])

  return (
    


    <section className="py-6 dark:bg-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto">

        <h2 className="text-3xl font-bold text-slate-500 text-center mt-4 mb-4"> Gallery</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">


{
          gallerys.slice(0, 9).map((gallery) => (
          
              <img key={gallery._id} className="object-cover w-full dark:bg-gray-500 aspect-square" src={gallery.photoURL} />
          
          ))
        }
        </div>
      </div>
    </section>

  );
};

export default Gallery;
