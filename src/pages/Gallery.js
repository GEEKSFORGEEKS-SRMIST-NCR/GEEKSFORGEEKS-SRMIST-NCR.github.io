import Head from "next/head";
import Gallery from "react-photo-gallery";
import styles from "styles/Gallery.module.css";
import { getAllGalleryImages } from "../utils/contentful";
import Carousel, { Modal, ModalGateway } from "react-images";
import React, { useEffect, useState, useCallback, useMemo } from "react";

const ReactImagesGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const contentfulImages = await getAllGalleryImages();
      const images = contentfulImages.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
      }));
      setPhotos(images);
    };

    fetchImages();
  }, []);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }, []);

  const memoizedViews = useMemo(() => 
    photos.map(photo => ({
      ...photo,
      srcset: photo.srcSet,
      caption: photo.title
    })), 
    [photos]
  );

  return (
    <>
      <Head>
        <title>Gallery | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Gallery</h1>

      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={memoizedViews} />
          </Modal>
        ) : null}
      </ModalGateway>

      <div className={styles.container}>
        {photos.length > 0 ? (
          <Gallery
            photos={photos}
            onClick={openLightbox}
            margin={10}
            direction="column"
          />
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </>
  );
};

export default React.memo(ReactImagesGallery);