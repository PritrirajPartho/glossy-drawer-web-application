import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Features = () => {

     useEffect(() => {
          AOS.init({
            duration: 3000,
          });
        });
     return (
          <div className='w-[90%] mx-auto'>
               <div className='text-center'>
                    <h1 className='text-4xl text-black font-semibold'>Sketchpad Features</h1>
                    <p className='text-2xl text-black font-semibold my-4'>Mac • Windows • Android • iOS</p>

                    <p className='w-[70%] mx-auto justify-center my-10'>
                    Whether you’re working on a school poster or brainstorming your next comic book character, Sketchpad makes it easy to bring your ideas to life. Easily draw, edit photos, or design your next business card. Craft images for social media posts, digital ads, paper, or even apparel. Make a quick photo edit with the drag and drop feature, or lose yourself for hours in Sketchpad’s streamlined digital makerspace.
                    </p>
               </div>

               <div className='grid grid-cols-2 gap-10'>
                    <div data-aos="fade-right" data-aos-duration="500">
                         <img className='w-[450px] h-[300px] mx-auto rounded-lg transform
                                transition duration-500 hover:scale-110' src="https://i.ibb.co/dWnjSgv/sk1.jpg" alt="" />
                         <h1 className='text-3xl my-6'>18 Brushes</h1>
                         <p className='w-[80%] text-justify mb-10' >Create cool strokes with the Tile, Mirror, Crayon, and Calligraphy brushes. Decorate your artwork using hundreds of high quality stamps. Use the line and path tools to trace images are create detailed line art.</p>

                    </div>
                    <div data-aos="fade-left"  data-aos-duration="1000">
                    <img className='w-[450px] h-[300px] mx-auto rounded-lg transform
                                transition duration-500 hover:scale-110' src="https://i.ibb.co/92mcYfy/sk2.jpg" alt="" />
                         <h1 className='text-3xl my-6'>5,000+ Clipart</h1>
                         <p className='w-[80%] text-justify' >Browse through the thousands of high quality vector images to use in your project. All images are open source and available for use in professional and commercial artwork. Add your own vector or raster images by dragging and dropping them right into the Sketchpad interface.</p>

                    </div>
                    <div data-aos="fade-right"  data-aos-duration="1000">

                    <img className='w-[450px] h-[300px] mx-auto rounded-lg transform
                                transition duration-500 hover:scale-110' src="https://i.ibb.co/0mSRy9b/sk3.png" alt="" />
                         <h1 className='text-3xl my-6'>14 Shapes</h1>
                         <p className='w-[80%] text-justify mb-10' >Each shape can customized using slider options in the UI. Fill and outlines can be added with colors, gradients and patterns. Paint directly into shapes to keep your brush strokes "inside the lines."</p>
                    </div>
                    <div data-aos="fade-left"  data-aos-duration="1000">

                    <img className='w-[450px] h-[300px] mx-auto rounded-lg transform
                                transition duration-500 hover:scale-110' src="https://i.ibb.co/LdrvJL4/sk4.jpg" alt="" />
                         <h1 className='text-3xl my-6'>800+ Fonts</h1>
                         <p className='w-[80%] text-justify' >Access all of Google’s high quality font library directly from the Sketchpad interface. Fill and outline options can be added to fonts with colors, gradients, and patterns. Text automatically scales to the size of the bounding box so just click and drag the corners to make your text bigger or smaller.</p>

                    </div>
               </div>
          </div>
     );
};

export default Features;