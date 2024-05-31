// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: AAAiqfM0zv7D
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
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: yxQmGgAy9hde/component
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import TextInput from "../../TextInput"; // plasmic-import: 21hHWiV01rOa/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: 7Ks2sCBPZV9k/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: Mjl6P60oGLT_/component
import { useScreenVariants as useScreenVariants_0QmF6MtAnaU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _0qmF6MTAnaU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: AAAiqfM0zv7D/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: j3whR53MQDz4/icon
import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: OhHbf5je4-iq/icon

createPlasmicElementProxy;

export const PlasmicContact__VariantProps = new Array();

export const PlasmicContact__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContact__RenderFunc(props) {
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

          <section className={classNames(projectcss.all, sty.section__lyNk)}>
            <div className={classNames(projectcss.all, sty.freeBox___8XgWa)}>
              <div className={classNames(projectcss.all, sty.columns__xhPul)}>
                <div className={classNames(projectcss.all, sty.column__ujr2)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__v3Wh)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__vWaAd
                      )}
                    >
                      <Trans__>
                        {hasVariant(globalVariants, "screen", "mobile")
                          ? "We started with humble beginnings"
                          : "Halcyon Studios"}
                      </Trans__>
                    </h1>
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__jk8Ht
                      )}
                    >
                      <Trans__>{"Where Tranquility Meets Exclusivity"}</Trans__>
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lXktx
                      )}
                    >
                      <Trans__>{"5 - 01 - 2022"}</Trans__>
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.columns__jCfHu)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__h1Q5V
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___2Ku0Z
                          )}
                        >
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2___33Kj7
                            )}
                          >
                            <Trans__>{"32"}</Trans__>
                          </h2>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__z74Mx
                            )}
                          >
                            <Trans__>{"Days"}</Trans__>
                          </div>
                        </Stack__>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___286Xw
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ltmaz
                          )}
                        >
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__qShvv
                            )}
                          >
                            <Trans__>{"22"}</Trans__>
                          </h2>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__aZwio
                            )}
                          >
                            <Trans__>{"Hours"}</Trans__>
                          </div>
                        </Stack__>
                      </div>
                      <div
                        className={classNames(projectcss.all, sty.column__xXxe)}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__biKx
                          )}
                        >
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__qvqBt
                            )}
                          >
                            <Trans__>{"16"}</Trans__>
                          </h2>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__eXRjD
                            )}
                          >
                            <Trans__>{"Mintutes"}</Trans__>
                          </div>
                        </Stack__>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__wWcpw
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__d548U
                          )}
                        >
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__pjb0K
                            )}
                          >
                            <Trans__>{"32"}</Trans__>
                          </h2>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__clHm
                            )}
                          >
                            <Trans__>{"Sec"}</Trans__>
                          </div>
                        </Stack__>
                      </div>
                    </Stack__>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__b1Tcc)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__e2BcD
                        )}
                        color={"unnamedVariant"}
                        endIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__tj14G
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__kvFm
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uDi0
                          )}
                        >
                          <Trans__>{"Membership Request"}</Trans__>
                        </div>
                      </Button>
                    </div>
                  </Stack__>
                </div>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__dDvK)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ccaVv)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__x70E2
                )}
              >
                <Trans__>
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Get In Touch"
                    : "Sign up for the newsletter"}
                </Trans__>
              </h2>
              <div className={classNames(projectcss.all, sty.freeBox__c3A0J)}>
                <div className={classNames(projectcss.all, sty.freeBox__uSet9)}>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    endIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___9J82R)}
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
                        className={classNames(projectcss.all, sty.svg___6HsJb)}
                        role={"img"}
                      />
                    }
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />

                  <Button
                    className={classNames("__wab_instance", sty.button__ezHNf)}
                    endIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__zfP0K)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__tEqqy)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sbLoE
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
    "halcyonFooter",
    "halcyonFooterBottom"
  ],

  halcyonNavBar: ["halcyonNavBar"],
  textInput: ["textInput"],
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    textInput: makeNodeComponent("textInput"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),
    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
