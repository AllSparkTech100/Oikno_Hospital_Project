import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { useState } from "react";


function Abuja() {
    // const [loadedImages, setLoadedImages] = useState(new Array(images.length).fill(false));

    const images = [
        { src: "/Abjt/aj1.jpg" },
        { src: "/Abjt/aj2.jpg" },
        { src: "/Abjt/aj3.jpg" },
        { src: "/Abjt/aj4.jpg" },
        { src: "/Abjt/aj5.jpg" },
        { src: "/Abjt/aj6.jpg" },
        { src: "/Abjt/aj7.jpg" },
        { src: "/Abjt/aj8.jpg" },
        { src: "/Abjt/aj9.jpg" },
        { src: "/Abjt/aj10.jpg" },
        { src: "/Abjt/aj11.jpg" },
        { src: "/Abjt/aj12.jpg" },
        { src: "/Abjt/aj13.jpg" },
        { src: "/Abjt/aj14.jpg" },
        { src: "/Abjt/aj15.jpg" },
        { src: "/Abjt/aj16.jpg" },
        { src: "/Abjt/aj17.jpg" },
        { src: "/Abjt/aj18.jpg" },
        { src: "/Abjt/aj19.jpg" },
        { src: "/Abjt/aj20.jpg" },
        { src: "/Abjt/aj21.jpg" },
        { src: "/Abjt/aj22.jpg" },
        { src: "/Abjt/aj23.jpg" },
        { src: "/Abjt/aj24.jpg" },
        { src: "/Abjt/aj25.jpg" },
        { src: "/Abjt/aj26.jpg" },
        { src: "/Abjt/aj27.jpg" },
        { src: "/Abjt/aj28.jpg" },
        { src: "/Abjt/aj29.jpg" },
        { src: "/Abjt/aj30.jpg" },
    ];

    // const handleImageLoad = (index) => {
    //     setLoadedImages((prev) => {
    //         const newLoaded = [...prev];
    //         newLoaded[index] = true;
    //         return newLoaded;
    //     });
    // };

    return (
        <div className="w-full mx-auto py-10">

            <Splide
                options={{
                    type: "loop",
                    perPage: 3,
                    gap: "1rem",
                    autoplay: true,
                    interval: 3000,
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
                                alt={image.alt}
                                className="w-full h-64 lg:h-72 object-cover"
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