import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";


function Abuja() {
    const [loadedImages, setLoadedImages] = useState(new Array(images.length).fill(false));

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

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };

    return (
        <div className="w-full mx-auto py-10">
          <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: true,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="relative w-full h-64 md:h-80">
              {!loadedImages[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                  <span className="text-gray-500">Loading...</span>
                </div>
              )}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
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