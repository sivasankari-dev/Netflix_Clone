import React from "react";
import { useState } from "react";


const Hero = () => {
    const [open, setOpen] = useState(false);
    
    return (

     <div className=" text-white p-3">

        {/* Hero Section */}
            <div className="relative h-140 md:mx-8 mt-1 mb-5 flex flex-col justify-center items-center rounded-3xl text-center bg-cover bg-no-repeat bg-[url('./assets/netflixheroimage.jpg')] perspective-100 shadow-[0px_-30px_50px_rgba(255,255,255,0.1)]">
                <div className="bg-black/70 absolute inset-0 rounded-3xl shadow-inner shadow-[rgba(255,255,255,0.5)]"></div>
                <div className="relative z-10 md:max-w-2xl">
                    <h1 className="md:text-6xl text-5xl font-bold">Unlimited movies, TV shows, and more</h1>
                    <p className="md:text-xl text-md my-4">Watch anywhere. Cancel anytime.</p>
                    <p className="md:text-md text-xs">Ready to watch? Enter your email to create or restart your membership.</p>

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
    );
  };
  
  export default Hero;
  