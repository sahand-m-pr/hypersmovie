import { useEffect, useState } from "react";
import { fench } from "../../services/fench";
import React from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchresult] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (query) {
        const data = await fench("search/multi", {
          params: {
            query,
          },
        });

        searchResult(data.results);
      } else {
        searchResult([]);
      }
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);
  return (
    <section className="container  max-w-5xl  text-slate-100 mt-12">
      <div className="relative">
        <input
          type="text"
          placeholder="search for movie , tvshow or celebrity"
          className="w-full outline-none p-3 bg-slate-700 text-xl border-slate-900 border-4 rounded-md placeholder:text-slate-400 placeholder:text-base"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          className={`rounded-md  absolute w-full z-10  text-yellow-400 transition-all duration-300 ${
            query ? "h-44 p-2 bg-slate-600 overflow-auto" : "h-0 overflow-hidden opacity-0"
          }`}

        >
        
          <div>{searchResult.map((item)=>(
            <div> {item.name || item.title}</div>
          ))}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          viewBox="0 0 16 16"
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </section>
  );
}
