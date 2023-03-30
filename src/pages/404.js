import Head from "next/head";
import Link from "next/link";

// styles
const pageStyles = {
  color: "var(--text-main)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 313px)",
  textAlign: "center",
};

const paragraphStyles = {
  fontSize: "1.25rem",
  marginBottom: 10,
};

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404: Page Not found</title>
      </Head>
      <main style={pageStyles}>
        <h1 className="section-title">Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔 we couldn’t find what you were looking for.
          <br />
          <br />
          <Link href="/" style={{ color: "var(--text-main)" }}>
            Go home
          </Link>
        </p>
      </main>
    </>
  );
};

export default NotFoundPage;
