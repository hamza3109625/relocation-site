import Navbar from '../components/Navbar'; 
import '../app/globals.css'
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <AnimatePresence mode="wait">
      <Component {...pageProps} />
      </AnimatePresence>
       
    </>
  );
}

export default MyApp;
