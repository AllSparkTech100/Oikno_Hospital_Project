import ContactCard from "../Components/ContactCard";

function Contact() {
  return (
    <>
      <div className="container-full h-auto lg:h-96 bg-[#0A1D25] w-full lg:p-10 p-10">
        <div className="text-center mt-5 text-white">
          <div className="place-items-center">
            <h4 className=" font-bold text-4xl lg:text-5xl text-center capitalize">
             Contact Us
            </h4>

          </div>
        </div>
      </div>
      
      <ContactCard />
    </>
  );
}

export default Contact;
