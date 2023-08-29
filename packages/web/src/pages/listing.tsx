import { useListing } from "@rawaf/shared";
import { useState } from "react";

const ListingPage = () => {
  // console.log('process', process?.env);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const { data, error, isLoading } = useListing({
    limit: 10,
    page: 0,
    title: search,
  });
  return (
    <main className="p-3 mx-auto">
      <div className="flex items-center border  w-fit mx-auto border-gray-400 p-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" outline-none  focus:outline-none"
        />
        <button
          onClick={() => setSearch(searchTerm)}
          disabled={searchTerm.length < 3}
          className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0017 9.5 6.5 6.5 0 104.5 22a6.47 6.47 0 004.23-1.55l.27.28v.79l5 4 5-4v-5zm-9 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 016.5 14z"
            />
            
          </svg>
        </button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4 p-3 mx-auto my-2">
          {data?.map((item: any) => (
            <div key={item.id}>
              {item.attributes?.titles?.en || item.attributes?.titles?.en_jp}
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ListingPage;
