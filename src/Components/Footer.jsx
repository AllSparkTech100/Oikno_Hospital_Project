import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiLinktreeLogoBold } from "react-icons/pi";

function Footer() {
  return (
    <div className="h-42 p-8 flex flex-col md:flex-row lg:flex-row mt-60 bg-black justify-between items-center">
      <div className="flex-1/2">
        <input type="text" />
      </div>
      <div className="flex-1/2">
        <h3 className="text-2xl capitalize text-white">
          connect with us on social media
        </h3>
        <div className="flex mt-3 items-center gap-5">
          <div className="rounded-full h-8 w-8 flex items-center justify-center p-2 bg-gray-200">
            <a href="http://" target="_blank">
              <FaFacebook size={20} />
            </a>
          </div>
          <div className="rounded-full h-8 w-8 flex items-center justify-center p-2 bg-gray-200">
            <a href="http://" target="_blank">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <div className="rounded-full h-8 w-8 flex items-center justify-center p-2 bg-gray-200">
            <a href="http://" target="_blank">
              <PiLinktreeLogoBold size={20} />
            </a>
          </div>
          <div className="rounded-full h-8 w-8 flex items-center justify-center p-2 bg-gray-200">
            <a href="http://" target="_blank">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
