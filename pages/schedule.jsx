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
    document.body.appendChild(scriptElement);

    return () => {
      if (scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
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
              props: {
                children: (
                  <div data-mariana-integrations="/schedule/daily">
                    {props.children}
                  </div>
                ),
              },
            }}
          />
        </PageParamsProvider__>
      </GlobalContextsProvider>
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      ></script>
      <noscript>
        Please enable JavaScript to view the
        <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
          Web Integrations by Mariana Tek.
        </a>
      </noscript>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Schedule;
