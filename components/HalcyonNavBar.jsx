import * as React from "react";
import { PlasmicHalcyonNavBar } from "./plasmic/copy_of_halcyon_studios/PlasmicHalcyonNavBar";

function HalcyonNavBar_(props, ref) {
  return (
    <PlasmicHalcyonNavBar
      root={{ ref }}
      {...props}
      loginLink={{
        props: {
          'data-mariana-auth-link': true,
          'data-mariana-logged-out-text': 'Login',
          'data-mariana-logged-in-text': 'Account',
          href: '/account',
          onClick: (e) => {
            e.preventDefault(); // Prevent the default link behavior
            window.location.href = 'https://www.halcyonstudio.us/account/';
          }
        }
      }}
    />
  );
}

const HalcyonNavBar = React.forwardRef(HalcyonNavBar_);

export default HalcyonNavBar;
