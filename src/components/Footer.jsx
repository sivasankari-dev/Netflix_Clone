import React from "react"

function Footer() {
    const items = ["FAO","Help Centre","Account","Media Centre","Investor Relations","Jobs","Ways to Watch","Terms of Use",
        "Privacy Policy", "Cookie Preferences","Corporate Information", "Contact Us", "Speed Test","Legal Notices","Only on Netflix"]
    return(
        <div className="text-neutral-300 text-sm md:text-md py-6 px-6 md:px-12 font-semibold">
        <p className="mt-4 text-center md:text-left">Questions?&nbsp;Call&nbsp;<span className="underline">000-800-000-1743</span></p>
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left underline cursor-pointer">
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <p className="text-center my-2">&copy; 2025 Netflix Clone. All rights reserved. Created by Sivasankari</p>
       </div>

)
}
export default Footer;