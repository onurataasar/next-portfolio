import React from "react";
import styles from "./styles.module.css";
const ft = () => {
  return (
    <div className="bg-black h-[100vh] text-white items-center justify-center flex flex-col gap-12">
      <h1 className="sm:text-4xl text-xl">
        Antalya Dünyanın En Güzel Şehridir{" "}
      </h1>{" "}
      <div className={styles.heart}></div>
    </div>
  );
};

export default ft;
