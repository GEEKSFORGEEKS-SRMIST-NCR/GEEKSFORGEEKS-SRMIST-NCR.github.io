// import Bell from "";
import { useEffect } from "react";
import Announcement from "react-announcement";
import { useCookies, withCookies } from "react-cookie";

const Banner = ({ title, subtitle, link }) => {
  const [_, removeCookie] = useCookies(); // eslint-disable-line no-unused-vars

  useEffect(() => {
    removeCookie("banner");
  }, [removeCookie]);

  return (
    <Announcement
      title={title}
      subtitle={subtitle}
      link={link}
      imageSource={"/bell.png"}
      secondsBeforeBannerShows={2}
      animateInDuration={500}
      animateOutDuration={500}
    />
  );
};

export default withCookies(Banner);
