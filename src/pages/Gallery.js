import { Gallary } from "api/GallaryAPI";
import Image from "next/image";
import { useCallback, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageViewer from "react-simple-image-viewer";

import "styles/gallery.module.css";

const ReactImagesGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <h1 className="section-title">Gallery</h1>
      {/* Image Opener */}
      {isViewerOpen && (
        <ImageViewer
          src={Gallary}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      ;{/* Masonry Main Body */}
      <div className="main-body">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="15px">
            {Gallary.map((image, i) => (
              <div
                key={i}
                className="image-card"
                onClick={() => openImageViewer(i)}
              >
                <Image src={image} fill alt="Events Gallery" />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default ReactImagesGallery;
