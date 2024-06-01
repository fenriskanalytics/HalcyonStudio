import * as React from "react";
import { PlasmicHomeSection } from "./plasmic/copy_of_halcyon_studios/PlasmicHomeSection";

function HomeSection_(props, ref) {
  return (
    <PlasmicHomeSection
      root={{ ref }}
      {...props}
      registrationButton={{
        props: {
          onClick: (e) => {
            e.preventDefault(); // Prevent the default link behavior
            window.location.href = 'https://www.halcyonstudio.us/account/';
          }
        }
      }}
    />
  );
}

const HomeSection = React.forwardRef(HomeSection_);

export default HomeSection;
