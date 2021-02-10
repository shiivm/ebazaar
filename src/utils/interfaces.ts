declare global {
  interface Window {
    PAGE_TYPE: string;
    _pageConfig: PageConfig[];
    Component: HydrationComponets;
    FILE_VERSION: string;
    Config:{[key:string]:any}
  }
};

export interface HydrationComponets {
  name: string;
  path: string;
  domClassName?: string;
  domId?: string;
  isLazyLoad?: boolean;
  attributes?: {};
}

export interface PageConfig {
  type: string;
  cssList: string[];
  cssLazyList?: string[];
  hydrationComponets?: HydrationComponets[];
}

