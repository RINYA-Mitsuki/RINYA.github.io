import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="description" content="Mitsuboshi Records OfficialPage" />
        <title>Mitsuboshi Records</title>
        <link rel="icon" href="../../public/favicon.ico" />
        <link rel="icon" href="../../public/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="../../public/webclip.png" />
        {/*OGP*/}
        <meta property="og:site_name" content="Mitsuboshi Records" />
        {/*トップページはwebsite、それ以外はarticle*/}
        <meta property="og:type" content="website" />
        {/*ページURLを絶対パスで設定*/}
        {/*<meta property="og:url" content="URL" />*/}
        {/*<meta property="og:title" content="ページのタイトル" />*/}
        {/*<meta property="og:description" content="ページの説明" />*/}
        {/*シェア時に表示する画像を絶対パスで、1200px × 630px*/}
        {/*<meta property="og:image" content="URL" />*/}
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@RINYA_P" />
        <meta name="twitter:description" content="Mitsuboshi Records Official" />
        {/*Twitterシェア時に表示する画像を絶対パスで*/}
        {/*<meta name="twitter:image:src" content="URL" />*/}
        {/*検索結果に出したくないnoindex、クローリングされたくないnofollow*/}
        {/*meta name="robots" content="noindex,nofollow"*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
