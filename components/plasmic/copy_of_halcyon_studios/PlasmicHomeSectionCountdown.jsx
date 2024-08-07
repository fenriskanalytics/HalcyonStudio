// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: M0IYPZJH3OXM
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
  hasVariant,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Countdown from "../../Countdown"; // plasmic-import: kbhbrRoSxPvc/component
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicHomeSectionCountdown.module.css"; // plasmic-import: M0IYPZJH3OXM/css

createPlasmicElementProxy;

export const PlasmicHomeSectionCountdown__VariantProps = new Array(
  "blurVariant2"
);

export const PlasmicHomeSectionCountdown__ArgProps = new Array(
  "registerRedirect"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomeSectionCountdown__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          registerRedirect: `/account`
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "blurVariant2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.blurVariant2
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
    <section
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
        sty.root,
        {
          [sty.rootblurVariant2_unnamedVariant2]: hasVariant(
            $state,
            "blurVariant2",
            "unnamedVariant2"
          ),
          [sty.rootblurVariant2_unnamedVariant]: hasVariant(
            $state,
            "blurVariant2",
            "unnamedVariant"
          )
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___9Snyu, {
          [sty.freeBoxblurVariant2_unnamedVariant___9Snyu8B2FP]: hasVariant(
            $state,
            "blurVariant2",
            "unnamedVariant"
          )
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rYoma)}
        >
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__w2ET8
            )}
          >
            <Trans__>{"Halcyon Studios"}</Trans__>
          </h1>
          <Countdown
            data-plasmic-name={"countdown"}
            data-plasmic-override={overrides.countdown}
            className={classNames("__wab_instance", sty.countdown)}
            targetTimeUtc={(() => {
              try {
                return (() => {
                  const targetTime = "08/10/2024 7:00am EST";
                  return targetTime;
                })();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          />

          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__aUfZ6
            )}
          >
            <Trans__>{"Find Tranquility in Motion"}</Trans__>
          </h1>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <Trans__>{"Founders Rate Membership Now Open"}</Trans__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___5INlN)}>
            <PlasmicLink__
              data-plasmic-name={"registrationLink"}
              data-plasmic-override={overrides.registrationLink}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.registrationLink
              )}
              component={Link}
              href={`/account`}
              onClick={async event => {
                const $steps = {};
                $steps["updateStateVariable"] = true
                  ? (() => {
                      const actionArgs = {};
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
                        undefined;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateStateVariable"] != null &&
                  typeof $steps["updateStateVariable"] === "object" &&
                  typeof $steps["updateStateVariable"].then === "function"
                ) {
                  $steps["updateStateVariable"] = await $steps[
                    "updateStateVariable"
                  ];
                }
              }}
              platform={"nextjs"}
            >
              <Button
                data-plasmic-name={"registrationButton"}
                data-plasmic-override={overrides.registrationButton}
                className={classNames("__wab_instance", sty.registrationButton)}
                color={"green"}
                size={"compact"}
                submitsForm={true}
              >
                <Trans__>{"Register Now"}</Trans__>
              </Button>
            </PlasmicLink__>
          </div>
        </Stack__>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "countdown", "text", "registrationLink", "registrationButton"],
  countdown: ["countdown"],
  text: ["text"],
  registrationLink: ["registrationLink", "registrationButton"],
  registrationButton: ["registrationButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomeSectionCountdown__ArgProps,
          internalVariantPropNames: PlasmicHomeSectionCountdown__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeSectionCountdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeSectionCountdown";
  } else {
    func.displayName = `PlasmicHomeSectionCountdown.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeSectionCountdown = Object.assign(
  // Top-level PlasmicHomeSectionCountdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    countdown: makeNodeComponent("countdown"),
    text: makeNodeComponent("text"),
    registrationLink: makeNodeComponent("registrationLink"),
    registrationButton: makeNodeComponent("registrationButton"),
    // Metadata about props expected for PlasmicHomeSectionCountdown
    internalVariantProps: PlasmicHomeSectionCountdown__VariantProps,
    internalArgProps: PlasmicHomeSectionCountdown__ArgProps
  }
);

export default PlasmicHomeSectionCountdown;
/* prettier-ignore-end */
