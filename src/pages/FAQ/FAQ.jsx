import React from 'react';

const FAQ = () => {
    return (
<section className="dark:bg-gray-700 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl text-center mb-4 font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="text-2xl font-bold px-4 py-6 focus:outline-none focus-visible:ri">1.What is digital art, and how does it differ from traditional art?</summary>
				<p className="text-xl px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Answer: Digital art is a form of visual art created using digital technology, such as computers, tablets, and specialized software. Unlike traditional art, which uses physical mediums like paint and canvas, digital art is created digitally using tools like digital brushes and pens on a digital canvas. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="text-2xl font-bold px-4 py-6 focus:outline-none focus-visible:ri">2.What hardware and software do I need to get started with digital art?</summary>
				<p className="text-xl px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Answer: To start with digital art, you'll need a computer or tablet with sufficient processing power and memory, a stylus or digital pen, and graphics software designed for digital art creation. Popular software options include Adobe Photoshop, Corel Painter, Clip Studio Paint, and Procreate for tablets. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="text-2xl font-bold px-4 py-6 focus:outline-none focus-visible:ri">3.Is digital art as legitimate as traditional art?</summary>
				<p className="text-xl px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Answer: Yes, digital art is considered a legitimate and valid form of artistic expression. It has gained widespread recognition and acceptance in the art world, with digital artists exhibiting their work in galleries, museums, and online platforms. What matters most is the creativity and skill of the artist, regardless of the medium.
</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="text-2xl font-bold px-4 py-6 focus:outline-none focus-visible:ri">4.How can I improve my digital art skills?</summary>
				<p className="text-xl px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Answer: Improving your digital art skills involves practice, study, and experimentation. You can take online courses, watch tutorials, join digital art communities, seek feedback from other artists, and regularly create new artwork. Developing your own style and techniques also plays a crucial role in improvement.
</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="text-2xl font-bold px-4 py-6 focus:outline-none focus-visible:ri">5.Are there copyright considerations when creating and sharing digital art online?</summary>
				<p className="text-xl px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Answer: Yes, copyright is important in the world of digital art. When you create digital artwork, you automatically hold copyright to your work. Be mindful of licensing and permissions when using reference materials, and consider licensing your own work for protection or sharing under specific terms. Always respect copyright laws when sharing and using digital art online</p>
			</details>
		</div>
	</div>
</section>
    );
};

export default FAQ;