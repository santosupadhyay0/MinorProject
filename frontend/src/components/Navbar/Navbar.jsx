import React from "react";
import Logo from '../../../public/images/logo.png'
import { MdLightMode } from "react-icons/md";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
          <a href="">
            <img
              src={Logo}
              alt="logo"
              className="w-36"
            />
          </a>

          <div
            id="collapseMenu"
            className="lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to='/'
                  href=""
                  className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to='./about'
                  href=""
                  className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  About
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to='./compare'
                  href=""
                  className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  Compare
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href=""
                  className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  Chats
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-6 gap-y-4 ml-auto">
            <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent outline-none pr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="cursor-pointer fill-gray-600"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>

            <div className="flex items-center space-x-8">
            <MdLightMode />

              
              <Link to='./login'>
              <button className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]">
                Login
              </button>
              </Link>

              <button id="toggleOpen" className="lg:hidden">
                <svg
                  className="w-7 h-7"
                  fill="#333"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
