import React, { useEffect } from "react";
import Announcement from "react-announcement";
import { withCookies, useCookies } from "react-cookie";
import Logo from "../../images/bell.png";

const Banner = () => {
  const [_, removeCookie] = useCookies(); // eslint-disable-line no-unused-vars

  useEffect(() => {
    removeCookie("banner");
  }, [removeCookie]);

  return (
    <Announcement
      title="Recruitment Started"
      subtitle="We are hiring for the core members. Feel Free to Register. Click here to Apply />"
      link="/Recruitment"
      //daysToLive={1}
      imageSource={Logo}
      secondsBeforeBannerShows={2}
      animateInDuration={500}
      animateOutDuration={500}
    />
  );
};

export default withCookies(Banner);
