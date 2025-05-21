import React from "react"

function MoreToAdd() {
    return(
        <div className="py-5 px-6 md:px-25 text-center text-neutral-300">
            <h2 className="text-4xl font-bold mb-6 text-left">More Reasons to Join</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                <div className="relative bg-[#ffffff1a] rounded-lg overflow-hidden p-5 hover:bg-[#ffffff33]">
                    <h3 className="text-neutral-100 font-bold text-left mb-2">Enjoy on your TV</h3>
                    <p className="text-md text-left">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                        </p>
                </div>
                <div className="relative bg-[#ffffff1a] rounded-lg overflow-hidden p-5 hover:bg-[#ffffff33]">
                    <h3 className="text-neutral-100 font-bold text-left mb-2">Download your shows to watch offline</h3>
                    <p className="text-md text-left">Save your favourites easily and always have something to watch.
                        </p>
                </div>
                <div className="relative bg-[#ffffff1a] rounded-lg overflow-hidden p-5 hover:bg-[#ffffff33]">
                    <h3 className="text-neutral-100 font-bold text-left mb-2">Watch everywhere</h3>
                    <p className="text-md text-left">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
                        </p>
                </div>
                <div className="relative bg-[#ffffff1a] rounded-lg overflow-hidden p-5 hover:bg-[#ffffff33]">
                    <h3 className="text-neutral-100 font-bold text-left mb-2">Create profiles for kids</h3>
                    <p className="text-md text-left">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
                        </p>
                </div>
               
            </div>
        </div>
)
}
export default MoreToAdd;