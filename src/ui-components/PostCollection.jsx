/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Note } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Post from "./Post";
import { Collection } from "@aws-amplify/ui-react";
export default function PostCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Note,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "PostCollection")}
      {...rest}
    >
      {(item, index) => (
        <Post
          note={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Post>
      )}
    </Collection>
  );
}
