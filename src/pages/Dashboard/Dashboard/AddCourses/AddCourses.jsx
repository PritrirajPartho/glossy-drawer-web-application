import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const AddCourses = () => {
  const { user } = useContext(AuthContext);

   const notify = () => toast("Added Successfully");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://glossy-drawer-web-application-server.vercel.app/newcourses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
        if (result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log(result);
      });
    reset;
        alert('Toy Added');
    return false;
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto ">
        <h1 className="text-3xl text-center my-5 font-bold">Add Course</h1>

        <div className="shadow-xl p-5 my-8 bg-[#f0fdf4]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="grid grid-cols md:grid-cols-2 gap-5">
              <div>
                <label className="block my-2">Course Name</label>
                <input
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full p-3"
                  placeholder="Enter Course Name"
                  {...register("courseName")}
                />
              </div>

              <div>
                <label className="block my-2">Instructor Name</label>
                <input
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full p-3"
                  value={user?.displayName}
                  placeholder="Seller Name"
                  defaultValue=""
                  {...register("sellerName")}
                />
              </div>

              <div>
                <label className="block my-2">Photo URL</label>
                <input
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full p-3"
                  placeholder="photo url"
                  defaultValue=""
                  {...register("image")}
                />
              </div>

              {/* include validation with required or other standard HTML validation rules */}
              <div>
                <label className="block my-2">Email</label>
                <input
                  type="email"
                  value={user?.email}
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full p-3"
                  placeholder="Email"
                  {...register("postedBy", { required: true })}
                />
              </div>

              <div>
                <label className="block my-2">Video URL</label>
                <input
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full p-3"
                  placeholder="video url"
                  defaultValue=""
                  {...register("videoUrl")}
                />
              </div>

              <div>
                <label className="block my-2">Price</label>
                <input
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full p-3"
                  placeholder="price"
                  defaultValue=""
                  {...register("price")}
                />
              </div>

              <div>
                <label className="block my-2">Rating</label>
                <input
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full p-3"
                  placeholder="rating"
                  defaultValue=""
                  {...register("rating")}
                />
              </div>

              <div>
                <label className="block my-2">Description</label>
                <input
                  className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 w-full px-3 py-5"
                  placeholder="description"
                  defaultValue=""
                  {...register("description")}
                />
              </div>

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div className="flex justify-center">
              <div>
                <input
                  className="btn bg-blue-300 text-black px-8 py-3 my-6"
                  type="submit"
                  // onClick={notify}
                />
              </div>
              {/* <ToastContainer /> */}
            </div>
          </form>
        </div>

        <Link to="/dashboard" className="btn btn-neutral flex justify-center my-12">Go Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default AddCourses;
