import React, { useEffect } from "react";
import Announcement from "react-announcement";
import { withCookies, useCookies } from "react-cookie";
import Logo from "../../images/bell.png";

const Banner = () => {
  const [cookies, removeCookie] = useCookies();

  useEffect(() => {
    removeCookie("banner");
  }, []);

  return (
    <Announcement
      title="Recruitment Started"
      subtitle="We are hiring for the core members. Feel Free to Register. Click here to Apply />"
      link="/Recruitment"
      imageSource={Logo}
      secondsBeforeBannerShows={2}
      animateInDuration={500}
      animateOutDuration={500}
    />
  );
};

export default withCookies(Banner);
