// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Any other head elements */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  // Set tenant name here
                  var TENANT_NAME = 'halcyonstudio'; // Replace 'your-tenant-name' with your actual tenant name

                  var d = document;
                  var sA = ['polyfills', 'js'];

                  for (var i = 0; i < sA.length; i++) {
                    var s = d.createElement('script');
                    s.src = 'https://' + TENANT_NAME + '.marianaiframes.com/' + sA[i];
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                  }
                })();
              `,
            }}
          />
          <noscript>
            Please enable JavaScript to view the
            <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
              Web Integrations by Mariana Tek.
            </a>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
