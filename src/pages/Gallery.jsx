import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Gallary } from "../../lib/GallaryAPI";
import "../components/Gallery/gallery.css";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ReactImagesGallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => setData({ img, i });
  const imageAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: Gallary[i + 1], i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ img: Gallary[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      <Seo title="Gallery" />
      <Layout>
        <h1 className="section-title">Gallery</h1>

        {/* Image Opener */}
        {data.img && (
          <div className="design">
            <Icon
              icon="ep:close-bold"
              className="close"
              onClick={() => imageAction()}
            />
            <Icon
              icon="grommet-icons:previous"
              className="icon left"
              onClick={() => imageAction("prev-img")}
            />
            <img
              src={`https://raw.githubusercontent.com/GEEKSFORGEEKS-SRMIST-NCR/GEEKSFORGEEKS-SRMIST-NCR.github.io/main/src/${data.img}`}
              alt=""
              style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
            />
            <Icon
              icon="grommet-icons:previous"
              hFlip={true}
              className="icon right"
              onClick={() => imageAction("next-img")}
            />
          </div>
        )}

        {/* Masonry Main Body */}
        <div className="main-body">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="15px">
              {Gallary.map((image, i) => (
                <div
                  key={i}
                  className="image-card"
                  onClick={() => viewImage(image, i)}
                >
                  <img
                    src={`https://raw.githubusercontent.com/GEEKSFORGEEKS-SRMIST-NCR/GEEKSFORGEEKS-SRMIST-NCR.github.io/main/src/${image}`}
                    alt="Events Gallery"
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Layout>
    </>
  );
};

export default ReactImagesGallery;
