import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
