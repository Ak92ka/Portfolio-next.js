// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="https://raw.githubusercontent.com/Ak92ka/Portfolio-next.js/refs/heads/main/public/favicon.ico" />
          <meta
            name="description"
            content="Découvrez le portfolio de Ahmed Khalaf, développeur web, incluant ses expériences, projets, et compétences en développement web moderne et créatif." />
          <link rel="apple-touch-icon" href="/logo192.png" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
