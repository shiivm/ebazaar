import {PageConfig} from "../../utils/interfaces";

const Config: PageConfig = {
  type: "home",
  cssList: [
    "client/styles/category-header.scss",
  ],
  cssLazyList: [],
  hydrationComponets: [
    {
      name: "Demo",
      path: "client/components/Demo.tsx",
      domId: "home",
      isLazyLoad: true,
      attributes: {
        client:"client"
      },
    },
  ],
};
if (typeof window !== "undefined") {
  window._pageConfig = [Config];
}

export default Config;
