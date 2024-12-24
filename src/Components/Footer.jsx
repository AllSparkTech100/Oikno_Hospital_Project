import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-64 p-8 flex flex-col md:flex-row lg:flex-row mt-60 bg-blue-950">
      <div className="flex-col col-span-1 flex-1">
        <h3 className="text-xl capitalize text-white">
          connect with us on social media
        </h3>

        <div className="flex items-center gap-3">
          <div className="rounded-full flex items-center justify-center h-8 w-8 p-4 bg-yellow-500">
            <a href="http://" className="text-black">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
