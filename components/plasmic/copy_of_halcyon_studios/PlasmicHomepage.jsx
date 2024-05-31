// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: uJeZUBcKfARu
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  Trans as Trans__,
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
import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: yxQmGgAy9hde/component
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import HomeSection from "../../HomeSection"; // plasmic-import: 9rGWqtPg4lLP/component
import LoginFormPopup from "../../LoginFormPopup"; // plasmic-import: QZYU2P-IDkxx/component
import TextInput from "../../TextInput"; // plasmic-import: 21hHWiV01rOa/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: 7Ks2sCBPZV9k/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: Mjl6P60oGLT_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: uJeZUBcKfARu/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "loginFormPopup.plasmicAntd5FormValue",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "loginFormPopup.unblurPopUp",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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

          {(() => {
            try {
              return !$state.loginFormPopup.unblurPopUp;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <HomeSection
              data-plasmic-name={"homeSection"}
              data-plasmic-override={overrides.homeSection}
              className={classNames("__wab_instance", sty.homeSection)}
            />
          ) : null}
          <section
            data-plasmic-name={"heroSection"}
            data-plasmic-override={overrides.heroSection}
            className={classNames(projectcss.all, sty.heroSection)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hYleL)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__roV9D
                )}
              >
                <Trans__>{"Tampa's First Luxury Studio"}</Trans__>
              </h2>
              {(() => {
                try {
                  return $state.loginFormPopup.unblurPopUp;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <LoginFormPopup
                  data-plasmic-name={"loginFormPopup"}
                  data-plasmic-override={overrides.loginFormPopup}
                  className={classNames("__wab_instance", sty.loginFormPopup)}
                  onPlasmicAntd5FormValueChange={generateStateOnChangeProp(
                    $state,
                    ["loginFormPopup", "plasmicAntd5FormValue"]
                  )}
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
              ) : null}
              <div
                data-plasmic-name={"missionStatement"}
                data-plasmic-override={overrides.missionStatement}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.missionStatement
                )}
              >
                <Trans__>
                  {
                    "At Halcyon, we know that each of us humans are on our own healing journey and that movement is the medicine that will take us to our ultimate destination \u2014 peace of both body and mind. That is why our is aim is to bring a variety of movement styles to our community and allow for each individual to find their own chosen form of expression and to tap into their creativity and their breath as they refine the body and mind. Even in stillness,Halcyon has been designed to be a refuge from our modern day world with natural elements incorporated into our design choices that carry healing energies and frequencies members experience by just entering the space. We welcome you to leave the turbulent throes of the world at the door and calm your seas as a member of Halcyon Studio.\n"
                  }
                </Trans__>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__disM2)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2___0Eah3
                )}
              >
                <Trans__>
                  {"Sign Up for Launch Information and Membership Promotions"}
                </Trans__>
              </h2>
              <div className={classNames(projectcss.all, sty.freeBox__kvvjf)}>
                <div className={classNames(projectcss.all, sty.freeBox__xsZiv)}>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["textInput", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    placeholder={"Enter your Email  here"}
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />

                  <Button
                    data-plasmic-name={"signUpButton"}
                    data-plasmic-override={overrides.signUpButton}
                    className={classNames("__wab_instance", sty.signUpButton)}
                    color={"brGreen"}
                    size={"compact"}
                    submitsForm={true}
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
                      <Trans__>{"Sign Up"}</Trans__>
                    </div>
                  </Button>
                </div>
              </div>
            </Stack__>
          </section>
          <div className={classNames(projectcss.all, sty.freeBox__dg1Vm)}>
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
          </div>
        </Stack__>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "halcyonNavBar",
    "homeSection",
    "heroSection",
    "loginFormPopup",
    "missionStatement",
    "textInput",
    "signUpButton",
    "text",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],

  halcyonNavBar: ["halcyonNavBar"],
  homeSection: ["homeSection"],
  heroSection: [
    "heroSection",
    "loginFormPopup",
    "missionStatement",
    "textInput",
    "signUpButton",
    "text"
  ],

  loginFormPopup: ["loginFormPopup"],
  missionStatement: ["missionStatement"],
  textInput: ["textInput"],
  signUpButton: ["signUpButton", "text"],
  text: ["text"],
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    homeSection: makeNodeComponent("homeSection"),
    heroSection: makeNodeComponent("heroSection"),
    loginFormPopup: makeNodeComponent("loginFormPopup"),
    missionStatement: makeNodeComponent("missionStatement"),
    textInput: makeNodeComponent("textInput"),
    signUpButton: makeNodeComponent("signUpButton"),
    text: makeNodeComponent("text"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Key-value metadata
    metadata: {
      verification:
        '<meta name="google-site-verification" content="NcndP_63IhGkg9T8xmYAz_OIadfCjincCxW6cYFRJiQ" />'
    },
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
