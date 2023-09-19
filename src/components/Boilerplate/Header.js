import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav class="bg-black shadow dark:bg-grey-800">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <div>
              <a class="text-2xl font-bold text-white dark:text-white md:text-2xl hover:text-gray-300 dark:hover:text-gray-300">
                <Link to="/">Kitchen-jungle</Link>
              </a>
            </div>

            <div class="flex md:hidden">
              <button
                type="button"
                class="text-white dark:text-gray-200 hover:text-white dark:hover:text-gray-400 focus:outline-none focus:text-white dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="items-center md:flex">
            <div class="flex flex-col md:flex-row md:mx-6">
              <a class="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                <Link to="/">Home</Link>
              </a>
              <a class="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                <Link to="/shop">Order Now</Link>
              </a>
              <a class="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                <Link to="/Diet">Diet</Link>
              </a>
            </div>

            <div class="flex justify-center md:block">
              <a class="relative text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-300">
                <Link to="/cart">
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
