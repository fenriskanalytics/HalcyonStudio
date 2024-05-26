import * as React from "react";
import { useEffect } from "react";
import { PlasmicMarianaScheduleCode } from "./plasmic/copy_of_halcyon_studios/PlasmicMarianaScheduleCode";
import { useRouter } from "next/router";

function MarianaScheduleCode(props) {
  const router = useRouter();

  useEffect(() => {
    // Trigger side effects here if needed
    console.log('MarianaScheduleCode component mounted or route changed');

    // Optionally, you can re-trigger any specific initialization logic here
  }, [router.asPath]);

  return (
    <PlasmicMarianaScheduleCode
      {...props}
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
  );
}

export default MarianaScheduleCode;
