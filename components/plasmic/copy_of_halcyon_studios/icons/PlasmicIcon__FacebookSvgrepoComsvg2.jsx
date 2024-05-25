// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookSvgrepoComsvg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M23 0H9C4 0 0 4 0 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V9c0-5-4-9-9-9z"}
        fill={"#3a559f"}
      ></path>

      <path
        d={
          "M26.8 15.4c-.2-.2-.5-.4-.8-.4h-5v-3.8c0-.1.1-.2.2-.2H25c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1h-4c-3.3 0-5 2.7-5 6v3h-4c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h4v12h5V20h3c.4 0 .8-.2.9-.6l2-3c.2-.3.1-.7-.1-1z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default FacebookSvgrepoComsvg2Icon;
/* prettier-ignore-end */
