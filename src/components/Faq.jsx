import React, { useState }  from "react"

function Faq() {

  const [clickedIndex, setClickedIndex] = useState(null);

  const answers = [
    "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
  ];

    return(
        <div className="py-5 px-6 md:px-25 text-left text-neutral-300">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-6xl mx-auto h-full ">
          {[
            "What is Netflix?",
            "How much does Netflix cost?",
            "Where can I watch?",
            "How do I cancel?",
            "What can I watch on Netflix?",
            "Is Netflix good for kids?",
          ].map((question, index) => (
            <div key={index}> 
            <div className="flex justify-between mb-3 p-4 bg-[#ffffff1a] rounded-2xl hover:bg-[#ffffff33] cursor-pointer"
            onClick={() => setClickedIndex(index === clickedIndex ? null : index)} // Toggle between clicked and not clicked
            >
              <h3 className="text-md md:text-lg text-neutral-100 text-left font-bold">{question}</h3>
              <p className="text-2xl md:text-3xl font-thin p-0">{clickedIndex === index ? '-' : '+'}</p>
              
            </div>
               {/* Display answer below the clicked question */}
               {clickedIndex === index && (
              <div className="mt-4 mb-3 p-4 bg-[#ffffff1a] rounded-lg">
              <p className="text-md md:text-lg text-neutral-100">{answers[clickedIndex]}</p>
              </div>
               )}
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center mx-2 mt-8 md:mx-8 md:mt-8 md:mb-5">
        <div className="max-w-2xl">
                    <p className="text-center text:xs font-medium md:text-md md:font-semibold">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="flex flex-col items-center mt-4 md:flex-row md:justify-center md:mt-4 gap-4">
                        <div className="relative w-full max-w-xs md:w-80">
                            <input
                                type="text"
                                id="floatingInput"
                                placeholder=" "
                                className="peer w-full border-1 border-gray-600 px-2 pt-7 pb-1 rounded-md bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <label
                                htmlFor="floatingInput"
                                className="absolute left-2 top-2 md:left-4 md:top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-300"
                            >
                                Email Address
                            </label>
                        </div>
                        <button className="bg-red-600 w-full max-w-xs md:w-52 px-6 py-3 rounded-md text-2xl font-medium hover:bg-red-700">
                            Get Started &nbsp;&gt;
                        </button>
                    </div>
        </div>
        </div>
      </div>
)
}
export default Faq;