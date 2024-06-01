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
  useCurrentUser,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_0QmF6MtAnaU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _0qmF6MTAnaU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicHalcyonNavBar.module.css"; // plasmic-import: yxQmGgAy9hde/css

createPlasmicElementProxy;

export const PlasmicHalcyonNavBar__VariantProps = new Array();

export const PlasmicHalcyonNavBar__ArgProps = new Array();

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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0QmF6MtAnaU()
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
              data-plasmic-name={"homeLink"}
              data-plasmic-override={overrides.homeLink}
              className={classNames(projectcss.all, projectcss.a, sty.homeLink)}
              component={Link}
              href={`/home`}
              platform={"nextjs"}
            >
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
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
                href={`/memberships/buy`}
                platform={"nextjs"}
                tabIndex={1}
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
                data-plasmic-name={"eventsLink"}
                data-plasmic-override={overrides.eventsLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.eventsLink
                )}
                component={Link}
                href={`/schedule`}
                platform={"nextjs"}
                tabIndex={2}
              >
                <div
                  data-plasmic-name={"eventsText"}
                  data-plasmic-override={overrides.eventsText}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.eventsText
                  )}
                >
                  <Trans__>{"Schedule"}</Trans__>
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
                href={`/about-us`}
                platform={"nextjs"}
                tabIndex={3}
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
                tabIndex={4}
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
                href={`/account`}
                platform={"nextjs"}
                tabIndex={4}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xAoM
                  )}
                >
                  <Trans__>{"Login"}</Trans__>
                </div>
              </Stack__>
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
    "homeLink",
    "img",
    "membershipsLink",
    "eventsLink",
    "eventsText",
    "aboutUsLink",
    "contactLink",
    "loginLink"
  ],

  homeLink: ["homeLink", "img"],
  img: ["img"],
  membershipsLink: ["membershipsLink"],
  eventsLink: ["eventsLink", "eventsText"],
  eventsText: ["eventsText"],
  aboutUsLink: ["aboutUsLink"],
  contactLink: ["contactLink"],
  loginLink: ["loginLink"]
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
    homeLink: makeNodeComponent("homeLink"),
    img: makeNodeComponent("img"),
    membershipsLink: makeNodeComponent("membershipsLink"),
    eventsLink: makeNodeComponent("eventsLink"),
    eventsText: makeNodeComponent("eventsText"),
    aboutUsLink: makeNodeComponent("aboutUsLink"),
    contactLink: makeNodeComponent("contactLink"),
    loginLink: makeNodeComponent("loginLink"),
    // Metadata about props expected for PlasmicHalcyonNavBar
    internalVariantProps: PlasmicHalcyonNavBar__VariantProps,
    internalArgProps: PlasmicHalcyonNavBar__ArgProps
  }
);

export default PlasmicHalcyonNavBar;
/* prettier-ignore-end */
