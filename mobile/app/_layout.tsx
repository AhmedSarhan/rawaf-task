import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
export default function HomeLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
