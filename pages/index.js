/* eslint-disable react/jsx-key */
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import NavBar from "./components/navbar.js";
import Hero from "./components/hero";
import Painting from "./components/painting";

export default function Home() {
  const samples = [
    { title: "Painting Title 1" },
    { title: "Painting Title 2" },
    { title: "Painting Title 3" },
    { title: "Painting Title 4" },
  ];

  return (
    <>
      <div className={styles.hero}>
        <NavBar styles={styles}/>
        <Hero styles={styles}/>
      </div>
      <div className={styles.body_start}>
        <h1>MONA ART STUDIO</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
          adipisicing.
        </p>
        <button>CONTACT ME</button>
      </div>

      <div className={styles.body_center}>
        <hr />
      </div>

      <div className={styles.paintings_view}>
        <h1>MY PAINTINGS</h1>
        <a href="">VIEW MORE</a>
      </div>

      <div className={styles.paintings}>
        {samples.map((sample) => (
          <Painting styles={styles} title={sample.title}></Painting>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <Image
            className={styles.painting_image}
            src="/moni.svg"
            alt="logo image"
            width={345}
            height={320}
          ></Image>
          <div className={styles.footer_text}>
            <div className={styles.text_head}>
              <h1>MONALIZA AFEWORK</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
                adipisicing, dolor sit amet, consectetur adipisicing elit.
                Libero nesciunt dolorum obcaecati fugiat dolor
              </p>

              <div className={styles.socials}>
                <i>
                  <AiFillInstagram />
                </i>
                <i>
                  <FaTelegramPlane />
                </i>
                <i>
                  <BsTwitter />
                </i>
              </div>
            </div>
            <div className={styles.cta}>
              <button>GET YOUR PAINTING NOW!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
