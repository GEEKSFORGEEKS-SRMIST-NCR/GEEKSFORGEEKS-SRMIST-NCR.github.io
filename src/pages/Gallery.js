import { photos } from "api/GallaryAPI";
import Head from "next/head";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import styles from "styles/Gallery.module.css";

const ReactImagesGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <Head>
        <title>Events | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Gallery</h1>
      {/* Lightbox / Image Viewer */}
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={photos} />
          </Modal>
        ) : null}
      </ModalGateway>
      {/* Masonry Main Body */}
      <div className={styles.container}>
        <Gallery
          photos={photos}
          onClick={openLightbox}
          margin={10}
          direction={"column"}
        />
      </div>
    </>
  );
};

export default ReactImagesGallery;
