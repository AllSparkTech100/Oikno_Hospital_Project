function About() {
  return (
    <>
      <div
        className="container-full h-auto lg:h-96 bg-[#0A1D25] w-full lg:p-10 p-10"
        // style={{
        //   backgroundImage:
        //     "linear-gradient( rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.5)), url('./assets/counsel.jpeg')",
        // }}
      >
        <div className="text-center mt-5 text-white">
          <div className="flex-col justify-center flex gap-8">
            <h4 className=" font-bold text-4xl text-center capitalize">
              About Mental Health <br />
              Plus and Saner Limited
            </h4>
            <p className="mt-2 mb-7 text-justify md:text-center lg:text-center">
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

      <div className="flex flex-col lg:flex-row place-items-center bg-red-900 w-full mx-auto h-96 mt-40 justify-evenly-center p-5 gap-4">
        <div className="rounded-lg  p-4 w-full lg:w-1/2 h-48  bg-gray-500">
          <h3 className="capitalize text-lg">mission</h3>
        </div>
        <div className="rounded-lg  p-4 w-full lg:w-1/2 h-48  bg-gray-500">
          <h3 className="capitalize text-lg">mission</h3>
        </div>
      </div>
    </>
  );
}

export default About;
