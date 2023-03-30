import { PageTransition } from "next-page-transitions";
import "styles/globals.css";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* For Page Transitions */}
      <Layout>
        <PageTransition
          timeout={400}
          classNames="page-transition"
          loadingDelay={400}
          loadingTimeout={{
            enter: 400,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
        >
          <Component {...pageProps} />
        </PageTransition>
      </Layout>
    </>
  );
}
