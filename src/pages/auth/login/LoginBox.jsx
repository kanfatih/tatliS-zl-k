import React from "react";
import styles from "./login.module.css";
import PasswordInput from "./PasswordInput";
import rightImage from "../../../assets/image/images.jpg";
import imageLogo from "../../../assets/image/logoTS.svg";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.left}>
            <span className={styles.loginName}>Giriş Yap</span>
            <PasswordInput />
            <div className={styles.account}>
              Hesabınız yok mu ? Hemen <Link to={"/kayit"}>oluşturun</Link>
            </div>
          </div>
          <div className={styles.right}>
            <img src={imageLogo} alt="" />
            <img className={styles.rightImage} src={rightImage} alt="" />
            <div className="styles.textDiv">
              <span className={styles.text}>
                Tek platformda teknoloji dünyasını keşfet!
              </span>
              <br /> <br />
              <span className={styles.text2}>
                Software Yapay Zeka ve Daha fazlası...
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bgTop}></div>
      <div className={styles.bgBottom}></div>
    </>
  );
};

export default LoginPage;
