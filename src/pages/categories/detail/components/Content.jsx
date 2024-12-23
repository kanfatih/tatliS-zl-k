import React, { useState } from "react";
import styles from "./MainSt.module.css";
import UIModal from "../../../../components/ui/Modal";
import defaultImage from "../../../../assets/image/images.jpg";

const Content = ({ index, blog }) => {
  const [showContentModal, setShowContentModal] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleOpenModal = () => setShowContentModal(true);
  const handleCloseModal = () => setShowContentModal(false);

  return (
    <div index={index} className={styles.ContentDiv}>
      <div
        style={{
          position: "relative",
        }}
      >
        <img className={styles.Image} src={blog.image ?? defaultImage} alt="" />

        <div className={styles.category}>{blog.category.toUpperCase()}</div>
      </div>
      <div className={styles.ContentHeader}>{blog.title}</div>

      <div className={styles.ContentText}>{truncateText(blog.content, 20)}</div>
      <div onClick={handleOpenModal} className={styles.Link}>
        Devamını oku
      </div>
      <div className={styles.UserName}>yazan: asdfg</div>

      <UIModal open={showContentModal} onClose={handleCloseModal}>
        <div className={styles.ContentHeader}>{blog.title}</div>
        <img className={styles.Image} src={blog.image ?? defaultImage} alt="" />
        <div className={styles.ContentDetail}>{blog.content}</div>
      </UIModal>
    </div>
  );
};

export default Content;
