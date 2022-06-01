import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

// create a new variable that equals the ProgressBar funcion
const progress = new ProgressBar({
  size: 3,
  color: '#FE595E',
  className: 'z-50',
  delay: 100
});

// basically saying. when the routeChangeStart(aka when the page starts loading.) the progress bar will start
Router.events.on('routeChangeStart', progress.start);
// when the router change is complete, it finishes
Router.events.on('routeChangeComplete', progress.finish);
// if there is an error. it finishes
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
