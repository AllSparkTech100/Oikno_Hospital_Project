import { counsel, child_counsel, doc_img, therapist_img } from "../lib/Images";

function Home() {
  return (
    <>
      {/* Hero */}
      <div
        className="container-full h-96 bg-[#0A1D25] w-full lg:p-10 p-20"
        // style={{
        //   backgroundImage:
        //     "linear-gradient( rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.5)), url('./assets/counsel.jpeg')",
        // }}
      >
        <div className="text-center mt-5 text-white">
          <div className="flex-col justify-center flex gap-8">
            <h4 className=" font-bold text-4xl  capitalize">
              empowering minds, <br /> enriching lives
            </h4>
            <p className="mt-2 mb-7">
              Together, we can break the stigma an promote well-being!!
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="px-4 py-3 lg:w-1/6  w-1/2 bg-white rounded-md">
              <a
                href="https://"
                className="text-black shadow-none focus:outline-none text-sm lg:text-xl md:text-2xl"
                target="_blank"
              >
                Join Our Events
              </a>
            </button>
            <button className="px-4 py-3  w-1/2 lg:w-1/6 bg-white rounded-lg">
              <a
                href="https://"
                className="text-black shadow-none focus:outline-none text-sm lg:text-xl md:text-2xl"
                target="_blank"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex mt-48 bg-gray-800 text-white flex-col lg:flex-row items-center justify-center gap-8 w-full h-auto p-8">
        <div className="flex-1 my-8">
          <p className="font-normal">
            Mental Health and Saner Ltd is dedicated to promoting mental
            wellness and providing comprehensive support services for
            individuals and organizations. We specialize in counseling, therapy,
            and mental health education, empowering people to lead healthier,
            more balanced lives.
          </p>
        </div>
        <div className="h-80 w-full aspect-video bg-red-800 md:w-80 mt-8 flex-1 overflow-hidden rounded-xl">
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
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3 md:grid-cols-3">
          <div className="my-5">
            <h3 className="text-left mb-4 md:mb-8 capitalize text-2xl font-medium">
              enganging events
            </h3>
            <p className="my-5 text-left text-sm">
              Mental Health and Saner Ltd is dedicated to promoting mental
              wellness and providing comprehensive support services for
              individuals and organizations. We specialize in counseling,
              therapy, and mental health education, empowering people to lead
              healthier, more balanced lives.
            </p>
            <button className="bg-green-900 my-5 md:hover:bg-blue-900 px-4 py-2">
              <a href="" className="text-white">
                See more Events
              </a>
            </button>
          </div>

          <div className="lg:relative lg:h-58 lg:top-24">
            {" "}
            <img
              src={counsel}
              alt=""
              loading="lazy"
              className="my-5 aspect-video object-cover h-auto w-full rounded-md"
            />
          </div>

          <div>
            <img
              src={doc_img}
              alt=""
              loading="lazy"
              className="my-5 h-58 w-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>
      {/* Resources */}
      <section className="mt-40 p-5">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3 md:grid-cols-3">
          <div className="my-5">
            <h3 className="text-left mb-4 md:mb-8 capitalize text-2xl font-medium">
              highlighted resources
            </h3>
            <p className="my-5 text-left text-sm">
              Mental Health and Saner Ltd is dedicated to promoting mental
              wellness and providing comprehensive support services for
              individuals and organizations. We specialize in counseling,
              therapy, and mental health education, empowering people to lead
              healthier, more balanced lives.
            </p>
            <button className="bg-green-900 my-5 md:hover:bg-blue-900 px-4 py-2">
              <a href="" className="text-white">
                See more Events
              </a>
            </button>
          </div>

          <div>
            {" "}
            <img
              src={child_counsel}
              alt=""
              loading="lazy"
              className="my-5 h-58 w-full object-cover rounded-md"
            />
          </div>

          <div>
            <img
              src={therapist_img}
              alt=""
              loading="lazy"
              className="my-5 h-58 w-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
