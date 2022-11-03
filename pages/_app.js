import "../index.css";
import { Dashboard } from "../components/index.js";

function MyApp({ Component, pageProps }) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  );
}

export default MyApp;
