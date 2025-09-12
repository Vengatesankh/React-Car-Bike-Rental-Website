import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor md:gap-6">
        <div>
          <img src={assets.logo} className="h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            Premium car and bike rental service with a wide selection of luxury
            and everyday vehicles for all your driving needs
          </p>
          <div className="flex items-center gap-3 mt-6">
            {/* Instagram */}
            <a href="#">
              <img
                src={assets.instagram_logo}
                alt="insta"
                className="w-5 h-5"
              />
            </a>
            {/* Facebook */}
            <a href="#">
              <img src={assets.facebook_logo} alt="insta" className="w-5 h-5" />
            </a>
            {/* Twitter */}
            <a href="#">
              <img src={assets.twitter_logo} alt="insta" className="w-5 h-5" />
            </a>
            {/* LinkedIn */}
            <a href="#">
              <img src={assets.gmail_logo} alt="insta" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800">QUICK LINKS</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800">RESOURCES</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-medium text-gray-800">CONTACT</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>2334 Luxury Drive</li>
            <li>Chennai</li>
            <li>+3 4454324555</li>
            <li>CarBikeRental@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">Brand</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a> <span> | </span>
          </li>
          <li>
            <a href="#">Terms</a> <span> | </span>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
