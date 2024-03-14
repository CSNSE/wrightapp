/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
import { PostActionsBarPaginationProps } from "./PostActionsBarPagination";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostActionsBarOverridesProps = {
    PostActionsBar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 54"?: PrimitiveOverrideProps<ViewProps>;
    "General / Heart / 24px /"?: PrimitiveOverrideProps<ViewProps>;
    "General / Chat_Right_Tail / 24px /"?: PrimitiveOverrideProps<ViewProps>;
    "General / Send_Plane / 24px /"?: PrimitiveOverrideProps<ViewProps>;
    "General / Bookmark / 24px /"?: PrimitiveOverrideProps<ViewProps>;
    "Post / Actions_Bar / Pagination"?: PostActionsBarPaginationProps;
} & EscapeHatchProps;
export declare type PostActionsBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PostActionsBarOverridesProps | undefined | null;
}>;
export default function PostActionsBar(props: PostActionsBarProps): React.ReactElement;
