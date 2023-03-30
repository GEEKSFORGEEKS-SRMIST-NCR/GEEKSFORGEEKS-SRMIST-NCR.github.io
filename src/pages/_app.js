import { ThemeProvider } from "next-themes";
import "styles/globals.css";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
