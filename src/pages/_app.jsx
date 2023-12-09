import "../styles/global.css";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}