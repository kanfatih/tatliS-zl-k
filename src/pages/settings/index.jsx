import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "./style.module.css";
import ChangeImage from "../../assets/image/Screenshot_2023-05-13-15-00-01-730_com.whatsapp.jpg";
import Button from "@mui/material/Button";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profil");
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Layout>
      <div className={styles.SettingsPage}>
        <div className={styles.LeftLine}>
          <div className={styles.Left}>
            <span className={styles.SettingsText}>Ayarlar</span>
            <span
              onClick={() => {
                setActiveTab("profil");
                handleClick();
              }}
              className={styles.ProfilSettings}
              style={
                activeTab === "profil"
                  ? {
                      background: "gray",
                      borderRadius: "12px",
                      padding: "12px",
                    }
                  : {}
              }
            >
              Profil ayarları
            </span>
            <span
              onClick={() => {
                setActiveTab("hesap");
              }}
              className={styles.AccountSettings}
              style={
                activeTab === "hesap"
                  ? {
                      background: "gray",
                      borderRadius: "12px",
                      padding: "12px",
                    }
                  : {}
              }
            >
              Hesap ayarları
            </span>
            <span
              onClick={() => {
                setActiveTab("cikis");
              }}
              className={styles.Exit}
              style={
                activeTab === "cikis"
                  ? {
                      background: "gray",
                      borderRadius: "12px",
                      padding: "12px",
                    }
                  : {}
              }
            >
              Çıkış yap
            </span>
          </div>

          <div>
            <hr className={styles.Line} />
          </div>
        </div>

        <div className={styles.Right}>
          {activeTab === "profil" && (
            <div className={styles.ProfileSettingsBox}>
              <span className={styles.ProfilSettingsText}>
                Profil Ayarları{" "}
              </span>
              <div className={styles.ProfileSettings}>
                <img className={styles.ImageChange} src={ChangeImage} alt="" />
                <div className={styles.ProfileButton}>
                  <Button variant="contained">Ekle </Button>
                  <Button variant="outlined"> Değiştir </Button>
                </div>
              </div>

              <div className={styles.NameSurnameInput}>
                <div className={styles.NameSurnameInput0}>
                  <span className={styles.InputText}>Yeni isim</span>
                  <input className={styles.Input} type="text" />
                </div>
                <div className={styles.NameSurnameInput0}>
                  <span className={styles.InputText}>Yeni soyisim</span>
                  <input className={styles.Input} type="text" />
                </div>
              </div>
              <Button variant="outlined">KAYDET</Button>
            </div>
          )}

          {activeTab === "hesap" && (
            <div className={styles.AccountSettingsBox}>
              <div className={styles.NameSurnameInput0}>
                <span className={styles.InputText}>Yeni mail</span>
                <input className={styles.Input} type="text" />
              </div>
              <div className={styles.NameSurnameInput0}>
                <span className={styles.InputText}>Yeni şifre</span>
                <input className={styles.Input} type="text" />
              </div>
              <Button variant="outlined">KAYDET</Button>
            </div>
          )}
          {activeTab === "cikis" && (
            <div className={styles.ExitBox}>
              <span>Çıkış yapılsın mı ?</span>
              <Button variant="contained">Çıkış yap</Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
