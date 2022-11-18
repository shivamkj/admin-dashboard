import "../index.css";
import { Dashboard } from "../components/index";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLoggedIn = router.pathname !== "/auth";

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn ? (
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      ) : (
        <Component {...pageProps} />
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
