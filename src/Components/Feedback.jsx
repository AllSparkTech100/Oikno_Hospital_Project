import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function Feedback() {
  const Feeds = [
    {
      name: "Family Therapy Client",
      testify:
        "Our family dynamic has improved so much since working with . They helped us resolve long-standing conflicts and improve our communication.",
    },
    {
      name: "Parent of a teen therapy client",
      testify:
        "My teenage daughter was initially resistant to therapy, but Mental Health Plus and Saner LTD. built a trusting bond with her. She’s now more open and emotionally resilient.",
    },
    {
      name: "Counseling Therapy Client",
      testify:
        "Before counseling, I was overwhelmed by stress. Thanks to Mental Health Plus and Saner LTD., I’ve learned coping mechanisms that allow me to thrive, even in challenging times.",
    },
    {
      name: "Individual Therapy Client",
      testify:
        "I’ve been to many therapists before, but Alexnader Comfort is the first to truly connect with me. Their insight and care have helped me heal from past trauma.",
    },
    {
      name: "Group Therapy Participant",
      testify:
        "The group therapy sessions were a turning point for me. Hearing others’ experiences and sharing my own helped me feel less alone in my struggles.",
    },
    {
      name: "Career Therapy Client",
      testify:
        "I came to Mental Health Plus and Saner LTD. feeling completely lost in my career. Now, I have a clear vision of my goals and the courage to pursue them.",
    },
    {
      name: "Parent of a Child Therapy Client",
      testify:
        "My child loves going to therapy sessions with Mental Health Plus and Saner LTD.. Their patience and creative methods have helped us manage his tantrums and build his confidence",
    },
    {
      name: "Couples Therapy Client",
      testify:
        "After our sessions, I’ve been able to reconnect with my spouse on a deeper level. We now communicate better and truly understand each other’s needs",
    },
    {
      name: "Client Struggling with Anxiety",
      testify:
        "Working with Mental Health Plus and Saner LTD. changed my life. I finally feel heard and understood, and I’ve gained tools to manage my anxiety effectively.",
    },
  ];
  <AutoScroll />;
  return (
    <>
      <div className="h-96 p-8 bg-slate-900 w-full">
        <Splide
          options={{
            perPage: 2,
            breakpoints: {
              480: {
                perPage: 1,
              },
              640: {
                perPage: 1,
              },
              320: {
                perPage: 1,
              },
              360: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
            },
            arrows: true,
            autoScroll: true,
            type: "loop",
            gap: "10px",
            rewind: true,
            focus: "center",
            drag: "free",
            pagination: true,

            lazyLoading: "sequential",
          }}
        >
          {Feeds.map((items, index) => {
            return (
              <SplideSlide key={index}>
                <div className="h-64 mt-12 ">
                  <div className="h-full shadow-inner bg-none  shadow-slate-500 text-yellow-500 rounded-3xl p-12 flex items-center text-center justify-center">
                    <div className="p-5">
                      <p className="text-lg">&quot;{items.testify}&quot;</p>
                      <h5 className="text-white text-xl my-5 font-medium italic">
                        {items.name}
                      </h5>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Feedback;
