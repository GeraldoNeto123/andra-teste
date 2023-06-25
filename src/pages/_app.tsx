import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import createEmotionCache from '@/utils/createEmotionCache';
import { AuthProvider } from '@/hooks/useAuth';
import { ThemeProvider } from '@/hooks/useTheme';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}