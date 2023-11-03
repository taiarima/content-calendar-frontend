"use client";
import React, { useState, useEffect } from "react";

interface Content {
  id: number;
  title: string;
  descr: string;
  status: string;
  contentType: string;
  dateCreated: string | null;
  dateUpdated: string | null;
  url: string;
}

function toPascalCase(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .split("_") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(""); // Join all the words to form a PascalCase string
}

function formatTimestamp(timestamp: string | null): string | null {
  if (timestamp === null) {
    return null;
  }
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const dateObj = new Date(timestamp);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
}

export default function Home() {
  const [data, setData] = useState<Content[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/content");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(
          "There has been a problem with the fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-slate-800 text-white p-8 font-sans">
      <h1 className="text-2xl mb-2">Latest Content</h1>
      <div className="">
        {data
          ? data.map((content, index) => (
              <div
                className="max-w-xl bg-slate-700 p-4 my-4 rounded-lg"
                key={index}
              >
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <h2>Title:</h2>
                  <p>{content.title}</p>

                  <h2>Description:</h2>
                  <p>{content.descr}</p>

                  <h2>Content Type:</h2>
                  <p>{toPascalCase(content.contentType)}</p>

                  <h2>Date Created:</h2>
                  <p>{formatTimestamp(content.dateCreated)}</p>

                  <h2>Date Updated:</h2>
                  <p>{formatTimestamp(content.dateUpdated) || "N/A"}</p>

                  <h2>Status:</h2>
                  <p>{toPascalCase(content.status)}</p>

                  <h2>URL:</h2>
                  <p className="truncate">
                    <a
                      href={content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-500"
                    >
                      {content.url}
                    </a>
                  </p>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
