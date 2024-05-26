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
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://example.com/mariana-integration.js'; // Replace with actual script URL
    scriptElement.async = true;
    scriptElement.onload = () => {
      if (window.MarianaIntegration) {
        window.MarianaIntegration.init('/account');
      }
    };
    document.body.appendChild(scriptElement);
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
          />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Schedule;
