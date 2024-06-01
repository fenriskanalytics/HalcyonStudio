import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/copy_of_halcyon_studios/PlasmicGlobalContextsProvider";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/copy_of_halcyon_studios/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicAccount } from "../components/plasmic/copy_of_halcyon_studios/PlasmicAccount";
import { useRouter } from "next/router";

function Account() {
  // Define the fullPath and queryParams
  const fullPath = "https://www.halcyonstudio.us/account/";
  const queryParams = { login: 'true' };

  // Construct the data attribute value
  const dataAttrValue = `${fullPath}${queryParams ? '?' + new URLSearchParams(queryParams).toString() : ''}`;

  return (
    <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicAccount
            accountIframe={{
              props: {
                'data-mariana-integrations': dataAttrValue
              }
            }}
          />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Account;