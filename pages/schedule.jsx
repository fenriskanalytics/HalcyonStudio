import * as React from "react";
import { useEffect } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/copy_of_halcyon_studios/PlasmicGlobalContextsProvider";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/copy_of_halcyon_studios/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicSchedule } from "../components/plasmic/copy_of_halcyon_studios/PlasmicSchedule";
import { useRouter } from "next/router";

function Schedule() {
  const router = useRouter();

  const injectScript = () => {
    const tenantName = 'halcyonstudio';
    const scriptContent = `
      (function () {
        var TENANT_NAME = '${tenantName}';
        var d = document;
        var sA = ['polyfills', 'js'];

        for (var i = 0; i < sA.length; i++) {
          var s = d.createElement('script');
          s.src = 'https://' + TENANT_NAME + '.marianaiframes.com/' + sA[i];
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        }
      })();
    `;
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = scriptContent;
    document.head.appendChild(scriptElement);
  };

  useEffect(() => {
    injectScript();

    const handleRouteChange = () => {
      injectScript();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicSchedule
            marianaScheduleCode={{
              wrap: (content) => (
                <div data-mariana-integrations="/account">
                  {content}
                </div>
              ),
            }}
            halcyonFooterBottom={{
              wrap: (content) => (
                <>
                  {content}
                  <script>
                    {`
                      (function () {
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
                    `}
                  </script>
                  <noscript>
                    Please enable JavaScript to view the
                    <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
                      Web Integrations by Mariana Tek.
                    </a>
                  </noscript>
                </>
              ),
            }}
          />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Schedule;
