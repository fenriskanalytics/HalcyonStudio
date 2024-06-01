// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export const useScreenVariants = createUseScreenVariants(true, {
  tablet: "(max-width:1440px)",
  mobile: "(max-width:440px)",
  desktop: "(max-width:1800px)",
});

export default ScreenContext;
/* prettier-ignore-end */
