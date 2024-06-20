import EESTEC from "./components/Eestec";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Promo from "./components/Promo";
import Video from "./components/Video";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <KeyFeatures></KeyFeatures>
      {/* <EESTEC></EESTEC> */}
      {/* <Statistics></Statistics> */}
      <Video></Video>
      <Promo></Promo>
      {/* <Footer></Footer> */}
    </>
  );
}
