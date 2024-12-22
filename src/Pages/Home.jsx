function Home() {
  return (
    <>
      <div className="container w-full lg:p-16 p-12">
        <div className="text-center text-black">
          <div className="flex-col justify-center flex gap-8">
            <h4 className=" font-bold text-4xl  capitalize">
              empowering minds, <br /> enriching lives
            </h4>
            <p className="mt-5 mb-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              ducimus voluptatibus labore fugit, nulla, eveniet accusantium
              facilis esse assumenda, sequi reiciendis hic ullam magnam. Quia
              ratione error iure delectus aliquam.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="px-4 py-3 lg:w-1/6  w-1/2 bg-black rounded-md">
              <a href="https://" className="text-white" target="_blank">
                Join Our Events
              </a>
            </button>
            <button className="px-4 py-3  w-1/2 lg:w-1/6 bg-black rounded-lg">
              <a href="https://" className="text-white" target="_blank">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex mt-48 bg-gray-800 flex-col lg:flex-row items-center justify-center gap-8 w-full h-auto p-8">
        <div className="flex-1 my-8">
          <p className="text-black font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            numquam officiis laudantium, molestias nisi quod amet ut,
            dignissimos, est sit nesciunt? Quidem alias obcaecati repellat
            labore veniam, reprehenderit amet numquam!
          </p>
        </div>
        <div className="h-80 w-full md:w-80 mt-8 flex-1 overflow-hidden rounded-xl flex object-cover justify-center items-center">
          <iframe
            width="560"
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

      <section className="mt-40 p-5">
        <h3 className="text-left capitalize text-3xl font-medium">
          enganging Events
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
          <div className="my-5">
            <p className="my-5 text-left text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus cupiditate sequi veritatis debitis in, voluptatibus
              vitae inventore maxime officiis nam cum eius aliquam
              exercitationem repudiandae aspernatur facere eos distinctio
              tempora.
            </p>
            <button className="bg-green-900 my-5 px-4 py-2">
              <a href="" className="text-white">
                See more Events
              </a>
            </button>
          </div>
          <img src="" alt="" className="my-5" />
        </div>
      </section>
    </>
  );
}

export default Home;
