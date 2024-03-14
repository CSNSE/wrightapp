/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GalleryGridRowProps } from "./GalleryGridRow";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type GalleryGridOverridesProps = {
    GalleryGrid?: PrimitiveOverrideProps<FlexProps>;
    "Gallery / Grid / Row44461873"?: GalleryGridRowProps;
    "Gallery / Grid / Row44461874"?: GalleryGridRowProps;
    "Gallery / Grid / Row44461875"?: GalleryGridRowProps;
    "Gallery / Grid / Row44461876"?: GalleryGridRowProps;
} & EscapeHatchProps;
export declare type GalleryGridProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: GalleryGridOverridesProps | undefined | null;
}>;
export default function GalleryGrid(props: GalleryGridProps): React.ReactElement;
