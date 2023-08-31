import { useState } from "react";
import { Search } from "../shared/components/icons/search";
import { useListing } from "../modules/listing/hooks/use-listing";

const ListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const { data, isLoading } = useListing({
    limit: 10,
    page: 0,
    title: search,
  });
  return (
    <main className="p-3 mx-auto">
      <div className="flex items-center border  w-fit mx-auto border-gray-400 p-1 rounded-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" outline-none focus:outline-none"
        />
        <button
          onClick={() => setSearch(searchTerm)}
          disabled={searchTerm.length < 3}
          className="bg-blue-500 px-3 py-1 rounded-[5px] ml-2 disabled:cursor-not-allowed"
        >
          <Search className="w-4 h-4 text-white" />
        </button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-8 p-3 mx-auto my-2">
          {data?.map((item: any) => (
            <div className="bg-white shadow-md rounded-lg border-none overflow-hidden text-ellipsis">
              <img
                src={item?.attributes?.posterImage?.original}
                alt={item?.attributes?.titles?.en}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h1 className="text-lg font-bold">
                  {item?.attributes?.titles?.en ||
                    item?.attributes?.titles?.en_us ||
                    item?.attributes?.titles?.en_jp ||
                    "no title found"}
                </h1>
                <p className="text-sm truncate line-clamp-3 ">{item?.attributes?.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ListingPage;
