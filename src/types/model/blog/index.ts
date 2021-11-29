import { BlogItemInterface } from "./interface";
import { truncate } from "utils/helper-string";
import { timeDifference } from "utils/helper-date";
// --------------------------------------------------------
export class BlogItemModel {
  constructor(private node: BlogItemInterface) {}
  getShortTitle(mx = 180) {
    return truncate(this.node.title, mx);
  }
  getFullTitle() {
    return this.node.title;
  }
  getName() {
    return this.node.name;
  }
  getDescription() {
    return this.node.title;
  }
  getAuthorName() {
    return (
      this.node.authorInfo?.firstName ??
      "" + " " + this.node.authorInfo?.lastName ??
      ""
    );
  }
  getTagName() {
    return this.node.contentfulMetadata?.tags[0]?.name ?? "";
  }
  getBlogImage() {
    return this.node.media.url;
  }
  getCreatedTime() {
    const currentTime = new Date().getTime();
    const createdTime = new Date(this.node.createdAt).getTime();
    return timeDifference(currentTime, createdTime);
  }
  getView() {
    return 1000;
  }
}
