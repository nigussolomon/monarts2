/* eslint-disable react/jsx-key */
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import  {AiFillInstagram}  from 'react-icons/ai';
import  {FaTelegramPlane}  from 'react-icons/fa';
import  {BsTwitter} from 'react-icons/bs';

export default function Home() {
  const samples = [
    {title: "Paint Title 1"},
    {title: "Paint Title 2"},
    {title: "Paint Title 3"},
    {title: "Paint Title 4"},
  ]

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
        <hr />
      </div>

      <div className={styles.paintings_view}>
        <h1>MY PAINTINGS</h1>
        <a href="">VIEW MORE</a>
      </div>

      <div className={styles.paintings}>
        {samples.map(sample => (
            <div className={styles.painting}>
                <Image
                  className={styles.painting_image}
                  src="/hero_img.svg"
                  alt="logo image"
                  width={190}
                  height={190}
                ></Image>
                <div className={styles.painting_text}>
                  <div className={styles.text_head}>
                  <h2>{sample.title}</h2>
                  <span>100x100</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                  nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
                  adipisicing.</p>
                  </div>
                  <h4>Monaliza Afework</h4>
                </div>
            </div>
          ))
        }
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
                adipisicing, dolor sit amet, consectetur adipisicing elit. Libero
                nesciunt dolorum obcaecati fugiat dolor</p>
            
            <div className={styles.socials}>
              <i>
                <AiFillInstagram/>
              </i>
              <i>
                <FaTelegramPlane/>
              </i>
              <i>
                <BsTwitter/>
              </i>
            </div>
            
            </div>
            <div className={styles.cta}>
            <button>
              GET YOUR PAINTING NOW!
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
