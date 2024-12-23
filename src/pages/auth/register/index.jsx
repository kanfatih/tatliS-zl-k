import React from "react";
import styles from "./register.module.css";
import rightImage from "../../../assets/image/register.avif";
import imageLogo from "../../../assets/image/logoTS.svg";
import RegisterForm from "./RegisterForm";
const RegisterPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.left}>
            <span className={styles.loginName}>Kayıt Ol </span>
            <RegisterForm />
          </div>
          <div className={styles.right}>
            <img src={imageLogo} alt="" />
            <img className={styles.rightImage} src={rightImage} alt="" />
            <div className={styles.textDiv}>
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

export default RegisterPage;
