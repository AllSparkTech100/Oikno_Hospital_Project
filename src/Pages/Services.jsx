import ServiceCard from "../Components/Cards/ServiceCard";
import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LuSend } from "react-icons/lu";

function Services() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="relative h-80 md:h-[35rem] lg:h-96">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/seren.jpeg')] bg-cover bg-bottom lg:bg-bottom before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-28 md:my-15 lg:my-36">
            <div className="justify-center text-white">
              <h4 className=" uppercase text-center text-2xl md:text-5xl lg:text-7xl font-bold">
                our services
              </h4>

            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              <div>
                <option value="">
                  <select name="" id=""></select>
                </option>
              </div>
              {/* Textarea for message */}
              <div className="mb-3 flex gap-3 flex-col mt-3">
                <label className="font-semibold" htmlFor="message">Message </label>
                <textarea className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="" id="" cols="30" rows="10"></textarea>
              </div>

              <button className="w-full flex items-center justify-center lg:mt-4 mt-7 rounded-md p-2 bg-slate-800 text-white text-center cursor:pointer">
                <span className="text-white mr-2"><LuSend size={25} /></span> Submit
              </button>
            </form>
        </Box>
      </Modal>
      <div className="container mt-20 mx-auto p-4 h-auto">
        <h3 className="uppercase underline font-bold text-lg lg:text-2xl">our services / intervention</h3>
        <div className="my-10">
          <ServiceCard />
        </div>

        <div className="flex items-center justify-center">
          <button type="submit" className="text-center p-4 bg-[#02514b] w-60 rounded-lg text-white lg:hover:scale-90 lg:transition-all " onClick={handleOpen}>
          Book now
          </button>
        </div>
      </div>

    </>
  )
}

export default Services