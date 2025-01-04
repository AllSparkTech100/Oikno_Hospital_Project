import { FaLocationDot } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { LuSend } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import { work } from "../lib/Images";



function ContactCard() {
  return (
    <>
      <div className="container h-full mx-auto mt-32 mb-10  p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="p-5">
            <div className="my-4">
              <h3 className="font-bold text-yellow-500 text-xl lg:text-2xl mb-1 uppercase">
                send us a message
              </h3>
             
              <p className="mt-2 text-lg text-justify">
                Schedule a session with our highly qualified licensed practitioners. The consultation can be conducted from wherever you feel most comfortable. <span className="font-bold text-2xl uppercase text-black">
                  no travel, no clinics
                </span>
              </p>
            </div>
            <div className="mt-8">
            <form action="">
              {/* FullName */}
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label className="font-semibold" htmlFor="fullname">Full Name</label>
                <input type="text" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="fullname" id="" placeholder="e.g James Richard" required />

              </div>
              {/* Email Address */}
              <div className="mb-3 cols-span-1 flex gap-3 flex-col mt-3">
                <label className="font-semibold" htmlFor="email">Email </label>
                <input type="email" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="fullname" id="" placeholder="e.g jamesrichard@hotmail.com" required />
              </div>
              {/* Mobile Number */}
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label className="font-semibold" htmlFor="number">Mobile Number </label>
                <input type="phone" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="fullname" id="" placeholder="e.g +234123456788" required />
              </div>
              {/* Textarea for message */}
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label className="font-semibold" htmlFor="message">Message </label>
                <textarea className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="" id="" cols="30" rows="10"></textarea>
              </div>

              <button className="w-full flex items-center justify-center lg:mt-4 mt-7 rounded-md p-2 bg-slate-800 text-white text-center cursor:pointer">
                <span className="text-white mr-2"><LuSend size={25} /></span> Submit
              </button>
            </form></div>
          </div>

          <div className="h-full order-first lg:order-none md:order-none w-full">
            <img src={work} alt="" className=" h-full w-full" />
          </div>
        </div>
      </div>


      <div className="container mx-auto mt-20 p-5">
        <div className="text-center mx-auto p-3">
          <h3 className="text-yellow-500 text-lg lg:text-2xl  font-semibold uppercase">
            get in touch
          </h3>

          <h4 className="text-xl lg:text-3xl capitalize">
            seamless communication, global Impact</h4>
        </div>
        <div className="grid grid-cols-1 mt-20 gap-5 lg:grid-cols-3 md:grid-cols-2">
          {/* Address */}
          <div className="bg-gray-700 rounded-md flex  justify-center flex-col h-60 p-5">
            <div className=" text-center text-white">
              <FaLocationDot className="mb-3 mx-auto" size={30} />
              <h3 className="mt-3 mb-3 font-semibold text-xl">Head Office</h3>
              <p className="mt-3"> 111 Timber Street, Mile 2 Diobu, Port-Harcourt, Rivers State Nigeria.</p>
            </div>
          </div>
          {/* Email Contact */}
          <div className="bg-[#a29f9ff0] lg:col-span-1  md:col-span-2 text-black rounded-md flex justify-center flex-col h-60 p-5">
            <div className=" text-center ">
              <GoMail className="mb-3 mx-auto" size={30} />
              <h3 className="mt-3 mb-3 font-semibold text-xl">Email Us</h3>
              <p className="mt-3">  <a
                href="mailto:mentalhealthplus24@gmail.com"
                className="underline"
                target="_blank"
              >
                mentalhealthplus24@gmail.com
              </a></p>
              <p className="mt-3">
                <a
                  href="mailto:comfortikangenyin@gmail.com"
                  className="underline"
                  target="_blank"
                >
                  comfortikangenyin@gmail.com
                </a></p>
            </div>
          </div>
          {/* Phone Contact */}
          <div className="bg-gray-700 lg:col-span-1 md:col-span-3 rounded-md flex  justify-center flex-col h-60 p-5">
            <div className=" text-center text-white">
              <IoCall className="mb-3 mx-auto" size={30} />
              <h3 className="mt-3 mb-3 font-semibold text-xl">Give us a Call</h3>
              <p className="mt-3 text-xl lg:text-xl">  <a
                href="tel:+2348149944531"
                className=" text-white"

              >
                +234-814-9944-531
              </a></p>
              <p className="mt-3 text-xl lg:text-xl">  <a
                href="tel:+2348071277101"
                className=" text-white"

              >
                +234-807-1277-101
              </a></p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ContactCard;
