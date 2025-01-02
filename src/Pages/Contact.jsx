import ContactCard from "../Components/ContactCard";

function Contact() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/seren.jpeg')] bg-cover bg-bottom before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-64">
            <div className="flex-col justify-center items-center flex gap-8 place-items-center">
              <h4 className=" uppercase text-center text-4xl lg:text-7xl font-bold text-white">
                contact us
              </h4>
              <p className="mt-3">

              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactCard />
    </>
  );
}

export default Contact;
