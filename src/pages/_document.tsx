import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';
import lightTheme, { roboto } from '@/styles/lightTheme';
import darkTheme from '@/styles/darkTheme';
import createEmotionCache from '@/utils/createEmotionCache';
import { MyAppProps } from './_app';
import { useTheme } from '@/hooks/useTheme';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  const { theme } = useTheme();

  return (
    <Html lang="pt-BR" className={roboto.className}>
      <Head>
        <meta name="theme-color" content={theme === 'dark' ? darkTheme.palette.primary.main : lightTheme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


MyDocument.getInitialProps = async (ctx: DocumentContext) => {


  const originalRenderPage = ctx.renderPage;


  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: { key: React.Key | null | undefined; ids: any[]; css: any; }) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};