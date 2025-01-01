import { FaLocationDot } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoCall } from "react-icons/io5";

function ContactCard() {
  return (
    <>
      <div className="container mx-auto my-5 bg-slate-600 p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className="p-5 bg-red-700">
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
            <form action="">
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-5/6 rounded-md" name="fullname" id="" placeholder="e.g James Richard" required />

              </div>
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label htmlFor="fullname">Email </label>
                <input type="email" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-5/6 rounded-md" name="fullname" id="" placeholder="e.g jamesrichard@hotmail.com" required />

              </div>

            </form>
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
