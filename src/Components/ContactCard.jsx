import { FaLocationDot } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoCall } from "react-icons/io5";

function ContactCard() {
  return (
    <>
    
  <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 p-5 space-x-5">
  <div className="h-48 w-full rounded-lg p-5 bg-red-500">
        <div className=" text-white">
          <FaLocationDot size={30} />
        </div>
        <h3 className="">Head Office</h3>
        <p> 16 Lekki Avenue, Ikeja Lagos state.</p>
      </div>

      {/* <div className=" h-48 w-full rounded-lg p-5 bg-red-500">
        <div className="">
          <GoMail size={30} />
        </div>
        <h3 className="">Email Us</h3>
        <p className="">
          <a
            href="mailto:mentalhealthplus24@gmail.com"
            className=" text-white"
            target="_blank"
          >
            mentalhealthplus24@gmail.com
          </a>
        </p>
        <p className="">
          <a
            href="mailto:comfortikangenyin@gmail.com"
            className=" text-white"
            target="_blank"
          >
            comfortikangenyin@gmail.com
          </a>
        </p>
      </div> */}

      {/* <div className="h-48 w-full rounded-lg p-5 bg-red-500">
        <div className="">
          <IoCall size={30} className="text-white" />
        </div>
        <h3 className="">Let&apos;s Talk</h3>
        <p className="">
          Phone:{" "}
          <a href="tel:+2348149944531" target="_blank">
            <span className="">+2348071277101</span>
          </a>
        </p>
        <p className="">
          WhatsApp:{" "}
          <a href="https://wa.link/1w05vq" target="_blank">
            <span className="">+2348149944531</span>
          </a>
        </p>
      </div> */}
  </div>
    </>
  );
}

export default ContactCard;
