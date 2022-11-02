import "../index.css";
import Dashboard from "../components/dashboard";

function MyApp({ Component, pageProps }) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  );
}

export default MyApp;
