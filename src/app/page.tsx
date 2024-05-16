import Links from "@/components/links";
import React from "react";

function Page() {
  return (
    <div className="">
      <h1 className="text-2xl font-heading sm:text-4xl">Manish Kumar</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Manish Kumar, software engineer based in India.</p>
        <br />
        <Links />
      </div>
    </div>
  );
}

export default Page;
