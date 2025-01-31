import {
  counsel,
  child_counsel,
  doc_img,
  therapist_img,
  converse,
  convert,
} from "../lib/Images";
import { FaArrowCircleRight, FaFacebook, FaDonate } from "react-icons/fa";
import Feedback from "../Components/Feedback";
import Frequent from "../Components/Frequent";

function Home() {
  return (
    <>
      {/* Hero */}

      <div className="relative h-96 lg:h-screen">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/panel.webp')] bg-cover bg-bottom before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 container mx-auto my-20 lg:my-56">
            <h1 className="uppercase text-3xl md:text-5xl lg:text-7xl font-bold text-white"> mental health, <br />is preserved wealth</h1>
            <div className="flex items-center mt-3 gap-5">
              <button className="bg-green-600 px-6 py-3 rounded-md lg:transition-all inline-block lg:hover:scale-90 ">
                <a href="https://www.facebook.com/profile.php?id=61556235412055&mibextid=ZbWKwL" target='blank' className=" text-white uppercase font-semibold ">Join Us</a>
              </button>
              <button className="bg-green-600 px-6 py-3 rounded-md lg:transition-all inline-block lg:hover:scale-90 ">
                <a href="http://" className=" text-white uppercase font-semibold ">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Description */}
      <div className="flex mt-48 text-black flex-col md:flex-row lg:flex-row items-center justify-center gap-8 w-full h-auto px-8 py-12">
        <div className="flex-1 my-8">
          <p className="font-normal text-justify">
            Mental Health and Saner Ltd is dedicated to promoting mental
            wellness and providing comprehensive support services for
            individuals and organizations. We specialize in counseling, therapy,
            and mental health education, empowering people to lead healthier,
            more balanced lives.
          </p>
        </div>
        <div className="h-82 w-full aspect-video mb-5 md:w-80 mt-8 flex-1 overflow-hidden">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/G0zJGDokyWQ?si=wu4t1CiRNCCjA-4y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* Events */}
      <section className="mt-40 p-5">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 md:grid-cols-2">
          <div className="my-5">
            <h3 className="text-left mb-4 md:mb-8 capitalize text-2xl font-bold">
              engaging events
            </h3>
            <p className="my-5 text-left text-sm">
              To inspire a widespread shift towards proactive mental health
              practices, fostering healthier and sounder lives for all, equipping
              individuals with the tools to navigate mental health challenges,
              prevent triggers and cultivate a wholistic wellbeing.
            </p>
            <button className="bg-green-900 my-5 lg:hover:bg-blue-900 px-4 py-2">
              <a
                href="https://web.facebook.com/profile.php?id=61556235412055"
                className="text-white capitalize flex items-center justify-between gap-4"
              >
                See more Events{" "}
                <span>
                  <FaArrowCircleRight size={20} />
                </span>
              </a>
            </button>
          </div>
          <div className="lg:h-96 order-first lg:order-none md:order-none">
            {" "}
            <img
              src={counsel}
              alt="Counseling Specialist"
              loading="lazy"
              className="my-5 lg:my-0 aspect-video lg:aspect-auto object-cover h-full w-full rounded-md"
            />
          </div>
          <div className="hidden lg:h-96 lg:block md:hidden">
            <img
              src={doc_img}
              alt="Doctors Image"
              loading="lazy"
              className="my-5 lg:my-0 h-full w-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mt-40 p-5 lg:p-12">
        <div className="grid grid-cols-1 items-center lg:flex-row-reverse gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="my-5 lg:order-last">
            <h3 className="text-left mb-4 md:mb-8 capitalize text-2xl font-bold">
              highlighted resources
            </h3>
            <p className="my-5 text-left text-sm">
              Explore our carefully curated library of resources, including
              articles, videos and self-help tools. whether you&apos;re looking
              for coping strategies, informative guides, or inspiring stories,
              our resource library is here to support your mental health
              journey.
            </p>
            <button className="bg-green-900 my-5 lg:hover:bg-blue-900 px-4 py-2">
              <a
                href=""
                className="text-white flex items-center justify-between capitalize gap-4"
              >
                Go to resource library
                <span>
                  <FaArrowCircleRight size={20} />
                </span>
              </a>
            </button>
          </div>

          <div className="order-first lg:order-none md:order-first">
            {" "}
            <img
              src={child_counsel}
              alt="Image of a Counseling child"
              loading="lazy"
              className="my-5 object-cover h-full w-full rounded-md"
            />
          </div>
          <div className="hidden lg:block md:hidden">
            <img
              src={therapist_img}
              alt="Therapist Image"
              loading="lazy"
              className="my-5 w-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Conversation */}
      <section className="mt-40 p-5 lg:p-12">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="my-5">
            <h3 className="text-left mb-4 md:mb-8 capitalize text-2xl font-bold">
              join the conversation
            </h3>
            <p className="my-5 text-left text-sm">
              connect with us on social media to stay engage and informed about
              the latest mental health topics, events and resources. follow us
              for inspiring stories, expert tips and community support .
              together, we can foster a supportive environment and raise
              awarness about mental health.Let&apos;s break the stigma join us
              today!!{" "}
            </p>
            <button className="bg-green-900 my-5 lg:hover:bg-blue-900 px-4 py-2">
              <a
                href=""
                className="text-white flex items-center justify-between gap-4"
              >
                Follow Us On{" "}
                <span>
                  <FaFacebook size={20} />
                </span>{" "}
              </a>
            </button>
          </div>

          <div className="h-80 order-first md:order-none lg:order-none">
            {" "}
            <img
              src={converse}
              alt="Image of people discussing"
              loading="lazy"
              className="my-5 object-cover h-full w-full rounded-md"
            />
          </div>
          <div className="h-96 hidden lg:block md:hidden">
            <img
              src={convert}
              alt="counselling discussion Image"
              loading="lazy"
              className="my-5 w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Donation */}
      <div className="container-full bg-gray-800 items-center justify-center text-white  mt-32 p-4 text-center flex flex-col gap-6 lg:p-24">
        <h3 className="text-left mt-12 mb-3 md:mb-8 capitalize text-2xl font-bold lg:text-4xl">
          Donate
        </h3>
        <p className="my-2 md:my-1 text-center">
          Your generousity can help us continue our mission of empowering
          individuals and communities through mental health education and
          support. every contribution , no matter the size, makes a meaningful
          impact on our programs and outreach efforts. Help us break the stigma
          and create a healthier future for all. Click below to make a donation
          today!!!
        </p>

        <button className="bg-green-900 my-5 lg:hover:bg-blue-900 px-4 py-2 md:py-1">
          <a
            href=""
            className="text-white flex items-center justify-between gap-4"
          >
            Donate Now{" "}
            <span>
              <FaDonate size={20} />
            </span>{" "}
          </a>
        </button>
      </div>

      <section className="mt-40 lg:mt-72">
        <h3 className="text-center text-2xl mb-16 font-bold capitalize underline decoration-slate-500">
          what people say about us
        </h3>
        <Feedback />
      </section>

      <div >
        <Frequent />
      </div>
    </>
  );
}

export default Home;
