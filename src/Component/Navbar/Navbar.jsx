import { Link, NavLink } from "react-router";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav
      className={
        "sticky top-0 start-0 end-0 z-50 bg-black border-gray-200 transition ease-in-out duration-300 "
      }
    >
      <div className="max-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden lg:me-auto w-full md:block md:w-auto p-4"
          id="navbar-default"
        >
          <ul className="font-medium me-auto flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0   ">
            <li>
              <NavLink
                to="#home"
                className="block py-2 px-3 text-white bg-cyan-600 rounded-sm md:bg-transparent md:text-cyan-600 md:p-0 "
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#skills"
                className="block py-2 px-3rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 text-white"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#projects"
                className="block py-2 px-3rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 text-white"
              >
                Project
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden w-full md:block md:w-auto">
          <ul
            className={`font-medium ms-auto flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 `}
          >
            <li>
              <Link
                className="social-link"
                to={"https://www.facebook.com/profile.php?id=100007543084982"}
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                className="social-link"
                to={"https://x.com/MohamedF_elsaka"}
              >
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link
                className="social-link"
                to={"https://github.com/Mohamed-Fawzy15"}
              >
                <FiGithub />
              </Link>
            </li>
            <li>
              <Link
                className="social-link"
                to={"https://www.linkedin.com/in/mohamed-fawzy-6614b9170/"}
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
