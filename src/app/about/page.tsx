import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import React from "react";

function Page() {
  return (
    <div className="font-base">
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
}

export default Page;

const AboutMe = () => {
  return (
    <>
      <h1 className="text-2xl mb-8 font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
          consequatur, harum pariatur provident rerum placeat magni voluptas
          consectetur in exercitationem nobis aut, molestiae iure possimus
          aspernatur nesciunt laudantium ab atque.
        </p>
      </div>
    </>
  );
};
