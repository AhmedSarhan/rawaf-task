import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types";



export interface Filter {
  title: string;
  page: number;
  limit: number;
}
export const searchMovies = async ({ filter }: { filter: Filter; }) => {
  const { page = 0, limit = 10, title } = filter;
  const url =
    import.meta.env.VITE_LIST_API_URL +
    `?page[limit]=${limit}&page[offset]=${page}${title ? `&filter[text]=${title}` : ""
    }`;


  const options = {
    method: "GET",
    headers: {
      accept: "application/vnd.api+json",
      "content-type": "application/json",
    },
  };

  const respnse = await fetch(url, options);

  return respnse.json();

};

export const useMovies = ({ title, page, limit }: Filter) => {
  return useQuery({
    queryKey: ["movies", title, page, limit],
    queryFn: () => searchMovies({ filter: { title, page, limit } }),
    select: (data) => {
      console.log('data', data);
      return data.data as Movie[];
    },
    onError: (error) => {
      console.log('error', error);
    }
  });
};
