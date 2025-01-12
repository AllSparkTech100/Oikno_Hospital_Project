import { LuSend } from "react-icons/lu";

function FormData() {
    return (
        <>
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
                {/* Category */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="therapy">Therapy Option </label>
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
            </form>
        </>
    )
}

export default FormData