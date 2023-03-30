import "styles/globals.css";
import { Layout } from "../components";

export default function App({ Component }) {
  return (
    <>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
