// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: OGdyRBmo77lT
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import LoginFormPopup from "../../LoginFormPopup"; // plasmic-import: QZYU2P-IDkxx/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicLoginModal.module.css"; // plasmic-import: OGdyRBmo77lT/css

createPlasmicElementProxy;

export const PlasmicLoginModal__VariantProps = new Array();

export const PlasmicLoginModal__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoginModal__RenderFunc(props) {
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
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "loginFormPopup.unblurPopUp",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "loginFormPopup.plasmicAntd5FormValue",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
      <LoginFormPopup
        data-plasmic-name={"loginFormPopup"}
        data-plasmic-override={overrides.loginFormPopup}
        className={classNames("__wab_instance", sty.loginFormPopup)}
        onPlasmicAntd5FormValueChange={generateStateOnChangeProp($state, [
          "loginFormPopup",
          "plasmicAntd5FormValue"
        ])}
        onUnblurPopUpChange={generateStateOnChangeProp($state, [
          "loginFormPopup",
          "unblurPopUp"
        ])}
        plasmicAntd5FormValue={generateStateValueProp($state, [
          "loginFormPopup",
          "plasmicAntd5FormValue"
        ])}
        unblurPopUp={generateStateValueProp($state, [
          "loginFormPopup",
          "unblurPopUp"
        ])}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "loginFormPopup"],
  loginFormPopup: ["loginFormPopup"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLoginModal__ArgProps,
          internalVariantPropNames: PlasmicLoginModal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginModal";
  } else {
    func.displayName = `PlasmicLoginModal.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginModal = Object.assign(
  // Top-level PlasmicLoginModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginFormPopup: makeNodeComponent("loginFormPopup"),
    // Metadata about props expected for PlasmicLoginModal
    internalVariantProps: PlasmicLoginModal__VariantProps,
    internalArgProps: PlasmicLoginModal__ArgProps
  }
);

export default PlasmicLoginModal;
/* prettier-ignore-end */
