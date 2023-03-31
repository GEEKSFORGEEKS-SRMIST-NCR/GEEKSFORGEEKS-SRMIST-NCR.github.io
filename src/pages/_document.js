import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const seo = {
  title: "GeeksForGeeks SRMIST NCR",
  description:
    "Geeksforgeeks Students' chapter at SRM NCR is working on the idea - \
      to impart knowledge among the geeks in a fun and exciting way.It will be achieved through events, \
      hackathons and webinars to enlighten the mates.We aim for the perfection and success of all who \
      are connected with us through this chapter.So keep yourself connected with us to ace your career \
      beyond the skies",
  siteUrl: "https://www.srmist-ncr-gfg.org/",
  img: "https://raw.githubusercontent.com/GEEKSFORGEEKS-SRMIST-NCR/GEEKSFORGEEKS-SRMIST-NCR.github.io/main/src/images/Screenshot.webp",
};

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta
          name="keywords"
          content="GFG, GeeksforGeeks, GFG Chapter, GFG Chapter SRM, SRM, SRMIST, SRM NCR, GFG SRMIST, GeeksForGeeks SRMIST NCR"
        />

        {/* Favicon */}
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.img} />
        <meta property="og:url" content={seo.siteUrl} />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.description} />
        <meta property="twitter:image" content={seo.img} />
        <meta property="twitter:url" content={seo.siteUrl} />

        {/* Robots */}
        <meta name="robots" content="all" />

        {/* Google tag Manager */}
        <Script
          id="google_tag_manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKCTBZ8');`,
          }}
        ></Script>
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKCTBZ8"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
