import { FaLocationDot } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { work } from "../lib/Images"
function ContactCard() {
  return (
    <>
      <div className="container h-full mx-auto mt-40 mb-10  p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-2">
          <div className="p-5">
            <div className="my-4">
              <h3 className="font-bold text-yellow-500 text-xl lg:text-2xl mb-1 uppercase">
                send us a message
              </h3>
              <h5 className="text-lg mb-2">
                Book a session or make an enquiry
              </h5>
              <p className="mt-2 text-lg text-justify">
                Schedule a session with our highly qualified licensed practitioners. The consultation can be conducted from wherever you feel most comfortable. <span className="font-bold text-2xl uppercase text-black">
                  no travel, no clinics
                </span>
              </p>
            </div>
            <div className="mt-8"> <form action="">
            {/* FullName */}
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="fullname" id="" placeholder="e.g James Richard" required />

              </div>
              {/* Email Address */}
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label htmlFor="email">Email </label>
                <input type="email" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="fullname" id="" placeholder="e.g jamesrichard@hotmail.com" required />
              </div>
              {/* Mobile Number */}
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label htmlFor="number">Mobile Number </label>
                <input type="number" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="fullname" id="" placeholder="e.g +234123456788" required />
              </div>
              Textarea for message subi
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label htmlFor="message">Message </label>
                <textarea className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button className="w-full mt-3 rounded-md p-2 bg-slate-800 text-white text-center cursor:pointer">
                Submit
              </button>
            </form></div>
          </div>

          <div className="h-full order-first lg:order-none md:order-none w-full">
            <img src={work} alt="" className=" h-full w-full" />
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col auto-cols-max">
        <div className="h-48 w-full rounded-lg p-5 bg-red-500">
          <div className=" text-white">
            <FaLocationDot size={30} />
          </div>
          <h3 className="">Head Office</h3>
          <p> 16 Lekki Avenue, Ikeja Lagos state.</p>
        </div>

        <div className=" h-48 w-full rounded-lg p-5 bg-red-500">
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
        </div>

        <div className="h-48 w-full rounded-lg p-5 bg-red-500">
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
        </div>
      </div>
    </>
  );
}

export default ContactCard;
