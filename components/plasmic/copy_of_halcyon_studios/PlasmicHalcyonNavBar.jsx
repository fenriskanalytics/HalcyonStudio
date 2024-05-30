// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: yxQmGgAy9hde
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import { useScreenVariants as useScreenVariants_0QmF6MtAnaU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _0qmF6MTAnaU/globalVariant
import { useUnnamedGlobalGroupOfVariants } from "./PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"; // plasmic-import: wyqDOREeKIlt/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicHalcyonNavBar.module.css"; // plasmic-import: yxQmGgAy9hde/css

createPlasmicElementProxy;

export const PlasmicHalcyonNavBar__VariantProps = new Array();

export const PlasmicHalcyonNavBar__ArgProps = new Array("authLink", "account");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHalcyonNavBar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          account: `/account`
        },
        props.args
      ),
    [props.args]
  );
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
        path: "variable",
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
    screen: useScreenVariants_0QmF6MtAnaU(),
    unnamedGlobalGroupOfVariants: useUnnamedGlobalGroupOfVariants()
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
      <div className={classNames(projectcss.all, sty.freeBox__rGtcj)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nsrX)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ae4H5)}
          >
            <PlasmicLink__
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames(projectcss.all, projectcss.a, sty.home)}
              component={Link}
              href={`/home`}
              platform={"nextjs"}
            >
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img, {
                  [sty.imgglobal_unnamedGlobalGroupOfVariants_unnamedVariant]:
                    hasVariant(
                      globalVariants,
                      "unnamedGlobalGroupOfVariants",
                      "unnamedVariant"
                    )
                })}
                displayHeight={"100%"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"165px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/copy_of_halcyon_studios/images/logoHalcyonWhitesvg.svg",
                  fullWidth: 300,
                  fullHeight: 72,
                  aspectRatio: 4.166667
                }}
              />
            </PlasmicLink__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__bCdB)}
            >
              <Stack__
                as={PlasmicLink__}
                data-plasmic-name={"membershipsLink"}
                data-plasmic-override={overrides.membershipsLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.membershipsLink
                )}
                component={Link}
                href={(() => {
                  try {
                    return ($state.variable =
                      "/memberships/buy/?_mt=%2Fbuy%2F48717");
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return `/memberships/buy`;
                    }
                    throw e;
                  }
                })()}
                onClick={async event => {
                  const $steps = {};
                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return undefined;
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }
                }}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kb7Ub
                  )}
                >
                  <Trans__>{"Memberships"}</Trans__>
                </div>
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                data-plasmic-name={"scheduleLink"}
                data-plasmic-override={overrides.scheduleLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.scheduleLink
                )}
                component={Link}
                href={(() => {
                  try {
                    return ($state.variable =
                      "/schedule/?mt=%2Fschedule%2Fdaily%2F48541%3Flocations%3D48717");
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return `/schedule`;
                    }
                    throw e;
                  }
                })()}
                platform={"nextjs"}
              >
                <div
                  data-plasmic-name={"scheduleText"}
                  data-plasmic-override={overrides.scheduleText}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.scheduleText
                  )}
                >
                  <Trans__>{"Class Schedule"}</Trans__>
                </div>
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                data-plasmic-name={"aboutUsLink"}
                data-plasmic-override={overrides.aboutUsLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.aboutUsLink
                )}
                component={Link}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__w1Ppb
                  )}
                >
                  <Trans__>{"About Us"}</Trans__>
                </div>
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                data-plasmic-name={"contactLink"}
                data-plasmic-override={overrides.contactLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.contactLink
                )}
                component={Link}
                href={`/contact`}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__k7AaU
                  )}
                >
                  <Trans__>{"Contact"}</Trans__>
                </div>
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                data-plasmic-name={"loginLink"}
                data-plasmic-override={overrides.loginLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.loginLink
                )}
                component={Link}
                href={
                  hasVariant(globalVariants, "screen", "tablet")
                    ? `/account`
                    : `/account`
                }
                onClick={async event => {
                  const $steps = {};
                  $steps["updateVariable"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["variable"]
                          },
                          operation: 0
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateVariable"] != null &&
                    typeof $steps["updateVariable"] === "object" &&
                    typeof $steps["updateVariable"].then === "function"
                  ) {
                    $steps["updateVariable"] = await $steps["updateVariable"];
                  }
                }}
                platform={"nextjs"}
              >
                <div
                  data-plasmic-name={"loginText"}
                  data-plasmic-override={overrides.loginText}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.loginText
                  )}
                >
                  <Trans__>{"Login"}</Trans__>
                </div>
              </Stack__>
              {renderPlasmicSlot({
                defaultContents: (
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__arKQw
                    )}
                    component={Link}
                    onClick={async event => {
                      const $steps = {};
                      $steps["goToAccount"] = true
                        ? (() => {
                            const actionArgs = { destination: `/account` };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToAccount"] != null &&
                        typeof $steps["goToAccount"] === "object" &&
                        typeof $steps["goToAccount"].then === "function"
                      ) {
                        $steps["goToAccount"] = await $steps["goToAccount"];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__wf6JF
                      )}
                      color={"unnamedVariant"}
                      onClick={async event => {
                        const $steps = {};
                        $steps["goToPage"] = true
                          ? (() => {
                              const actionArgs = {};
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToPage"] != null &&
                          typeof $steps["goToPage"] === "object" &&
                          typeof $steps["goToPage"].then === "function"
                        ) {
                          $steps["goToPage"] = await $steps["goToPage"];
                        }
                      }}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___6O6Zp
                        )}
                      >
                        <Trans__>{"Login"}</Trans__>
                      </div>
                    </Button>
                  </PlasmicLink__>
                ),

                value: args.authLink
              })}
            </Stack__>
          </Stack__>
        </Stack__>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "home",
    "img",
    "membershipsLink",
    "scheduleLink",
    "scheduleText",
    "aboutUsLink",
    "contactLink",
    "loginLink",
    "loginText"
  ],

  home: ["home", "img"],
  img: ["img"],
  membershipsLink: ["membershipsLink"],
  scheduleLink: ["scheduleLink", "scheduleText"],
  scheduleText: ["scheduleText"],
  aboutUsLink: ["aboutUsLink"],
  contactLink: ["contactLink"],
  loginLink: ["loginLink", "loginText"],
  loginText: ["loginText"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHalcyonNavBar__ArgProps,
          internalVariantPropNames: PlasmicHalcyonNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHalcyonNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHalcyonNavBar";
  } else {
    func.displayName = `PlasmicHalcyonNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicHalcyonNavBar = Object.assign(
  // Top-level PlasmicHalcyonNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    home: makeNodeComponent("home"),
    img: makeNodeComponent("img"),
    membershipsLink: makeNodeComponent("membershipsLink"),
    scheduleLink: makeNodeComponent("scheduleLink"),
    scheduleText: makeNodeComponent("scheduleText"),
    aboutUsLink: makeNodeComponent("aboutUsLink"),
    contactLink: makeNodeComponent("contactLink"),
    loginLink: makeNodeComponent("loginLink"),
    loginText: makeNodeComponent("loginText"),
    // Metadata about props expected for PlasmicHalcyonNavBar
    internalVariantProps: PlasmicHalcyonNavBar__VariantProps,
    internalArgProps: PlasmicHalcyonNavBar__ArgProps
  }
);

export default PlasmicHalcyonNavBar;
/* prettier-ignore-end */
