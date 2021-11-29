// ------------------------------------------------------
export interface BlogItemProps {
  itemData: any;
  mode?: "views" | "recent" | "linkitem";
}
export interface TagInterface {
  name: string;
}
// ------------------------------------------------------
export interface BlogItemInterface {
  name: string;
  title: string;
  contentfulMetadata: {
    tags: Array<TagInterface>;
  };
  authorInfo: {
    avatar: {
      url: string;
    };
    firstName: string;
    lastName: string;
  };
  media: {
    url: string;
  };
  description: any;
  createdAt: string;
}
export interface BlogListProps {
  popularList: Array<any>;
  recentList: Array<any>;
}
