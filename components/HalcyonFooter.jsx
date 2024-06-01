import * as React from "react";
import { PlasmicHalcyonFooter } from "./plasmic/copy_of_halcyon_studios/PlasmicHalcyonFooter";

function HalcyonFooter_(props, ref) {
  return (
    <PlasmicHalcyonFooter
      footerTop={{ ref }}
      {...props}
      membershipsPage={{
        props: {
          onClick: (e) => {
            e.preventDefault(); // Prevent the default link behavior
            window.location.href = 'https://www.halcyonstudio.us/memberships/buy/';
          }
        }
      }}
      schedulePage={{
        props: {
          onClick: (e) => {
            e.preventDefault(); // Prevent the default link behavior
            window.location.href = 'https://www.halcyonstudio.us/schedule/';
          }
        }
      }}
    />
  );
}

const HalcyonFooter = React.forwardRef(HalcyonFooter_);

export default HalcyonFooter;
