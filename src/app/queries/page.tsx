"use client";
import React, { useState } from "react";
import StyledButton from "@/components/Button";
import StyledHeading from "@/components/StyledHeading";
function Page() {
  const [data, setData] = useState<any[]>([]);
  const [heads, setHeads] = useState<any[]>([]);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://dbms-frontend-gamma.vercel.app/"
      : "http://localhost:3000/";
  async function getData(id: number): Promise<void> {
    try {
      const response = await fetch(`${baseURL}api/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      // console.log("Json data  : ", jsonData);
      setData(jsonData);
      console.log("Data : ", data);
      setHeads(Object.keys(jsonData[0]));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const courseData = [
    { id: 1, question: "What are the 20 top-selling products at each store?" },
    { id: 2, question: "What are the 20 top-selling products in each state?" },
    {
      id: 3,
      question: "What are the 5 stores with the most sales so far this year?",
    },
    {
      id: 4,
      question:
        "In how many stores does Coke outsell Pepsi? (Or, a similar query for enterprises that don’t sell soda.)",
    },
    {
      id: 5,
      question:
        "What are the top 3 types of product that customers buy in addition to milk? (Or similar question for nonfood enterprises.)",
    },
  ];
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      {/* <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
        ALL QUERIES
      </h1> */}
      <StyledHeading name="ALL Queries" />
      <div className=" flex-column justify-center items-center mx-8">
        {courseData.map((query, index) => (
          <div key={index}>
            <div className=" font-semibold py-3"> {query.question}</div>
            <div>
              <StyledButton
                text="Check"
                onClick={() => {
                  getData(query.id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white">
          Results
        </h1>
        <div>
          {data.length > 0 && (
            <>
              <div className="flex items-center justify-center mx-4">
                <table>
                  <thead>
                    <tr>
                      {heads.map((head, index) => (
                        <th key={index} className="px-4 py-2">
                          {" "}
                          {/* Add padding */}
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        {heads.map((head, index) => (
                          <td key={index} className="px-4 py-2">
                            {" "}
                            {/* Add padding */}
                            {row[head]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
