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
  const isLoggedIn = router.pathname !== "/login";

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


// http://localhost:3000/login?code=
// 4/0AfgeXvv2pRmjpM19h9sdo9aZF1pjyI3Z1OsY-spIQ-gCPLVOFi4ngpKWgMymWXpo2Tgpqw
// &scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email%20openid&authuser=1&hd=myysports.com&prompt=consent