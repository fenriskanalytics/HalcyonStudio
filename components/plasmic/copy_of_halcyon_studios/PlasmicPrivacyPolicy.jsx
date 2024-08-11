// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: vIsAJPQyd6Jq
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: yxQmGgAy9hde/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: 7Ks2sCBPZV9k/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: Mjl6P60oGLT_/component
import { useScreenVariants as useScreenVariants_0QmF6MtAnaU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _0qmF6MTAnaU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicPrivacyPolicy.module.css"; // plasmic-import: vIsAJPQyd6Jq/css

createPlasmicElementProxy;

export const PlasmicPrivacyPolicy__VariantProps = new Array();

export const PlasmicPrivacyPolicy__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPrivacyPolicy__RenderFunc(props) {
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

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__qpfk0)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__aUoTh)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___2QYsf)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      <Trans__>{"Privacy Policy"}</Trans__>
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kwulV
                      )}
                    >
                      <Trans__>
                        {"Below is our privacy policy, last updated 03/01/2024"}
                      </Trans__>
                    </div>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__zWaS)}>
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? "100%"
                        : "100%"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? "lazy"
                        : "lazy"
                    }
                    src={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? {
                            src: "/plasmic/copy_of_halcyon_studios/images/halcyonZoomedAngleViewjpg.jpg",
                            fullWidth: 3840,
                            fullHeight: 2160,
                            aspectRatio: undefined
                          }
                        : {
                            src: "/plasmic/copy_of_halcyon_studios/images/halcyonAngleViewjpg.jpg",
                            fullWidth: 3840,
                            fullHeight: 2160,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
              </Stack__>
            </div>
          </div>
          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div
              data-plasmic-name={"container3"}
              data-plasmic-override={overrides.container3}
              className={classNames(projectcss.all, sty.container3)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oEUod)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4___0B4Sq
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Privacy Policy"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wyhSz
                  )}
                >
                  <Trans__>
                    {
                      'Welcome to Halcyon Studio\'s Privacy Policy. This document outlines how we collect, use, disclose, and protect your personal information when you interact with our website and related services. By accessing or using our website located at www.halcyonstudio.com, or any other websites, pages, features, mobile applications, or technology owned or operated by Halcyon Studio (referred to as "Halcyon Studio," "the Company," "we," "us," or "our"), you agree to the practices described in this Privacy Policy.'
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ltfeS)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__iRn3Z
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Information We Collect"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tlUrH
                  )}
                >
                  <Trans__>
                    {
                      "We collect information that you voluntarily provide to us when you interact with our services. This may include:\n\nPersonal information such as your name, email address, phone number, and billing information when you register for an account or make a purchase.\nInformation you provide when you contact us for customer support or participate in surveys or promotions.\nUsage data and technical information automatically collected when you access our website, such as your IP address, browser type, device information, and cookies."
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zsCtX)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__aNcC2
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "How We Use Your Information"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rPia
                  )}
                >
                  <Trans__>
                    {
                      "We use the information we collect for various purposes, including:\n\nProviding and improving our services, including customizing content and features.\nCommunicating with you, such as responding to your inquiries and sending you updates and notifications.\nProcessing transactions and fulfilling orders.\nAnalyzing trends and user interactions to optimize our website and services.\nProtecting our rights, property, and safety, as well as that of our users and the public."
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yIwtF)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__iZSjQ
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Information Sharing and Disclosure"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oNbU
                  )}
                >
                  <Trans__>
                    {
                      "We may share your personal information with third-party service providers who assist us in operating our website and providing services to you. These service providers are contractually obligated to use your information only for the purposes of providing services to us and are required to maintain the confidentiality and security of your information.\n\nWe may also disclose your information in response to legal requests or to comply with applicable laws and regulations, enforce our policies, or protect our rights, property, or safety."
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mwhgS)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__s0Mjz
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Your Choices"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__r67Hw
                  )}
                >
                  <Trans__>
                    {
                      "You have the following choices regarding your personal information:\n\nYou can access, update, or delete your personal information by logging into your account settings or contacting us directly.\nYou can opt-out of receiving promotional communications from us by following the instructions provided in such communications.\nYou can adjust your browser settings to refuse cookies or alert you when cookies are being sent. However, please note that some features of our website may not function properly if cookies are disabled."
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wwkEk)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__yf2O2
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Data Security"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0XdR1
                  )}
                >
                  <Trans__>
                    {
                      "We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__flHdt)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__iLeW0
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Children's Privacy"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ctaFj
                  )}
                >
                  <Trans__>
                    {
                      "We may update this Cookie Policy from time to time. Any material changes will be reflected in the updated policy with an effective date. We encourage you to review this policy periodically for updates.\n\nThank you for reading our Cookie Policy."
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lkKbW)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__ugesy
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Changes to Our Privacy Policy"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9TYf
                  )}
                >
                  <Trans__>
                    {
                      "We may update this Privacy Policy from time to time. Any material changes will be reflected in the updated policy with an effective date. We encourage you to review this policy periodically for updates."
                    }
                  </Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___1Ny2I)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__lrRxs
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Professional And\nDedicated Consulting Services..."
                      : "Questions & Contact Information"}
                  </Trans__>
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dgolt
                  )}
                >
                  <Trans__>
                    {
                      "If you have any questions or concerns regarding our Privacy Policy, please contact us at [contact email/phone number].\n\nThank you for reading our Privacy Policy."
                    }
                  </Trans__>
                </div>
              </Stack__>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__j35Im)}>
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
    "pageBanner",
    "columns",
    "h1",
    "img",
    "mainSection",
    "container3",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],

  halcyonNavBar: ["halcyonNavBar"],
  pageBanner: ["pageBanner", "columns", "h1", "img"],
  columns: ["columns", "h1", "img"],
  h1: ["h1"],
  img: ["img"],
  mainSection: ["mainSection", "container3"],
  container3: ["container3"],
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
          internalArgPropNames: PlasmicPrivacyPolicy__ArgProps,
          internalVariantPropNames: PlasmicPrivacyPolicy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPrivacyPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrivacyPolicy";
  } else {
    func.displayName = `PlasmicPrivacyPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicPrivacyPolicy = Object.assign(
  // Top-level PlasmicPrivacyPolicy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    mainSection: makeNodeComponent("mainSection"),
    container3: makeNodeComponent("container3"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),
    // Metadata about props expected for PlasmicPrivacyPolicy
    internalVariantProps: PlasmicPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicPrivacyPolicy__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPrivacyPolicy;
/* prettier-ignore-end */
