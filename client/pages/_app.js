import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import NavBar from "../comps/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-Learning Platform</title>
        <meta name="description" content="Elearning site" />
        <link rel="icon" href="/book.ico" />
      </Head>

      <NavBar />
      <ToastContainer position="top-center"/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
