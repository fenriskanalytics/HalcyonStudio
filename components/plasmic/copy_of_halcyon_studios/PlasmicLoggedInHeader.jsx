// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: jOOAO_Iy5Zph
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicLoggedInHeader.module.css"; // plasmic-import: jOOAO_Iy5Zph/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: j3whR53MQDz4/icon

createPlasmicElementProxy;

export const PlasmicLoggedInHeader__VariantProps = new Array();

export const PlasmicLoggedInHeader__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoggedInHeader__RenderFunc(props) {
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___4D5B)}
      >
        <PlasmicLink__
          className={classNames(projectcss.all, projectcss.a, sty.link__b0Fn)}
          component={Link}
          platform={"nextjs"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___33G3E
            )}
          >
            <Trans__>{"Halcyon Studios"}</Trans__>
          </div>
        </PlasmicLink__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___15Q7C)}
        >
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__sHEbP
            )}
            component={Link}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__poiph
              )}
            >
              <Trans__>{"About Us"}</Trans__>
            </div>
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__tjwGn
            )}
            component={Link}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uKQo
              )}
            >
              <Trans__>{"Features"}</Trans__>
            </div>
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___3RJbE
            )}
            component={Link}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bMud
              )}
            >
              <Trans__>{"Pricing "}</Trans__>
            </div>
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__jqjoa
            )}
            component={Link}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sGqJt
              )}
            >
              <Trans__>{"Contact"}</Trans__>
            </div>
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__fHdUp
            )}
            component={Link}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3Fldt
              )}
            >
              <Trans__>{"Blog"}</Trans__>
            </div>
          </Stack__>
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            endIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg___73Wld)}
                role={"img"}
              />
            }
            startIcon={
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__tShCg)}
                role={"img"}
              />
            }
            submitsForm={true}
          />
        </Stack__>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLoggedInHeader__ArgProps,
          internalVariantPropNames: PlasmicLoggedInHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoggedInHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoggedInHeader";
  } else {
    func.displayName = `PlasmicLoggedInHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicLoggedInHeader = Object.assign(
  // Top-level PlasmicLoggedInHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicLoggedInHeader
    internalVariantProps: PlasmicLoggedInHeader__VariantProps,
    internalArgProps: PlasmicLoggedInHeader__ArgProps
  }
);

export default PlasmicLoggedInHeader;
/* prettier-ignore-end */
