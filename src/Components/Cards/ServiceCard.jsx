import {
    suicide,
    // convert,
} from "../../lib/Images";

import { FaUserFriends } from "react-icons/fa";

function ServiceCard() {
    return (
        <>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 p-4 lg:grid-cols-3">

                <div className="h-64 w-full object-center">
                    <img src={suicide} className="rounded-lg object-cover w-full h-full" alt="" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        <span><FaUserFriends size={35} /></span> art therapy
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* first */}
                <div className="h-64 w-full object-center">
                    <img src={suicide} className="rounded-lg object-cover w-full h-full" alt="" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        <span><FaUserFriends size={35} /></span> cognitive-behavioural therapy 
                    </h4>
                    <p className="mt-3 text-lg">
                    Our depression therapy service in Nigeria offers professional support to help individuals manage symptoms, develop coping strategies, and improve overall well-being. Our licensed therapists provide personalized treatment plans tailored to each client&apos;s unique needs.
                    </p>
                </div>
                {/* second */}
                <div className="h-64 w-full object-center">
                    <img src={suicide} className="rounded-lg object-cover w-full h-full" alt="" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        <span><FaUserFriends size={35} /></span> Dialectical behavioural/REBT
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* third */}
                <div className="h-64 w-full object-center">
                    <img src={suicide} className="rounded-lg object-cover w-full h-full" alt="" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        <span><FaUserFriends size={35} /></span> behavioural modification 
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* fourth */}
                <div className="h-64 w-full object-center">
                    <img src={suicide} className="rounded-lg object-cover w-full h-full" alt="" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        <span><FaUserFriends size={35} /></span> counselling
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* fifth */}
                <div className="h-64 w-full object-center">
                    <img src={suicide} className="rounded-lg object-cover w-full h-full" alt="" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        <span><FaUserFriends size={35} /></span> suicide intervention
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* sixth */}
                <div className="h-64 w-full object-center">
                    <img src={suicide} className="rounded-lg object-cover w-full h-full" alt="" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        <span><FaUserFriends size={35} /></span> psycho education 
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* seventh */}
            </div>
        </>
    )
}

export default ServiceCard;