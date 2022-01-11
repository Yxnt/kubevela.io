(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[97550],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,f=u["".concat(d,".").concat(y)]||u[y]||p[y]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75805:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"vela addon registry"},l={unversionedId:"cli/vela_addon_registry",id:"cli/vela_addon_registry",isDocsHomePage:!1,title:"vela addon registry",description:"Manage addon registry",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/vela_addon_registry.md",sourceDirName:"cli",slug:"/cli/vela_addon_registry",permalink:"/zh/docs/next/cli/vela_addon_registry",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_addon_registry.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641806875,formattedLastUpdatedAt:"2022/1/10",frontMatter:{title:"vela addon registry"}},d=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],s={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manage addon registry"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Manage addon registry"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for registry\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_addon"},"vela addon"),"\t - Manage addons for extension."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_addon_registry_add"},"vela addon registry add"),"\t - Add an addon registry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_addon_registry_delete"},"vela addon registry delete"),"\t - Delete an addon registry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_addon_registry_get"},"vela addon registry get"),"\t - Get an addon registry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_addon_registry_list"},"vela addon registry list"),"\t - List addon registries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_addon_registry_update"},"vela addon registry update"),"\t - Update an addon registry")),(0,o.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-10-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 10-Jan-2022, refer to ",(0,o.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}c.isMDXComponent=!0}}]);