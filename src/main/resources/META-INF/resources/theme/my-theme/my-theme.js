/* This file should be autogenerated */

import { css, unsafeCSS } from "lit-element";

// @ts-ignore
import { registerStyles } from "@vaadin/vaadin-themable-mixin/register-styles";

export const injectGlobalCss = (css) => {
  // FIXME: not all browsers support constructable stylesheets
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  document.adoptedStyleSheets = [sheet];
};

// Include global.css
import globalCss from "./global.css";

injectGlobalCss(globalCss);

// Include design-system-name/component-styles/[component-name]/*.css and map to component-name
import vaadinTextFieldCss from "./components/vaadin-text-field.css";
registerStyles(
  "vaadin-text-field",
  css`
    ${unsafeCSS(vaadinTextFieldCss)}
  `
);

import vaadinButtonCss from "./components/vaadin-button.css";
registerStyles(
  "vaadin-button",
  css`
    ${unsafeCSS(vaadinButtonCss)}
  `
);
