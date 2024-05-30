// pages/_app.js
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { PlasmicRootProvider } from '@plasmicapp/react-web';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PlasmicRootProvider>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  // Set tenant name here
                  var TENANT_NAME = 'halcyonstudio';

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
        </Head>
        <Component {...pageProps} />
        <noscript>
          Please enable JavaScript to view the
          <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
            Web Integrations by Mariana Tek.
          </a>
        </noscript>
      </PlasmicRootProvider>
    );
  }
}

export default MyApp;
