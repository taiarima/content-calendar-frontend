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
    <div>
      Home page
      <div>
        <br />
        {data
          ? data.map((content, index) => (
              <div key={index}>
                <div>ID: {content.id}</div>
                <div>Title: {content.title}</div>
                <div>Description: {content.descr}</div>
                <div>Status: {content.status}</div>
                <div>Content Type: {content.contentType}</div>
                <div>Date Created: {content.dateCreated || "N/A"}</div>
                <div>Date Updated: {content.dateUpdated || "N/A"}</div>
                <div>URL: {content.url}</div>
                <div>
                  <br />
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
