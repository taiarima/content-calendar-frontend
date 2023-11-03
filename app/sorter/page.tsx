import React from "react";

type Content = {
  title: string;
  status: string;
  contentType: string;
  dateCreated: string;
};

// type ContentSorterProps = {
//   data: Content[];
//   onSort: (criteria: string, order: "asc" | "desc") => void;
// };

const ContentSorter: React.FC<ContentSorterProps> = ({}) => {
  function onSort() {
    console.log("nothing");
  }
  const data = [
    {
      title: "First Post",
      status: "draft",
      contentType: "blog",
      dateCreated: "2023-10-10T10:00:00Z",
    },
    {
      title: "Second Post",
      status: "published",
      contentType: "blog",
      dateCreated: "2023-10-11T11:00:00Z",
    },
    {
      title: "Learning React",
      status: "draft",
      contentType: "guide",
      dateCreated: "2023-10-12T12:00:00Z",
    },
    {
      title: "Understanding Redux",
      status: "published",
      contentType: "article",
      dateCreated: "2023-10-13T13:00:00Z",
    },
    {
      title: "Advanced TypeScript",
      status: "review",
      contentType: "tutorial",
      dateCreated: "2023-10-14T14:00:00Z",
    },
  ];
  const statusSet = Array.from(new Set(data.map((item) => item.status)));
  const typeSet = Array.from(new Set(data.map((item) => item.contentType)));

  const handleSort = (criteria: string, order: "asc" | "desc") => {
    onSort();
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h3>Sort by type:</h3>
        <div className="flex flex-col space-y-2 items-start">
          {typeSet.map((type) => (
            <button key={type.toString()}>{type}</button>
          ))}
        </div>
      </div>

      <div>
        <h3>Sort by status:</h3>
        <div className="flex flex-col space-y-2 items-start">
          {statusSet.map((status) => (
            <button key={status}>{status}</button>
          ))}
        </div>
      </div>

      <div>
        <h3>Sort by date:</h3>
        <div className="flex flex-col space-y-2 items-start">
          <button>Newest first</button>
          <button>Oldest first</button>
        </div>
      </div>
    </div>
  );
};

export default ContentSorter;
