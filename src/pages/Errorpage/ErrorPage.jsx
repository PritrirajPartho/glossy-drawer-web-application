import { Link, useRouteError } from "react-router-dom";
import errImg from "../../assets/images/genrall/errorImg.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-xl text-center bg-white shadow-lg  px-3 py-5">
        <h2 className="text-3xl font-bold">Oops!</h2>
        <img src={errImg} className="" alt="Error" />
        <p className="font-semibold text-2xl">Sorry, for error!. This Page will be Created soon</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="btn bg-boxDark my-4 rounded py-2 text-white px-6">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
