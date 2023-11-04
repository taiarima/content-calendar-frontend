export default function ContentList() {
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
