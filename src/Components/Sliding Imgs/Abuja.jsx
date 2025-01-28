import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


function Abuja() {

    const images = [
        { src: "/Abjt/aj1.jpg", alt: "Image 1" },
        { src: "/Abjt/aj2.jpg", alt: "Image 1" },
        { src: "/Abjt/aj3.jpg", alt: "Image 1" },
        { src: "/Abjt/aj4.jpg", alt: "Image 1" },
        { src: "/Abjt/aj5.jpg", alt: "Image 1" },
        { src: "/Abjt/aj6.jpg", alt: "Image 1" },
        { src: "/Abjt/aj7.jpg", alt: "Image 1" },
        { src: "/Abjt/aj8.jpg", alt: "Image 1" },
        { src: "/Abjt/aj9.jpg", alt: "Image 1" },
        { src: "/Abjt/aj10.jpg", alt: "Image 1" },

    ];

    return (
        <div className="max-w-4xl mx-auto py-10">
            <Splide
                options={{
                    type: "loop",
                    perPage: 3,
                    gap: "1rem",
                    breakpoints: {
                        1024: { perPage: 2 },
                        640: { perPage: 1 },
                    },
                }}
                aria-label="Abuja Slider"
            >
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover" loading="lazy"
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
            <h4 className="capitalize text-lg my-7 text-center font-bold">
                Abuja art Therapy
            </h4>
        </div>
    )
}

export default Abuja