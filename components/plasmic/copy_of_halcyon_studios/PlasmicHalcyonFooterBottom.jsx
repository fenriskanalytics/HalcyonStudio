// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: Mjl6P60oGLT_
import * as React from "react";
import { useRouter } from "next/router";
import {
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicHalcyonFooterBottom.module.css"; // plasmic-import: Mjl6P60oGLT_/css

createPlasmicElementProxy;

export const PlasmicHalcyonFooterBottom__VariantProps = new Array();

export const PlasmicHalcyonFooterBottom__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHalcyonFooterBottom__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"footerBottom"}
      data-plasmic-override={overrides.footerBottom}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.footerBottom
      )}
    >
      <div
        data-plasmic-name={"container2"}
        data-plasmic-override={overrides.container2}
        className={classNames(projectcss.all, sty.container2)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          <Trans__>{"\u00a9 HalcyonStudios. All rights reserved."}</Trans__>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  footerBottom: ["footerBottom", "container2", "text"],
  container2: ["container2", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHalcyonFooterBottom__ArgProps,
          internalVariantPropNames: PlasmicHalcyonFooterBottom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHalcyonFooterBottom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footerBottom") {
    func.displayName = "PlasmicHalcyonFooterBottom";
  } else {
    func.displayName = `PlasmicHalcyonFooterBottom.${nodeName}`;
  }
  return func;
}

export const PlasmicHalcyonFooterBottom = Object.assign(
  // Top-level PlasmicHalcyonFooterBottom renders the root element
  makeNodeComponent("footerBottom"),
  {
    // Helper components rendering sub-elements
    container2: makeNodeComponent("container2"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHalcyonFooterBottom
    internalVariantProps: PlasmicHalcyonFooterBottom__VariantProps,
    internalArgProps: PlasmicHalcyonFooterBottom__ArgProps
  }
);

export default PlasmicHalcyonFooterBottom;
/* prettier-ignore-end */
