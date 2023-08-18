
import { useForm } from 'react-hook-form';


function AddCourse() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.className) {
      onAddClass(data.className);
      reset();
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-slate-700">
      <h2 className="text-3xl font-bold text-center mb-9 text-white mb-2">Added Course</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className="mb-4">
            <label htmlFor="className" className="block mb-1 font-medium text-xl text-white">
              Course Name
            </label>
            <input
              type="text"
              id="className"
              {...register('className', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.className ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.className && (
              <p className="text-red-500">Class Name is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="classImage" className="block mb-1 font-medium text-xl text-white">
              Course video
            </label>
            <input
              type="url"
              id="classImage"
              {...register('classImage', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.classImage ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.classImage && (
              <p className="text-red-500">Class Image URL is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="instructorName" className="block mb-1 font-medium text-xl text-white">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              {...register('instructorName', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.instructorName ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.instructorName && (
              <p className="text-red-500">Instructor Name is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="instructorEmail" className="block mb-1 font-medium text-xl text-white">
              Instructor Email
            </label>
            <input
              type="email"
              id="instructorEmail"
              {...register('instructorEmail', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.instructorEmail ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.instructorEmail && (
              <p className="text-red-500">Instructor Email is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="availableSeats" className="block mb-1 font-medium text-xl text-white">
            Photo URL
            </label>
            <input
              type="photo"
              id="photo"
              {...register('availableSeats', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.photo ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.photo && (
              <p className="text-red-500">photo is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="availableSeats" className="block mb-1 font-medium text-xl text-white">
            Available seats
            </label>
            <input
              type="number"
              id="availableSeats"
              {...register('availableSeats', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.availableSeats ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.availableSeats && (
              <p className="text-red-500">Available seats is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="availableSeats" className="block mb-1 font-medium text-xl text-white">
            Price
            </label>
            <input
              type="number"
              id="Price"
              {...register('Price', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.Price ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.Price && (
              <p className="text-red-500">Price is required.</p>
            )}
          </div>


          <div className="mb-4">
            <label htmlFor="price" className="block mb-1 font-medium text-xl text-white">
              Description
            </label>
            <textarea
            
              {...register('price', { required: true })}
              className={`w-full px-4 py-1 border rounded-md focus:outline-none focus:ring ${errors.price ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.price && (
              <p className="text-red-500">Description is required.</p>
            )}
          </div>
          
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full text-xl bg-blue-950 hover:bg-blue-900 text-white font-medium px-4 py-2 rounded-md"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
}



export default AddCourse;