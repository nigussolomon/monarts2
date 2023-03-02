import Image from "next/image";

export default function Hero(params) {
    return(
        <>
        <div className={params.styles.hero_body}>
          <div className={params.styles.hero_text}>
            <h1>HI, I{"'"}M MONI</h1>
            <h2>AND I LOVE PAINTING</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
              adipisicing.
            </p>
            <div className={params.styles.hero_text_button}>
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
        </>
    )
}