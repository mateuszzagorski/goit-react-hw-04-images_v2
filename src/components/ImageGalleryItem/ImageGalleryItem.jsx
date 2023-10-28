import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={styles.galleryItem} onClick={() => onImageClick(image)}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.galleryItemImage}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};


export default ImageGalleryItem;