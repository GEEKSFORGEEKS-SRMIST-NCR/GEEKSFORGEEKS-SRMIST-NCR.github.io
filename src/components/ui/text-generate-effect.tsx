"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";


export const AnimatedWelcomeText = ({duration}:{duration:0.5}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration: duration ? duration : 0.5,
        delay: stagger(0.2),
      }
    );
  }, []);

  const renderAnimatedText = (text, className = "", style = {}) => {
    return text.split(" ").map((word, idx) => (
      <motion.span
        key={word + idx}
        className={cn("dark:text-white text-black opacity-0", className)}
        style={{
          filter: "blur(10px)",
          ...style
        }}
      >
        {word}{" "}
      </motion.span>
    ));
  };

  return (
    <div className="font-bold">
      <motion.div ref={scope} className="space-y-4">
        <p className="text-lg">
          <strong>{renderAnimatedText("Hey there,")}</strong>
          <br />
          {renderAnimatedText(
            "Want to outshine in your career ? or desire to give shape to your ideas? if yes, then you are on the right page. Achieve your dreams with geeksforgeeks and upgrade your skillsets consistently to become more confident."
          )}
          <br />
          <br />
          <span className="pl-4">
            {renderAnimatedText(
              "Geeksforgeeks Students' chapter at SRM NCR is working on the idea - to impart knowledge among the geeks in a fun and exciting way. It will be achieved through events, hackathons and webinars to enlighten the mates. We aim for the perfection and success of all who are connected with us through this chapter. So keep yourself connected with us to ace your career beyond the skies."
            )}
          </span>
          <br />
          <br />
          <em className="pl-12">
            {renderAnimatedText("Wishing you luck!!", "italic")}
          </em>
        </p>
      </motion.div>
    </div>
  );
};

