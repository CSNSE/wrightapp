/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
import PostActionsBarPagination from "./PostActionsBarPagination";
export default function PostActionsBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="393px"
      height="46px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PostActionsBar")}
      {...rest}
    >
      <View
        width="393px"
        height="46px"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 54")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "General / Heart / 24px /")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "General / Chat_Right_Tail / 24px /")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "General / Send_Plane / 24px /")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "General / Bookmark / 24px /")}
      ></View>
      <PostActionsBarPagination
        display="flex"
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="20px"
        left="calc(50% - 17px - 0.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Post / Actions_Bar / Pagination")}
      ></PostActionsBarPagination>
    </View>
  );
}
