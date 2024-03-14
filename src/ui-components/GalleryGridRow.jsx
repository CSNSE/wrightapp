/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import GalleryGridThumbnail from "./GalleryGridThumbnail";
import { Flex } from "@aws-amplify/ui-react";
export default function GalleryGridRow(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="2px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "GalleryGridRow")}
      {...rest}
    >
      <GalleryGridThumbnail
        width="130px"
        height="130px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Gallery / Grid / Thumbnail44461896")}
      ></GalleryGridThumbnail>
      <GalleryGridThumbnail
        width="130px"
        height="130px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Gallery / Grid / Thumbnail44461897")}
      ></GalleryGridThumbnail>
      <GalleryGridThumbnail
        width="130px"
        height="130px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Gallery / Grid / Thumbnail44461898")}
      ></GalleryGridThumbnail>
    </Flex>
  );
}
