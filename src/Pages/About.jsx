
import { dir_img } from "../lib/Images";
// import { FaFacebook } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/convert.webp')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-40 ">

            <div className="flex-col justify-center items-center flex gap-8 place-items-center">
              <h4 className=" uppercase text-center text-4xl lg:text-7xl font-bold text-white">
                About Mental Health <br />
                Plus and Saner Limited
              </h4>
              <p className="mt-2 mb-7 text-white text-justify md:text-center lg:text-center">
                Mental Health Plus and Saner Limited is a registered brand with
                the Nigerian corporate affairs commission with Registration No.:{" "}
                <span className="text-yellow-300 font-bold italic">7137614</span>{" "}
                whose mission is to inspire a widespread shift towards proactive
                mental health practices, equipping individuals with the tools to
                navigate mental health challenges, preventing triggers and
                cultivate a holistic well-being. Through a multifaceted approach
                of webinars, workshops, conferences and personalized sessions
                ignites a spark of hope and resilience on inividuals dealing with
                mental health conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-full h-auto lg:h-96 bg-[#0A1D25] w-full lg:p-10 p-10">
        <div className="text-center mt-5 text-white">

        </div>
      </div> */}

      {/* Mission and Vision Statement */}
      <section className="flex flex-col lg:flex-row place-items-center  w-full mx-auto h-auto mt-40 justify-evenly-center p-5 gap-4">
        <div className="rounded-lg bg-slate-900 shadow-inner shadow-slate-500 p-9 h-auto lg:h-64 w-full lg:w-1/2">
          <h3 className="capitalize text-2xl font-bold underline text-yellow-500 underline-offset-4">
            mission
          </h3>
          <p className="mt-4 lg:mt-12 text-white">
            To inspire a widespread shift towards proactive mental health
            practices, fostering healthier and sounder lives for all, equipping
            individuals with the tools to navigate mental health challenges,
            prevent triggers and cultivate a wholistic wellbeing.
          </p>
        </div>
        <div className="rounded-lg bg-slate-900 shadow-inner shadow-slate-500 p-9 h-auto lg:h-64 w-full lg:w-1/2">
          <h3 className="capitalize text-2xl font-bold underline text-yellow-500 underline-offset-4">
            Vision
          </h3>
          <p className="mt-4 lg:mt-12 text-white">
            To inspire a widespread shift towards proactive mental health
            practices, fostering healthier and sounder lives for all, equipping
            individuals with the tools to navigate mental health challenges,
            prevent triggers and cultivate a wholistic wellbeing.
          </p>
        </div>
      </section>

      {/* Description of the CEO */}
      <section className="mt-40 ">
        <div className="container w-full bg-slate-900 mx-auto p-4 rounded-lg">
          <div className="h-auto relative  rounded-2xl flex flex-col lg:flex-row-reverse gap-3 lg:gap-6 w-full py-10 px-4 items-center justify-around ">
            {/* CEO img */}
            <div className="">
              <div className="flex-1 lg:flex-auto h-72 lg:h-80 lg:max-w-64 overflow-hidden rounded-lg">
                <img
                  src={dir_img}
                  alt="The CEO"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex bg-white rounded-lg mt-5 py-4 px-1 items-center gap-4 justify-center">
                {/* <div className="flex items-center justify-center rounded-full p-2 bg-green-900">
                  <FaFacebook size={20} />

                </div> */}
              </div>
            </div>

            {/* CEO description */}
            <div className=" mt-8 flex-1 lg:w-full lg:m-0">
              <div className="text-center">
                <h3 className="font-bold text-2xl uppercase text-yellow-500">
                  Alexander comfort
                </h3>
                <div className="italic my-2 text-white uppercase">
                  the girl who stood up for mental health in nigeria
                </div>
              </div>
              <hr />
              <div className="mt-8 text-justify text-white">
                <p className="mt-4">
                  She is a practicing counseling psychologist specializing in
                  Clinical and Mental Health Counseling. With a strong
                  commitment to advancing mental health awareness and education,
                  Alexander has spearheaded various initiatives across Nigeria,
                  bringing critical mental health discussions to diverse
                  audiences.
                </p>
                <p className="mt-4">
                  She parades herself in telling Mental health stories the
                  African way. Her mission is clear - it is to inspire a
                  widespread shift towards proactive mental health practices,
                  fostering healthier and sounder lives for all, equipping
                  individuals with the tools to navigate Mental health
                  challenges, prevent triggers and cultivate a holistic
                  wellbeing.
                </p>
                <p className="mt-4">
                  One of her notable achievements includes training over a
                  thousand staff members of the Niger Delta Development
                  Commission on “The Psychology of Debt.“ This empowering
                  discussion explored the profound impact of our relationship
                  with money on overall well-being and mental health, providing
                  valuable insights into how mindset shapes financial behaviors
                  and mental health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;