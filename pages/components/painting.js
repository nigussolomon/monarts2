import Image from "next/image";

export default function Painting(params) {
  return (
    <>
      <div className={params.styles.painting}>
        <Image
          className={params.styles.painting_image}
          src="/hero_img.svg"
          alt="logo image"
          width={190}
          height={190}
        ></Image>
        <div className={params.styles.painting_text}>
          <div className={params.styles.text_head}>
            <h2>{params.title}</h2>
            <span>100x100</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nesciunt dolorum obcaecati fugiat dolor sit amet, consectetur
              adipisicing.
            </p>
          </div>
          <h4>Monaliza Afework</h4>
        </div>
      </div>
    </>
  );
}
