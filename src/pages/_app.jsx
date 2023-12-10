import "../styles/global.css";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <div style={{width: '100%', height: '100%', borderRadius: '20px', padding: '20px 0 20px 0', background: '#EBEBEB'}}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  )
}