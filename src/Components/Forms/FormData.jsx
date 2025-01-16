import { LuSend } from "react-icons/lu";
import { useState } from "react";
import { sendContactForm } from "../../lib/api"



const initValues = {
    name: "",
    email: "",
    number: "",
    message: "",
};


const initState = { values: initValues };


function FormData() {

    const [state, setState] = useState(initState);
    const { values } = state;

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
        }))
        await sendContactForm(values);
    }
    return (
        <>
            <form action="" method="" >
                {/* FullName */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="name">Full Name</label>
                    <input type="text" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="name" id="" placeholder="e.g James Richard" required value={values.name} onChange={handleChange} />

                </div>
                {/* Email Address */}
                <div className="mb-3 cols-span-1 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="email">Email </label>
                    <input type="email" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="email" id="" placeholder="e.g jamesrichard@hotmail.com" required value={values.email} onChange={handleChange} />
                </div>
                {/* Mobile Number */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="number">Mobile Number </label>
                    <input type="phone" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="number" id="" placeholder="e.g +234123456788" required value={values.number} onChange={handleChange} />
                </div>
                {/* Category */}

                {/* Textarea for message */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="message">Message </label>
                    <textarea className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="message" id="" cols="30" rows="10" value={values.message} onChange={handleChange}></textarea>
                </div>

                <button className="w-full flex items-center justify-center lg:mt-4 mt-7 rounded-md p-2 bg-slate-800 text-white text-center cursor:pointer" disabled={!values.name || !values.email || !values.number || !values.message} onClick={onSubmit}>
                    <span className="text-white mr-2"><LuSend size={25} /></span> Submit
                </button>
            </form>
        </>
    );
}

export default FormData