import { ThemeProvider } from "next-themes";
import { Footer, Navbar, Transition } from "..";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Transition>
        <main>{children}</main>
      </Transition>
      <Footer />
    </ThemeProvider>
  );
}
