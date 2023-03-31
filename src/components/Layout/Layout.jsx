import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Footer, Navbar } from "..";

export default function Layout({ children }) {
  const { asPath } = useRouter();
  const isPresent = useIsPresent();

  return (
    <AnimatePresence initial={false} mode="wait">
      {/* Added Transition and theme */}
      <Fragment key={asPath}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          {/* Transition Screen */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{
              scaleX: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            exit={{ scaleX: 1, transition: { duration: 0.5, ease: "easeIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
          />
        </ThemeProvider>
      </Fragment>
    </AnimatePresence>
  );
}
