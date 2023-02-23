import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.nav_sec}>
          <Image
            src="/logo.svg"
            alt="logo image"
            width={200}
            height={30}
          ></Image>
          <div className={styles.links}>
            <a href="">HOME</a>
            <a href="">PAINTINGS</a>
            <a href="">BLOG</a>
            <button>ORDER</button>
          </div>
        </div>
        <div className={styles.hero_body}>
          <div className={styles.hero_text}>
            <h1>HI, I{"'"}M MONI</h1>
            <h2>AND I LOVE PAINTING</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
              adipisicing.
            </p>
            <div className={styles.hero_text_button}>
              <h3>GET YOU CUSTOM PAINTING</h3>
              <button>ORDER NOW!</button>
            </div>
          </div>
          <Image
            src="/hero_img.svg"
            alt="logo image"
            width={600}
            height={600}
          ></Image>
        </div>
      </div>
      <div className={styles.body_start}>
        <h1>MONA ART STUDIO</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
          adipisicing.
        </p>
        <button>
          CONTACT ME
        </button>
      </div>

      <div className={styles.body_center}>
        
      </div>
    </>
  );
}
