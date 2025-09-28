import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <footer className="footer sm:footer-horizontal text-black p-10 max-w-6xl lg:flex xl:gap-20 lg:gap-10 hidden">
        <aside>
          <h1 className="text-[32px] font-bold">Business Logo</h1>
          <div className="flex items-center justify-start gap-4 mt-7 text-2xl">
            <FaFacebook />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </div>
        </aside>
        <nav className="text-sm flex flex-col gap-4 text-[#2A2F32]">
          <h6 className="font-semibold mb-4">Our Services</h6>
          <a className="link link-hover font-[400]">Plumbing</a>
          <a className="link link-hover font-[400]">Drainage</a>
          <a className="link link-hover font-[400]">Bathrooms</a>
          <a className="link link-hover font-[400]">Commercial</a>
        </nav>
        <nav className="text-sm flex flex-col gap-4 text-[#2A2F32]">
          <h6 className="font-semibold mb-4">Useful Links</h6>
          <div className="flex gap-12">
            <div className="grid gap-4">
              <a className="link link-hover font-[400]">About us</a>
              <a className="link link-hover font-[400]">Updates</a>
              <a className="link link-hover font-[400]">Contact Us</a>
              <a className="link link-hover font-[400]">Rates</a>
            </div>
            <div className="grid gap-4">
              <a className="link link-hover font-[400]">Customer Services</a>
              <a className="link link-hover font-[400]">Updates</a>
              <a className="link link-hover font-[400]">Locations</a>
              <a className="link link-hover font-[400]">Sitemap</a>
            </div>
          </div>
        </nav>
        <nav className="flex flex-col gap-4 text-[#2A2F32]">
          <h6 className="font-semibold mb-4">Contact Info</h6>
          <a className="flex gap-3"><CiLocationOn className="text-2xl"/><span className="font-[400]">1 Sail Street, London, SE11 6NQ</span></a>
          <a className="flex gap-3"><CiMail className="text-2xl"/><span className="font-[400]">enquiries@PlumbingPros.com</span></a>
          <a className="flex gap-3"><FiPhoneCall className="text-2xl"/><span className="font-[400]">020 4527 6474</span></a>
        </nav>
      </footer>
       <div className="lg:flex hidden w-[85%] justify-between text-[#2A2F32] text-sm font-[400]">
          <p>© Plumbing Pros. All Rights Reserved</p>
          <p>Website by IH Adventure And Creative</p>
        </div>
      <footer className="text-black p-10 max-w-6xl lg:hidden block">
        {/* Grid Layout */}
        <div className="grid lg:gap-0 md:gap-10 gap-10 md:grid-cols-2 lg:grid-cols-">
          {/* Logo + Socials (full width on md) */}
          <aside className="md:col-span-2 lg:col-span-1">
            <h1 className="md:text-[32px] text-xl font-bold">Business Logo</h1>
            <div className="flex items-center justify-start gap-4 mt-7 md:text-2xl text-xl">
              <FaFacebook />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
            </div>
          </aside>

          {/* Our Services */}
          <nav className="text-sm flex flex-col gap-4 text-[#2A2F32]">
            <h6 className="font-semibold mb-4">Our Services</h6>
            <a className="link link-hover font-[400]">Plumbing</a>
            <a className="link link-hover font-[400]">Drainage</a>
            <a className="link link-hover font-[400]">Bathrooms</a>
            <a className="link link-hover font-[400]">Commercial</a>
          </nav>

          {/* Useful Links */}
          <nav className="text-sm flex flex-col gap-4 text-[#2A2F32]">
            <h6 className="font-semibold mb-4">Useful Links</h6>
            <div className="grid grid-cols-2 gap-8">
              <div className="grid gap-4">
                <a className="link link-hover font-[400]">About us</a>
                <a className="link link-hover font-[400]">Updates</a>
                <a className="link link-hover font-[400]">Contact Us</a>
                <a className="link link-hover font-[400]">Rates</a>
              </div>
              <div className="grid gap-4">
                <a className="link link-hover font-[400]">Customer Services</a>
                <a className="link link-hover font-[400]">Updates</a>
                <a className="link link-hover font-[400]">Locations</a>
                <a className="link link-hover font-[400]">Sitemap</a>
              </div>
            </div>
          </nav>

          {/* Contact Info */}
          <nav className="flex flex-col gap-4 text-[#2A2F32]">
            <h6 className="font-semibold mb-4">Contact Info</h6>
            <a className="flex gap-3">
              <CiLocationOn className="text-2xl" />
              <span className="font-[400]">
                1 Sail Street, London, SE11 6NQ
              </span>
            </a>
            <a className="flex gap-3">
              <CiMail className="text-2xl" />
              <span className="font-[400]">enquiries@PlumbingPros.com</span>
            </a>
            <a className="flex gap-3">
              <FiPhoneCall className="text-2xl" />
              <span className="font-[400]">020 4527 6474</span>
            </a>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:justify-between w-full mt-8 text-[#2A2F32] text-sm font-[400]">
          <p>© Plumbing Pros. All Rights Reserved</p>
          <p>Website by IH Adventure And Creative</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
