const pageConfig = window._pageConfig;

const getHydrateDataByType = (type: string) => {
  const pages = Array.from(pageConfig);
  let currentPage = pages.find(
    (page: { [key: string]: any }) => page.type == type
  );
  return currentPage ?? [];
};

export default getHydrateDataByType;
