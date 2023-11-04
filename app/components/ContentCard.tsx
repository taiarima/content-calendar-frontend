import React from "react";
import { toPascalCase } from "../library/toPascalCase";
import { formatTimestamp } from "../library/formatTimeStamp";

type Props = {};

export default function AddEditContent({}: Props) {
  return (
    <>
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
    </>
  );
}
