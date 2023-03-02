import Image from "next/image";

export default function NavBar(params) {
  return (
    <>
      <div className={params.styles.nav_sec}>
        <Image src="/logo.svg" alt="logo image" width={200} height={30}></Image>
        <div className={params.styles.links}>
          <a href="">HOME</a>
          <a href="">PAINTINGS</a>
          <a href="">BLOG</a>
          <button>ORDER</button>
        </div>
      </div>
      ;
    </>
  );
}
