/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, View } from "@aws-amplify/ui-react";
export default function GeneralLogo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="113px"
      height="41px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "GeneralLogo")}
      {...rest}
    >
      <Image
        width="127px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-4px"
        left="-7px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        {...getOverrideProps(overrides, "Instagram-Logo-02")}
      ></Image>
    </View>
  );
}
