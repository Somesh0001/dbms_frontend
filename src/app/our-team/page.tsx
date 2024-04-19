"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };
  const data = [
    {
      name: "Somesh Dwivedi",
      rollNumber: "2022UGCS006",
      mail: "2022ugcs006@nitjsr.ac.in",
    },
    {
      name: "Harshit Shrivastav",
      rollNumber: "2022UGCS097",
      mail: "2022ugcs097@nitjsr.ac.in",
    },
    {
      name: "Abhijeet Kumar Trivedi",
      rollNumber: "2022UGCS112",
      mail: "2022ugcs112@nitjsr.ac.in",
    },
    {
      name: "Ritik Kumar",
      rollNumber: "2022UGCS021",
      mail: "2022ugcs021@nitjsr.ac.in",
    },
    {
      name: "Adarsh Singh",
      rollNumber: "2022UGCS012",
      mail: "2022ugcs012@nitjsr.ac.in",
    },
    {
      name: "Saikat Dutta",
      rollNumber: "2022UGCS083",
      mail: "2022ugcs083@nitjsr.ac.in",
    },
    {
      name: "Md Faizan Alam",
      rollNumber: "2022UGCS045",
      mail: "2022ugcs045@nitjsr.ac.in",
    },
    {
      name: "Arin Choudhary",
      rollNumber: "2022UGCS059",
      mail: "2022ugcs059@nitjsr.ac.in",
    },
    {
      name: "Harsh Vardhan",
      rollNumber: "2022UGCS047",
      mail: "2022ugcs047@nitjsr.ac.in",
    },
    {
      name: "Harsh Kumar",
      rollNumber: "2022UGCS007",
      mail: "2022ugcs007@nitjsr.ac.in",
    },
    {
      name: "Puthineedi Sanjana",
      rollNumber: "2022UGCS088",
      mail: "2022ugcs088@nitjsr.ac.in",
    },
    {
      name: "Aayush Kumar",
      rollNumber: "2022UGCS008",
      mail: "2022ugcs008@nitjsr.ac.in",
    },
    {
      name: "Nitesh Kumar",
      rollNumber: "2022UGCS043",
      mail: "2022ugcs043@nitjsr.ac.in",
    },
    {
      name: "Badal Raj",
      rollNumber: "2022UGCS051",
      mail: "2022ugcs051@nitjsr.ac.in",
    },
    {
      name: "Simran Kumari",
      rollNumber: "2022UGCS092",
      mail: "2022ugcs092@nitjsr.ac.in",
    },
    {
      name: "Bodepu Harsha Vardhan",
      rollNumber: "2022UGCS082",
      mail: "2022ugcs082@nitjsr.ac.in",
    },
    {
      name: "Mahadevu Shiva Shankar",
      rollNumber: "2022UGCS069",
      mail: "2022ugcs069@nitjsr.ac.in",
    },
    {
      name: "Rohit Kumar",
      rollNumber: "2022UGCS017",
      mail: "2022ugcs017@nitjsr.ac.in",
    },
    {
      name: "Shubhra Kanti Roy",
      rollNumber: "2022UGCS029",
      mail: "2022ugcs029@nitjsr.ac.in",
    },
    {
      name: "Sahil Raj",
      rollNumber: "2022UGCS053",
      mail: "2022ugcs053@nitjsr.ac.in",
    },
    {
      name: "Kallepally Joy Prajwith",
      rollNumber: "2022UGCS064",
      mail: "2022ugcs064@nitjsr.ac.in",
    },
    {
      name: "Ankita Sahay",
      rollNumber: "2022UGCS073",
      mail: "2022ugcs073@nitjsr.ac.in",
    },
    {
      name: "Adarsh Kumar",
      rollNumber: "2022UGCS090",
      mail: "2022ugcs090@nitjsr.ac.in",
    },
    {
      name: "Subodh Marandi",
      rollNumber: "2022UGCS103",
      mail: "2022ugcs103@nitjsr.ac.in",
    },
    {
      name: "Narava Vyshnavi",
      rollNumber: "2022UGCS116",
      mail: "2022ugcs116@nitjsr.ac.in",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {" "}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {" "}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Our Team
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          In the domain of Group 1, our team emerges as a beacon of
          collaboration and innovation, driven by a shared passion for
          excellence.
        </p>
        <table style={{ width: "100%" }}>
          <thead className="my-10">
            <tr>
              {" "}
              {/* Use <tr> instead of <thead> */}
              <th>Name</th>
              <th>Roll number</th>
              <th>Mail</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{item.name}</td>
                <td>{item.rollNumber}</td>
                <td>
                  <a href={`mailto:${item.mail}`}>{item.mail}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
