import * as React from "react";
import { useEffect } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/copy_of_halcyon_studios/PlasmicGlobalContextsProvider";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/copy_of_halcyon_studios/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicSchedule } from "../components/plasmic/copy_of_halcyon_studios/PlasmicSchedule";
import { useRouter } from "next/router";

function Schedule() {
  const router = useRouter();

  useEffect(() => {
    // Logic to ensure the necessary prop is executed or page is refreshed
    console.log('Page loaded or navigated to');

    // Example action: log to console (replace with actual logic as needed)
    // For example, you can re-fetch data or trigger a specific action here

    // Optionally, you can refresh the page programmatically if needed
    // window.location.reload();
  }, [router.asPath]); // Dependency array includes `router.asPath` to re-trigger on route change

  return (
    <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={router.pathname}
          params={router.query}
          query={router.query}
        >
          <PlasmicSchedule
            marianaScheduleCode={{
              props: {
                children: (
                  <div data-mariana-integrations="/schedule/daily">
                    {/* Additional content or children can be placed here */}
                  </div>
                ),
              },
            }}
          />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Schedule;
