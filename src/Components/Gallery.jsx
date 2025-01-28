import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


function Gallery() {

    const images = [
        { id: 1, src: "/images/image1.jpg", alt: "Image 1" },
        { id: 2, src: "/images/image2.jpg", alt: "Image 2" },
        { id: 3, src: "/images/image3.jpg", alt: "Image 3" },
        { id: 4, src: "/images/image4.jpg", alt: "Image 4" },
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
        aria-label="Gallery Slider"
      >
        {images.map((image) => (
          <SplideSlide key={image.id}>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Gallery