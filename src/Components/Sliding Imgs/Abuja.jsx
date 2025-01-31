import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";



function Abuja() {

    const images = [
        { src: "/Abjt/aj1.webp" },
        { src: "/Abjt/aj2.webp" },
        { src: "/Abjt/aj3.webp" },
        { src: "/Abjt/aj4.webp" },
        { src: "/Abjt/aj5.webp" },
        { src: "/Abjt/aj6.webp" },
        { src: "/Abjt/aj7.webp" },
        { src: "/Abjt/aj8.webp" },
        { src: "/Abjt/aj9.webp" },
        { src: "/Abjt/aj10.webp" },
        { src: "/Abjt/aj11.webp" },
        { src: "/Abjt/aj12.webp" },
        { src: "/Abjt/aj13.webp" },
        { src: "/Abjt/aj14.webp" },
        { src: "/Abjt/aj15.webp" },
        { src: "/Abjt/aj16.webp" },
        { src: "/Abjt/aj17.webp" },
        { src: "/Abjt/aj18.webp" },
        { src: "/Abjt/aj19.webp" },
        { src: "/Abjt/aj20.webp" },
        { src: "/Abjt/aj21.webp" },
        { src: "/Abjt/aj22.webp" },
        { src: "/Abjt/aj23.webp" },
        { src: "/Abjt/aj24.webp" },
        { src: "/Abjt/aj25.webp" },
        { src: "/Abjt/aj26.webp" },
        { src: "/Abjt/aj27.webp" },
        { src: "/Abjt/aj28.webp" },
        { src: "/Abjt/aj29.webp" },
        { src: "/Abjt/aj30.webp" },
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
                Abuja art Therapy
            </h4>
        </div>
    )
}

export default Abuja