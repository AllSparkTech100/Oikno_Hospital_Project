import { useState } from "react";

function Book() {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        notes: "",
    });

    const totalSteps = 5;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    // Validation: Check if all fields in the current step are filled
    const isStepValid = () => {
        switch (step) {
            case 1:
                return formData.name.trim() !== "" && formData.email.trim() !== "";
            case 2:
                return formData.phone.trim() !== "";
            case 3:
                return formData.date.trim() !== "" && formData.time.trim() !== "";
            case 4:
                // Notes are optional, so this step is always valid
                return true;
            case 5:
                // Review step, all data should already be valid
                return true;
            default:
                return false;
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <h2 className="text-xl lg:text-3xl font-semibold mb-4">Personal Details</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="capitalize my-3 font-medium text-lg">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="border-black focus:outline-none border-2 p-3 w-full my-4"
                                    placeholder="James Peterson "
                                    required
                                />
                            </div>

                            <div>
                                <label className="capitalize my-3 font-medium text-lg">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border-black focus:outline-none border-2 p-3 w-full my-4"
                                    placeholder="james@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="capitalize my-3 font-medium text-lg">Date of Birth</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="border-black focus:outline-none border-2 p-3 w-full my-4"
                                    // placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="capitalize mb-3 font-medium text-lg">phone number</label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="border-black focus:outline-none border-2 p-3 w-full my-4"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                        </div>

                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <label className="capitalize mb-3 font-medium text-lg">gender</label>
                        <p className="flex gap-4 items-center">
                            <span><input type="checkbox" name="male" id="" /></span> male
                        </p>
                        {/* <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 w-full mb-4"
                            placeholder="Enter your phone number"
                            required
                        /> */}
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Step 3: Appointment Details</h2>
                        <label className="block mb-2">Select Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 w-full mb-4"
                            required
                        />
                        <label className="block mb-2">Select Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 w-full mb-4"
                            required
                        />
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Step 4: Additional Notes</h2>
                        <label className="block mb-2">Notes (Optional)</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 w-full mb-4"
                            placeholder="Add any notes for your booking"
                        />
                    </div>
                );
            case 5:
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
                        <ul className="mb-4">
                            <li><strong>Name:</strong> {formData.name}</li>
                            <li><strong>Email:</strong> {formData.email}</li>
                            <li><strong>Phone:</strong> {formData.phone}</li>
                            <li><strong>Date:</strong> {formData.date}</li>
                            <li><strong>Time:</strong> {formData.time}</li>
                            <li><strong>Notes:</strong> {formData.notes}</li>
                        </ul>
                        <button
                            onClick={() => alert("Booking Submitted!")}
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container h-auto mx-auto mt-10 p-6">
            {/* Progress Bar */}
            <div className="mb-6">
                <div className="relative w-full bg-gray-200 h-2 rounded-full">
                    <div
                        className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(step / totalSteps) * 100}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    Step {step} of {totalSteps}
                </p>
            </div>

            {/* Form Content */}
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        className="bg-gray-300 text-black px-4 py-2"
                    >
                        Back
                    </button>
                )}
                {step < totalSteps && (
                    <button
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={`px-4 py-2 rounded-md ${isStepValid()
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Book;
