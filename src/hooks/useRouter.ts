import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// helper
import { isEmpty } from "utils/helper-validation";
import { ParamTypes } from "types/common/common";
// -----------------------------------------------------------------

const Rounter = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const [param, setParam] = useState<Partial<ParamTypes>>({});
  const { asPath } = router

  useEffect(() => {
    let isMounted = true;
    isMounted && setParam(router.query);
    isMounted && setPath(router.pathname);
    return () => {
      isMounted = false;
    };
  }, [router]);

  const move = (path = "/", param = {}, mode = {}) => {
    let paramString = "";
    if (!isEmpty(param)) {
      Object.keys(param).forEach((item, index) => {
        if (index == 0) paramString += `?${item}=${param[item]}`;
        else {
          paramString += `&${item}=${param[item]}`;
        }
      });
    }
    router.push(`${path}${paramString}`, undefined, { ...mode });
  };

  return { path, param, move, asPath };
};
export default Rounter;
