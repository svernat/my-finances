import type { AppProps } from 'next/app';
import '../styles/globals.css';

/**
 * Main application component that wraps all pages
 * This component is used to maintain state when navigating between pages
 * and to add global styles
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}