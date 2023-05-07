import "../styles/globals.css";
import "../lib/hexStyles.css";
import { TwitterProvider } from "../context/TwitterContext";

export default function App({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
  );
}
