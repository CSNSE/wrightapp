/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function GalleryGridThumbnail(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="130px"
      height="130px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "GalleryGridThumbnail")}
      {...rest}
    >
      <View
        width="130px"
        height="130px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(114,114,114,1)"
        {...getOverrideProps(overrides, "Rectangle 3118")}
      ></View>
    </View>
  );
}
