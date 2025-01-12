import {
    suicide,
    art, counsel,
    child_counsel,
    therapist_img,
    converse,
    convert,
} from "../../lib/Images";

// import { FaUserFriends } from "react-icons/fa";

function ServiceCard() {
    return (
        <>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 p-4 lg:grid-cols-3">

                <div className="h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={art} loading='lazy' className="object-cover w-full h-full" alt="Art Therapy" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold">
                        art therapy
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* first */}
                <div className="h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={counsel} loading="lazy" className="object-cover w-full h-full" alt="Cognitive Thearpy" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold  ">
                        cognitive-behavioural therapy
                    </h4>
                    <p className="mt-3 text-lg">
                        Our depression therapy service in Nigeria offers professional support to help individuals manage symptoms, develop coping strategies, and improve overall well-being. Our licensed therapists provide personalized treatment plans tailored to each client&apos;s unique needs.
                    </p>
                </div>
                {/* second */}
                <div className="h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={child_counsel} loading="lazy" className="object-cover object-top w-full h-full" alt="REBT" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold  ">
                        Dialectical behavioural/REBT
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* third */}
                <div className="h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={therapist_img} loading="lazy" className="object-top object-cover w-full h-full" alt="Behaviour Modification" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold  ">
                        behavioural modification
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* fourth */}
                <div className="h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={converse} loading="lazy" className="object-cover w-full h-full" alt="Counselling" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold  ">
                        counselling
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* fifth */}
                <div className="h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={suicide} loading="lazy" className="object-cover w-full h-full" alt="Suicide Intervention" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold  ">
                        suicide intervention
                    </h4>
                    <p className="mt-3 text-lg">
                        Experienced therapists in Nigeria offer personalized guidance to resolve conflicts, strengthen bonds, and improve communication. Our relationship issues therapy service helps foster healthier, more fulfilling relationships tailored to your unique situation.
                    </p>
                </div>
                {/* sixth */}
                <div className="h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={convert} loading="lazy" className="object-cover w-full h-full" alt="Psycho Education" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl font-semibold  ">
                        psycho education
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