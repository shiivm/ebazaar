import { PageConfig } from "../../utils/interfaces";

const pageConfig = window._pageConfig;

const getHydrateDataByType = (type: string):PageConfig => {
  const pages = Array.from(pageConfig);
  const currentPage = pages.find(
    (page: { [key: string]: string }) => page.type == type
  );
  return currentPage ?? [];
};

export default getHydrateDataByType;
