import Service

function Services() {
  return (
    <>
      <div className="relative h-96 lg:h-screen">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/seren.jpeg')] bg-cover bg-bottom before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-10 md:my-15 lg:my-40">
            <div className="flex-col justify-center items-center flex gap-8 place-items-center text-white">
              <h4 className=" uppercase text-center text-4xl lg:text-7xl font-bold">
                our services
              </h4>
              <p className="text-center text-xl">In a world where mental health challenges are escalating, leaving individuals vulnerable to stress,<br className="hidden sm:block md:hidden" /> job loss and more, the need for effective therapy and counseling has reached an overwhelming proportion
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ServiceCard/>
      </div>
    </>
  )
}

export default Services