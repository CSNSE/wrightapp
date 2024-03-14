/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GalleryGridThumbnailProps } from "./GalleryGridThumbnail";
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
export declare type GalleryGridRowOverridesProps = {
    GalleryGridRow?: PrimitiveOverrideProps<FlexProps>;
    "Gallery / Grid / Thumbnail44461896"?: GalleryGridThumbnailProps;
    "Gallery / Grid / Thumbnail44461897"?: GalleryGridThumbnailProps;
    "Gallery / Grid / Thumbnail44461898"?: GalleryGridThumbnailProps;
} & EscapeHatchProps;
export declare type GalleryGridRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: GalleryGridRowOverridesProps | undefined | null;
}>;
export default function GalleryGridRow(props: GalleryGridRowProps): React.ReactElement;
