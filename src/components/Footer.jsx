import React from "react";
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-black-100 max-w-full py-6  text-center">
      <div className="flex justify-center items-center gap-7 text-[30px] my-3">
        {/* linkedin  */}
        <a href="https://linkedin.com/in/mandeep2002" target="_blank">
        <div className="bg-gradient-to-r from-violet-900 to-sky-900 py-1 px-3 rounded-md ">
          <i className="fa fa-linkedin "></i>
        </div>
        </a>
        {/* github  */}
        <a href="https://github.com/mandeep28" target="_blank">
          <div className="bg-gradient-to-r from-violet-900 to-sky-900 py-1 px-3 rounded-md ">
          <i className="fa fa-github "></i>
        </div>
        </a>
        {/* instagram */}
        <a href="https://www.instagram.com/mandeep_singh.28/" target="_blank">
          <div className="bg-gradient-to-r from-violet-900 to-sky-900 py-1 px-3 rounded-md ">
          <i className="fa fa-instagram "></i>
        </div>
        </a>
      
        
      </div>
      <div className="mt-7">
        <p>
          mandeepsingh2822@outlook.com <span className="mx-2">
            | +91-98881-94225
          </span>
        </p>
      </div>
      <div className="mt-5">
        <p>
          All right and reserved &copy; {date} mandeepsingh.tech
        </p>

      </div>
    </footer>
  );
};

export default Footer;
