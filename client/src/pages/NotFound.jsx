import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-[url('https://img.freepik.com/free-photo/outer-space-background_53876-93124.jpg')] bg-no-repeat bg-cover">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full">
            <img
              className="w-12 h-12"
              src="https://www.svgrepo.com/show/384369/alert-danger-error-warning.svg"
              alt=""
            />
          </p>
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            Lost in the Void
          </h1>
          <p className="mt-4 text-gray-400 text-xl">
            It seems you've ventured into the mysterious void, a realm that’s
            not meant for direct navigation.
          </p>
          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link to={"/"} className="w-1/2 px-5 py-2 text-xl tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:bg-blue-500 bg-blue-600">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
