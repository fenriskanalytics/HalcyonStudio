// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: WHvMDFyr8qi3
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: yxQmGgAy9hde/component
import TextInput from "../../TextInput"; // plasmic-import: 21hHWiV01rOa/component
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: 7Ks2sCBPZV9k/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: Mjl6P60oGLT_/component
import { useScreenVariants as useScreenVariants_0QmF6MtAnaU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _0qmF6MTAnaU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: WHvMDFyr8qi3/css
import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: OhHbf5je4-iq/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: j3whR53MQDz4/icon

createPlasmicElementProxy;

export const PlasmicAboutUs__VariantProps = new Array();

export const PlasmicAboutUs__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAboutUs__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0QmF6MtAnaU()
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <HalcyonNavBar
            data-plasmic-name={"halcyonNavBar"}
            data-plasmic-override={overrides.halcyonNavBar}
            className={classNames("__wab_instance", sty.halcyonNavBar)}
          />

          <section className={classNames(projectcss.all, sty.section__mz2HD)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__xdmph)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__z7FyG
                )}
              >
                <Trans__>
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Our Mission"
                    : "Tampa's First Luxury Yoga Studio"}
                </Trans__>
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vyL9W
                )}
              >
                <Trans__>
                  {
                    "Yoga is a journey of self-discovery, a path to finding your focus, and a means of pushing personal limits. We offer a refined and authentic yoga experience, embracing the purity of its practice. Join us in the pursuit of inner balance, strength, and tranquility, where yoga is about reconnecting with yourself and finding your own path to well-being."
                  }
                </Trans__>
              </div>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section___1G5OT)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__szBtN)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__s7GG
                )}
              >
                <Trans__>
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Get In Touch"
                    : "Sign up for the newsletter"}
                </Trans__>
              </h2>
              <div className={classNames(projectcss.all, sty.freeBox__gOhh)}>
                <div className={classNames(projectcss.all, sty.freeBox__xTWyq)}>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    endIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__xILzJ)}
                        role={"img"}
                      />
                    }
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["textInput", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    placeholder={"Enter your Email  here"}
                    startIcon={
                      <Searchsvg2Icon
                        className={classNames(projectcss.all, sty.svg__qiKm8)}
                        role={"img"}
                      />
                    }
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />

                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    color={"brGreen"}
                    endIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__fFhYf)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___6GUn8)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__n4Yx8
                      )}
                    >
                      <Trans__>{"Submit"}</Trans__>
                    </div>
                  </Button>
                </div>
              </div>
            </Stack__>
            <HalcyonFooter
              data-plasmic-name={"halcyonFooter"}
              data-plasmic-override={overrides.halcyonFooter}
              className={classNames("__wab_instance", sty.halcyonFooter)}
            />

            <HalcyonFooterBottom
              data-plasmic-name={"halcyonFooterBottom"}
              data-plasmic-override={overrides.halcyonFooterBottom}
              className={classNames("__wab_instance", sty.halcyonFooterBottom)}
            />
          </section>
        </Stack__>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "halcyonNavBar",
    "textInput",
    "button",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],

  halcyonNavBar: ["halcyonNavBar"],
  textInput: ["textInput"],
  button: ["button"],
  halcyonFooter: ["halcyonFooter"],
  halcyonFooterBottom: ["halcyonFooterBottom"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),
    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */
