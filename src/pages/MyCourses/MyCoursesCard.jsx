import React, { useContext } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
const MyCoursesCard = ({ detail }) => {
  const { id, img, name, Details, rating, Level, Instructor, price } = detail;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMakeSelected = () => {
    if (user && user.email) {
      const selected = {
        classI: _id,
        name,
        price,
        seats,
        email: user.email,
        img,
      };

      fetch("http://localhost:5000/addClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selected),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Selected",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/myCart");
          }
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Plz Login First",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <div>
          <a
            href=""
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img src={img} className="object-cover w-full h-48" alt="" />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 text-xl font-bold leading-5">{name}</h6>
                  <p className="text-sm font-medium text-left text-gray-900">
                    {Details}
                  </p>
                  <div className="text-left">
                    <p className="font-semibold">
                      <span className="text-lg font-semibold text-amber-600">
                        Instructor:
                      </span>{" "}
                      {Instructor}
                    </p>
                    <p className="font-semibold">
                      <span className="text-lg font-semibold text-amber-600">
                        Level:
                      </span>{" "}
                      {Level}
                    </p>
                  </div>
                  <div className="flex gap-28">
                    <p className="font-semibold">
                      <span className="text-lg font-semibold text-amber-600">
                        Price:
                      </span>{" "}
                      ${price}
                    </p>
                    <div className="text-base text-right flex gap-3">
                      <div className="flex">
                        <StarIcon className="h-6 w-6 text-blue-500" />
                        <StarIcon className="h-6 w-6 text-blue-500" />
                        <StarIcon className="h-6 w-6 text-blue-500" />
                        <StarIcon className="h-6 w-6 text-blue-500" />
                        <StarIcon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h2>{rating}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center flex gap-20 ml-5">
                  <Link
                    to={`/courseDetail/${id}`}
                    style={{
                      backgroundImage:
                        " linear-gradient(to right, #de5c70 0%, #e98c5d 51%, #de5c70 100%)",
                    }}
                    className="inline-flex mb-10 items-center justify-center w-full h-10 px-6  tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto focus:shadow-outline focus:outline-none"
                  >
                    Details
                  </Link>
                  <a
                    onClick={() => handleMakeSelected(detail)}
                    style={{
                      backgroundImage:
                        " linear-gradient(to right, #de5c70 0%, #e98c5d 51%, #de5c70 100%)",
                    }}
                    className="inline-flex mb-10 items-center justify-center w-full h-10 px-6  tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto focus:shadow-outline focus:outline-none"
                  >
                    Select
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;
