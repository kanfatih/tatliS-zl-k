import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import styles from "./MainSt.module.css";
import Content from "./components/Content";
import UIModal from "../../../components/ui/Modal";
import Button from "@mui/material/Button";
import CategoriesSelect from "../../../components/CatagoriesSelect/index";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const CategoriDetailPage = () => {
  let params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("");
  const token = localStorage.getItem("token");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    } else {
      toast.error("Lütfen geçerli bir dosya seçin!");
    }
  };

  const handleSubmit = () => {
    if (!imageFile) {
      toast.error("Lütfen bir resim seçin!");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", imageFile);

    // Resim yükleme işlemi
    fetch("http://localhost:5001/upload", {
      headers: {
        Authorization: `${token}`,
      },
      body: formdata,
      method: "POST",
    })
      .then((uploadResponse) => {
        if (!uploadResponse.ok) {
          throw new Error("Resim yüklenirken hata oluştu!");
        }
        return uploadResponse.json();
      })
      .then((uploadResult) => {
        const imageUrl = uploadResult.imageUrl;

        const blogData = {
          title,
          content,
          category,
          image: imageUrl,
        };

        // Blog kaydetme işlemi
        return fetch("http://localhost:5001/blog", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(blogData),
          method: "POST",
        });
      })
      .then((blogResponse) => {
        if (!blogResponse.ok) {
          throw new Error("Blog kaydedilirken hata oluştu!");
        }
        return blogResponse.json();
      })
      .then((blogResult) => {
        toast.success(blogResult.message);
        handleCloseModal();
        setTitle("");
        setContent("");
        setImageFile(null);
        setCategory("");
      })
      .catch((error) => {
        console.error("Hata:", error.message);
        toast.error(error.message || "Bir hata oluştu!");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5001/blog/category/${params.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Bloglar alınırken hata oluştu!");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [params.id, token]);

  return (
    <Layout>
      <div className={styles.DivBox}>
        <div className={styles.ContentBox}>
          {blogs.length > 0 &&
            blogs.map((blog, index) => (
              <Content key={index} index={index} blog={blog} />
            ))}
        </div>
        <div>
          <button onClick={handleOpenModal} className={styles.Button}>
            <AddCircleIcon style={{ fontSize: "60px" }} />
          </button>
          <UIModal open={showModal} onClose={handleCloseModal}>
            <div className={styles.UIModal}>
              <span>Birşeyler yaz </span>

              <input
                className={styles.AddInput}
                type="text"
                placeholder="Başlık"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className={styles.AddInput}
                type="text"
                placeholder="İçerik"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                className={styles.AddInput}
                type="file"
                id="files"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label className={styles.AddInputImage} htmlFor="files">
                <AddPhotoAlternateIcon /> Dosya Seç
              </label>

              <CategoriesSelect value={category} onChange={setCategory} />

              <Button variant="contained" onClick={handleSubmit}>
                KAYDET
              </Button>
            </div>
          </UIModal>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriDetailPage;
