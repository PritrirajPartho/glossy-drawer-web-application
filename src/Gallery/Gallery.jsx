import { useEffect, useState } from "react";

const Gallery = () => {
    const [gallerys, setGallerys] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallerys(data))
    }, [])

    return (
        <div>
        <h2 className="text-3xl font-bold text-green-700 text-center mt-4 mb-4">Courses Gallery</h2>


        <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {
                gallerys.slice(0,6).map((gallery) => (
                    <div key={gallery._id} className="card w-96 bg-base-100 shadow-xl  mb-4">
                        <figure><img className="rounded w-52 h-52" src={gallery.photoURL} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Course</h2>
                            <h2 className="card-title">instractor name: {gallery.instructor_name}</h2>
                            <h2 className="card-title">class name: {gallery.course_name}</h2>
                            <h2 className="card-title">rating: {gallery.rating}</h2>
                            <h2 className="card-title">price: {gallery.price}</h2>
                            <h2 className="card-title">availableSeat: {gallery.available_seat}</h2>

                            <div className="card-actions justify-end">
                            </div>
                        </div>
                        <button className="btn btn-outline btn-accent ">Select</button>
                    </div>
                ))
            }

        </div>
      
    </div>
    );
};

export default Gallery;