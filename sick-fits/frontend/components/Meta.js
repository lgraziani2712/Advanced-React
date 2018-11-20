import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link ref="stylesheet" type="text/css" href="/static/nprogress.css" />
      <title>Sick Fits!</title>
    </Head>
  );
}
