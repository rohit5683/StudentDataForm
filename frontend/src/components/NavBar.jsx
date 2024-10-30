import React from "react";
import "./NavBar.css";
import { CiMenuBurger } from "react-icons/ci";
import { FcDataProtection } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const handleManu = () => {
    const navDialog = document.getElementById("nav-dialog");
    navDialog.classList.toggle("hidden");
  };
  return (
    <div className="nav">
      <div className="nav-manu flex justify-between items-center">
        <div className="md-view flex justify-center items-center">
          <a href="">
            <FcDataProtection className="h-12 w-12" />
          </a>
          <span className="text-3xl text-white ">Data Security</span>
        </div>
        <div className="md-view">
          <button
            className="p-3 m-2 md:hidden hover:bg-gray-300 rounded-md"
            onClick={handleManu}
          >
            <CiMenuBurger className="w-12 h-8 text-gray-600" />
          </button>
          <div
            id="nav-dialog"
            className="fixed md:hidden bg-white inset-0 flex justify-between items-start"
          >
            <div className="md-view flex items-center mt-3">
              <div>
                <a href="">
                  <FcDataProtection className="h-12 w-12" />
                </a>
              </div>
              <div>
                <span className="text-3xl">Data Security</span>
              </div>
            </div>
            <div className="md-view">
              <button
                className="p-3 m-2 md:hidden hover:bg-gray-300 rounded-md"
                onClick={handleManu}
              >
                <IoMdClose className="w-12 h-8 text-gray-600" />
              </button>
            </div>
            <div className="fixed text-center w-full flex-row mt-24 md-view-menu text-xl p-2 rounded text-black ">
              <div className="hover:text-green-400">
                <h1>
                  <a href="">Home</a>
                </h1>
              </div>
              <div className="hover:text-green-400">
                <h1>
                  <a href="">About us</a>
                </h1>
              </div>
              <div className="hover:text-green-400">
                <h1>
                  <a href="">Galary</a>
                </h1>
              </div>
              <div className="hover:text-green-400">
                <h1>
                  <a href="">Contact us</a>
                </h1>
              </div>
              <div className="hover:text-green-400">
                <h1>
                  <a href="">Support</a>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-menu hidden p-3 md:flex justify-center items-center text-xl gap-10 text-white">
          <a href="" className="hover:text-black">
            Home
          </a>
          <a href="" className="hover:text-black">
            About us
          </a>
          <a href="" className="hover:text-black">
            Galary
          </a>
          <a href="" className="hover:text-black">
            Contact us
          </a>
          <a href="" className="hover:text-black">
            Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
