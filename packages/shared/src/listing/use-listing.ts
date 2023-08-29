import { useQuery } from "@tanstack/react-query";

const listData = () => {
  let data = JSON.stringify({
    q: "naruto",
  });

  let config = {
    method: "post",
    url: "https://google.serper.dev/search",
    headers: {
      "X-API-KEY": "3f2cecf8788a1bc3afea77d1ac9720f88bcb9e9b",
      "Content-Type": "application/json",
    },
    data: data,
  };

  return config;
};

export interface Filter {
  title: string;
  page: number;
  limit: number;
}
export const searchListing = async({ filter }: { filter: Filter; }) => {
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

export const useListing = ({title, page, limit}: Filter) => {
  return useQuery({
    queryKey: ["listing", title, page, limit ],
    queryFn: () => searchListing({ filter: { title, page, limit } }),
    select: (data) => {
      console.log('data', data);
      return data.data;
    },
    onError: (error) => {
      console.log('error', error);
    }
  });
};
