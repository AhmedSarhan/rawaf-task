import { useQuery } from "@tanstack/react-query";



export interface Filter {
  title: string;
  page: number;
  limit: number;
}
export const searchListing = async ({ filter }: { filter: Filter; }) => {
  const { page = 0, limit = 10, title } = filter;
  const url =
    process.env.EXPO_PUBLIC_API_URL +
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

export const useListing = ({ title, page, limit }: Filter) => {
  return useQuery({
    queryKey: ["listing", title, page, limit],
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
