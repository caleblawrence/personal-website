import '@/styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import MDXComponents from '@/components/MDXComponents';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
