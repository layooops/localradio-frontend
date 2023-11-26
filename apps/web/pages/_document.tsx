import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WZFZCBZ');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){var t=document.createElement("script");
            t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',
            t.onload=function(){VK.Retargeting.Init("VK-RTRG-1562603-5S6NV"),
            VK.Retargeting.Hit()},document.head.appendChild(t)}();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: ` (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();
             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

             ym(91124831, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: ` !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '821428385644561');
            fbq('track', 'PageView');`,
          }}
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#dee5c6' />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZFZCBZ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img src="https://vk.com/rtrg?p=VK-RTRG-1562603-5S6NV" style="position:fixed; left:-999px;" alt=""/>`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/91124831" style="position:absolute; left:-9999px;" alt="" /></div>`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=821428385644561&ev=PageView&noscript=1"
            />`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
