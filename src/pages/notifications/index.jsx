import React from "react";
import Layout from "../../components/layout";
import styles from "./Notifications.module.css";
import { useSelector } from "react-redux";

const Notifications = () => {
  const userName = useSelector((state) => state.user?.userName || "");
  return (
    <Layout>
      <div>
        <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.head}>
              <div className={styles.notific}>Bildirimler</div>
              <button className={styles.Button}>
                Tümünü okundu olarak işaretle
              </button>
            </div>
            <div className={styles.box}>
              <div className={styles.boxText}>
                <div>
                  <span className={styles.name}>{userName} </span>
                  <span className={styles.text}>
                    bir gönderi paylaştı &nbsp;
                    <span className={styles.redDot}></span>
                  </span>
                  <div className={styles.messageNot}>
                    Yapay zeka: gelişimi ve artan kullanımı
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
