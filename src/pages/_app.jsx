import "../styles/global.css";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isPersonalizationPage = router.pathname === '/personalization';
  const bodyStyle = isPersonalizationPage ? 
    {background: 'linear-gradient(118deg, #F62E7D 1.37%, #A536B3 100%)', width: '100%', height: '100%', borderRadius: '20px', padding: '20px 0 20px 0'} : 
    {width: '100%', height: '100%', borderRadius: '20px', padding: '20px 0 20px 0', background: '#EBEBEB'};

  return (
    <main>
      <Navbar />
      <div style={bodyStyle}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  )
}
