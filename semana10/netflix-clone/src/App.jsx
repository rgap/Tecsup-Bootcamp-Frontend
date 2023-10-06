import { useState } from "react";
import { Layout } from "./componets";

export default function App() {
  const [searchText, setSearchText] = useState("");

  const [titles, setTitles] = useState([]);

  return (
    // overflow-hidden para que desaparezca el scroll
    <div className="bg-black/90 text-netflix-color-dark py-3 px-5 md:px-20 overflow-hidden">
      <Layout
        searchText={searchText}
        setSearchText={setSearchText}
        setTitles={setTitles}
      >
        <h1 className="text-xl my-5">Busqueda {searchText}</h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {titles.length > 0 &&
            titles.map((title) => (
              <div key={title.jawSummary.id}>
                {/* {console.log(title)} */}
                {/* <h1>{title.jawSummary.title}</h1> */}
                <img
                  className="rounded hover:scale-125 transition duration-500 cursor-pointer object-cover"
                  src={title.jawSummary.backgroundImage.url}
                  alt=""
                />
              </div>
            ))}
        </div>
      </Layout>
    </div>
  );
}
