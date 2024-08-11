// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: kbhbrRoSxPvc
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  get as $stateGet,
  set as $stateSet,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import CountdownNumber from "../../CountdownNumber"; // plasmic-import: s3nn5Qn_GLJE/component
import { Timer } from "@plasmicpkgs/plasmic-basic-components";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicCountdown.module.css"; // plasmic-import: kbhbrRoSxPvc/css

createPlasmicElementProxy;

export const PlasmicCountdown__VariantProps = new Array();

export const PlasmicCountdown__ArgProps = new Array("targetTimeUtc");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCountdown__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          targetTimeUtc: "2025-12-10T23:26:25.224Z"
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
        path: "remainingSeconds",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "remainingMinutes",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
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
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber__ay38S)}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tvUc
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return (() => {
                      const targetDate = new Date("2024-08-19");
                      const currentDate = new Date();
                      const timeDifference =
                        targetDate.getTime() - currentDate.getTime();
                      const remainingDays = Math.ceil(
                        timeDifference / (1000 * 60 * 60 * 24)
                      );
                      return remainingDays;
                    })();
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "42";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eAmSf
              )}
            >
              <Trans__>{"Days"}</Trans__>
            </div>
          }
        />

        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber__vYLhv)}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4ZhQs
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return (() => {
                      const currentTime = new Date();
                      currentTime.setHours(17, 3, 0, 0);
                      const targetTime = new Date(currentTime);
                      targetTime.setDate(targetTime.getDate() + 1);
                      targetTime.setHours(15, 0, 0, 0);
                      let remainingSeconds = Math.floor(
                        (targetTime.getTime() - currentTime.getTime()) / 1000
                      );
                      const remainingHours = Math.floor(
                        remainingSeconds / 3600
                      );
                      return remainingHours;
                    })();
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "42";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iw7Tu
              )}
            >
              <Trans__>{"Hours"}</Trans__>
            </div>
          }
        />

        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber___8Ny4C)}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qpsZy
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return (() => {
                      const currentTime = new Date();
                      const currentMinutes = currentTime.getMinutes();
                      const minutesUntilNextHour = 60 - (currentMinutes % 60);
                      return minutesUntilNextHour;
                    })();
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "42";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aXhsr
              )}
            >
              <Trans__>{"Minutes"}</Trans__>
            </div>
          }
        />

        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber___5ZKxH)}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tGxfv
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return (() => {
                      const currentTime = new Date();
                      const currentSeconds = currentTime.getSeconds();
                      const secondsUntilNextMinute = 60 - currentSeconds;
                      return secondsUntilNextMinute;
                    })();
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "42";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__k22E
              )}
            >
              <Trans__>{"Seconds"}</Trans__>
            </div>
          }
        />
      </Stack__>
      <Timer
        data-plasmic-name={"timer"}
        data-plasmic-override={overrides.timer}
        className={classNames("__wab_instance", sty.timer)}
        intervalSeconds={1}
        isRunning={true}
        onTick={async () => {
          const $steps = {};
          $steps["updateRemainingSeconds"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["remainingSeconds"]
                  },
                  operation: 2,
                  value: $state.remainingSeconds
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;
                  const oldValue = $stateGet(objRoot, variablePath);
                  $stateSet(objRoot, variablePath, oldValue + 1);
                  return oldValue + 1;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateRemainingSeconds"] != null &&
            typeof $steps["updateRemainingSeconds"] === "object" &&
            typeof $steps["updateRemainingSeconds"].then === "function"
          ) {
            $steps["updateRemainingSeconds"] = await $steps[
              "updateRemainingSeconds"
            ];
          }
          $steps["updateRemainingSeconds2"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["remainingMinutes"]
                  },
                  operation: 2
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;
                  const oldValue = $stateGet(objRoot, variablePath);
                  $stateSet(objRoot, variablePath, oldValue + 1);
                  return oldValue + 1;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateRemainingSeconds2"] != null &&
            typeof $steps["updateRemainingSeconds2"] === "object" &&
            typeof $steps["updateRemainingSeconds2"].then === "function"
          ) {
            $steps["updateRemainingSeconds2"] = await $steps[
              "updateRemainingSeconds2"
            ];
          }
        }}
        runWhileEditing={true}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "timer"],
  freeBox: ["freeBox"],
  timer: ["timer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCountdown__ArgProps,
          internalVariantPropNames: PlasmicCountdown__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCountdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCountdown";
  } else {
    func.displayName = `PlasmicCountdown.${nodeName}`;
  }
  return func;
}

export const PlasmicCountdown = Object.assign(
  // Top-level PlasmicCountdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    timer: makeNodeComponent("timer"),
    // Metadata about props expected for PlasmicCountdown
    internalVariantProps: PlasmicCountdown__VariantProps,
    internalArgProps: PlasmicCountdown__ArgProps
  }
);

export default PlasmicCountdown;
/* prettier-ignore-end */
