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

function Home() {
  return (
    <>
      {/* Hero */}
      <div
        className="container-full h-auto lg:h-96 bg-[#0A1D25] w-full lg:p-10 p-10"

      >
        <div className="text-center mt-5 text-white">
          <div className="flex-col justify-center flex gap-8">
            <h4 className=" font-bold text-4xl  capitalize">
              empowering minds, <br /> enriching lives
            </h4>
            <p className="mt-2 mb-7">
              Together, we can break the stigma and promote well-being!!
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="px-4 py-3 lg:w-1/6  w-1/2 bg-white rounded-md">
              <a
                href="https://"
                className="text-black shadow-none focus:outline-none text-sm lg:text-xl md:text-xl"
                target="_blank"
              >
                Join Our Events
              </a>
            </button>
            <button className="px-4 py-3  w-1/2 lg:w-1/6 bg-white rounded-lg">
              <a
                href="https://"
                className="text-black shadow-none focus:outline-none text-sm lg:text-xl md:text-xl"
                target="_blank"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex mt-48 bg-gray-800 text-white flex-col lg:flex-row items-center justify-center gap-8 w-full h-auto px-8 py-12">
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
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 md:grid-cols-3">
          <div className="my-5">
            <h3 className="text-left mb-4 md:mb-8 capitalize text-2xl font-bold">
              engaging events
            </h3>
            <p className="my-5 text-left text-sm">
              Mental Health and Saner Ltd is dedicated to promoting mental
              wellness and providing comprehensive support services for
              individuals and organizations. We specialize in counseling,
              therapy, and mental health education, empowering people to lead
              healthier, more balanced lives.
            </p>
            <button className="bg-green-900 my-5  md:hover:bg-blue-900 px-4 py-2">
              <a
                href=""
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
              className="my-5 aspect-video object-cover h-full w-full rounded-md"
            />
          </div>
          <div className="hidden lg:block md:block">
            <img
              src={doc_img}
              alt="Doctors Image"
              loading="lazy"
              className="my-5 h-58 w-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mt-40 p-5 lg:p-12">
        <div className="grid grid-cols-1 items-center lg:flex lg:flex-row-reverse gap-6 lg:grid-cols-3 md:grid-cols-3">
          <div className="my-5">
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
            <button className="bg-green-900 my-5 md:hover:bg-blue-900 px-4 py-2">
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

          <div className="order-first lg:order-none md:order-none">
            {" "}
            <img
              src={child_counsel}
              alt="Image of a Counseling child"
              loading="lazy"
              className="my-5 object-cover h-full w-full rounded-md"
            />
          </div>
          <div className="hidden lg:block md:block">
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
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3 md:grid-cols-3 ">
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
            <button className="bg-green-900 my-5 md:hover:bg-blue-900 px-4 py-2">
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
          <div className="h-96 hidden lg:block md:block">
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
        <p className="my-2 text-center">
          Your generousity can help us continue our mission of empowering
          individuals and communities through mental health education and
          support. every contribution , no matter the size, makes a meaningful
          impact on our programs and outreach efforts. Help us break the stigma
          and create a healthier future for all. Click below to make a donation
          today!!!
        </p>

        <button className="bg-green-900 my-5 md:hover:bg-blue-900 px-4 py-2">
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
        <h3 className="text-center text-2xl mb-16 font-bold capitalize">
          what people say about us
        </h3>
        <Feedback />
      </section>
    </>
  );
}

export default Home;
