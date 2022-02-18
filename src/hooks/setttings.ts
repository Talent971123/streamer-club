// import { useSelector, RootStateOrAny } from "react-redux";
import _ from "lodash";

//  * TODO: fix error on hooks while navigating
// const siteSettings = (path: string): boolean | string => {
//   const {
//     site: { settings },
//   } = useSelector((state: RootStateOrAny) => state);
//   return _.get(settings, path, true);
// };

/** temporary apply local file settings */
const siteSettings = (path: string): boolean | string => {
  const settings = require(`data/${process.env.NEXT_PUBLIC_SETTINGS_FILE}`)
  return _.get(settings, path, true);
};

export default siteSettings;
