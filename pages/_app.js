import "../index.css";
import { Dashboard } from "../components/index.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
