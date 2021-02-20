import React from "react";
import ReactDOM from "react-dom";
import getHydrateDataByType from "./helper/getHydrateData";
import { HydrationComponets, PageConfig } from "../utils/interfaces";

(() => {
  const renderComponent = (component: HydrationComponets) => {
    if (
      !window.Component ||
      typeof window.Component[component.name] === "undefined"
    ) {
      console.error(
        "renderComponent",
        component.name,
        " not present in window.Component"
      );
      return;
    }
    const ComponentObject = window.Component[component.name];

    if (document.querySelector("#" + component.domId)) {
      const domElement = document.querySelector("#" + component.domId);
      component.attributes || (component.attributes = []);
      const domAttributs = {};
      for (
        let i = 0, atts = domElement.attributes, n = atts.length;
        i < n;
        i++
      ) {
        domAttributs[atts[i].nodeName] = atts[i].nodeValue;
      }
      const combinedAttributes = { ...component.attributes, ...domAttributs };

      ReactDOM.hydrate(
        <ComponentObject {...combinedAttributes} />,
        document.querySelector("#" + component.domId)
      );
    }
    const allDivs = document.querySelectorAll("." + component.domClassName);
    const allRealDivsArray = Array.from(allDivs);

    if (allRealDivsArray.length > 0) {
      allRealDivsArray.forEach((domElement) => {
        component.attributes || (component.attributes = []);
        const domAttributs = {};
        for (
          let i = 0, atts = domElement.attributes, n = atts.length;
          i < n;
          i++
        ) {
          domAttributs[atts[i].nodeName] = atts[i].nodeValue;
        }
        const combinedAttributes = { ...component.attributes, ...domAttributs };
        ReactDOM.hydrate(
          <ComponentObject {...combinedAttributes} />,
          domElement
        );
      });
    }
  };
  const pageType = window.PAGE_TYPE || "";
  const FILE_VERSION = window?.FILE_VERSION || "";
  const pageConfig: { [key: string]: PageConfig } = getHydrateDataByType(
    pageType
  );
  const hydrationComponets = pageConfig?.hydrationComponets || [];
  const lazyComponents = [];
  hydrationComponets.forEach((component: HydrationComponets) => {
    if (component.isLazyLoad) {
      lazyComponents.push(component);
    } else {
      renderComponent(component);
    }
  });
  const lazyJs = `${window.Config.STATIC_PATH}/js/${pageType}-lazy.${FILE_VERSION}.js`;
  const lazScript = document.createElement("script");
  lazScript.src = lazyJs;
  lazScript.defer = true;
  lazScript.type = "text/javascript";

  window.addEventListener("load", function () {
    setTimeout(() => {
      if (lazyComponents.length > 0) {
        document.getElementsByTagName("body")[0].appendChild(lazScript);
      }
    }, 2000);
  });
  lazScript.addEventListener("load", function () {
    lazyComponents.forEach((component) => {
      if (component.isLazyLoad) {
        renderComponent(component);
      }
    });
  });
})();
