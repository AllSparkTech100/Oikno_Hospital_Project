import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Akwa() {
    const images = [
        { src: "/akw/ak1.webp" },
        { src: "/akw/ak2.webp" },
        { src: "/akw/ak3.webp" },
        { src: "/akw/ak4.webp" },
        { src: "/akw/ak5.webp" },
        { src: "/akw/ak6.webp" },
        { src: "/akw/ak7.webp" },
        { src: "/akw/ak8.webp" },
        { src: "/akw/ak9.webp" },
        { src: "/akw/ak10.webp" },
        { src: "/akw/ak11.webp" },
        { src: "/akw/ak12.webp" },
        { src: "/akw/ak13.webp" },
        { src: "/akw/ak14.webp" },
        { src: "/akw/ak15.webp" },
        { src: "/akw/ak16.webp" },
        { src: "/akw/ak17.webp" },
        { src: "/akw/ak18.webp" },
        { src: "/akw/ak19.webp" },
        { src: "/akw/ak20.webp" },
    ];
    return (
        <div className="w-full mx-auto py-10">
            <Splide
                options={{
                    type: "loop",
                    perPage: 2,
                    gap: "1rem",
                    autoplay: true,
                    interval: 2000,
                    pagination: false,
                    breakpoints: {
                        1024: { perPage: 2 },
                        640: { perPage: 1 },
                    },
                }}
            // aria-label="Gallery Slider"
            >
                {images.map((image) => (
                    <SplideSlide key={image.id}>
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={image.src}
                                alt='Abuja Therapy'
                                className="w-full h-64 lg:h-72 object-cover" loading="lazy"
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            <h4 className="capitalize text-lg my-7 text-center font-bold">
               akwa-ibom Therapy
            </h4>
        </div>
    )
}

export default Akwa