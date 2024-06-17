// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: s3nn5Qn_GLJE
import * as React from "react";
import { useRouter } from "next/router";
import {
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicCountdownNumber.module.css"; // plasmic-import: s3nn5Qn_GLJE/css

createPlasmicElementProxy;

export const PlasmicCountdownNumber__VariantProps = new Array();

export const PlasmicCountdownNumber__ArgProps = new Array("number", "unit");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCountdownNumber__RenderFunc(props) {
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
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__t5Gga)}>
        {renderPlasmicSlot({
          defaultContents: <Trans__>{"42"}</Trans__>,
          value: args.number,
          className: classNames(sty.slotTargetNumber)
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__m7Cl)}>
        {renderPlasmicSlot({
          defaultContents: <Trans__>{"Days"}</Trans__>,
          value: args.unit
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCountdownNumber__ArgProps,
          internalVariantPropNames: PlasmicCountdownNumber__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCountdownNumber__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCountdownNumber";
  } else {
    func.displayName = `PlasmicCountdownNumber.${nodeName}`;
  }
  return func;
}

export const PlasmicCountdownNumber = Object.assign(
  // Top-level PlasmicCountdownNumber renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCountdownNumber
    internalVariantProps: PlasmicCountdownNumber__VariantProps,
    internalArgProps: PlasmicCountdownNumber__ArgProps
  }
);

export default PlasmicCountdownNumber;
/* prettier-ignore-end */
