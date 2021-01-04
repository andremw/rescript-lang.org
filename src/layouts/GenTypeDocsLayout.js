// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Url from "../common/Url.js";
import * as Next from "../bindings/Next.js";
import * as React from "react";
import * as Markdown from "../components/Markdown.js";
import * as DocsLayout from "./DocsLayout.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var tocData = (require('index_data/gentype_latest_toc.json'));

var LatestLayout = DocsLayout.Make({
      tocData: tocData
    });

function GenTypeDocsLayout(Props) {
  var frontmatter = Props.frontmatter;
  var componentsOpt = Props.components;
  var children = Props.children;
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : Markdown.$$default;
  var router = Next.Router.useRouter(undefined);
  var route = router.route;
  var url = Url.parse(route);
  var version = url.version;
  var version$1 = typeof version === "number" ? "latest" : version._0;
  var breadcrumbs_0 = {
    name: "Docs",
    href: "/docs/latest"
  };
  var breadcrumbs_1 = {
    hd: {
      name: "GenType",
      href: "/docs/gentype/" + (version$1 + "/introduction")
    },
    tl: /* [] */0
  };
  var breadcrumbs = {
    hd: breadcrumbs_0,
    tl: breadcrumbs_1
  };
  var tmp = {
    breadcrumbs: breadcrumbs,
    title: "GenType",
    metaTitleCategory: "ReScript GenType",
    version: "v3",
    components: components,
    theme: "Reason",
    children: children
  };
  if (frontmatter !== undefined) {
    tmp.frontmatter = Caml_option.valFromOption(frontmatter);
  }
  return React.createElement(LatestLayout.make, tmp);
}

var make = GenTypeDocsLayout;

export {
  make ,
  
}
/* LatestLayout Not a pure module */
