(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{168:function(t,r,e){var content=e(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("6396de7c",content,!0,{sourceMap:!1})},169:function(t,r,e){var content=e(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("760e9791",content,!0,{sourceMap:!1})},170:function(t,r,e){var content=e(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("b5576236",content,!0,{sourceMap:!1})},172:function(t,r,e){"use strict";var o={name:"Tag",props:{label:{type:String}}},n=(e(173),e(6)),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tag tag-wrapper"},[this._v("\n    "+this._s(this.label)+"\n")])}),[],!1,null,"34db2f36",null);r.a=component.exports},173:function(t,r,e){"use strict";var o=e(168);e.n(o).a},174:function(t,r,e){(r=e(18)(!1)).push([t.i,".tag[data-v-34db2f36]{margin:0 .5rem .5rem 0;min-width:100px;height:30px;padding:5px;box-sizing:border-box;border-radius:5px;text-align:center;background:hsla(0,0%,100%,.4);color:#080059;font-size:14px;font-weight:400;line-height:21px}",""]),t.exports=r},175:function(t,r,e){"use strict";var o=e(169);e.n(o).a},176:function(t,r,e){(r=e(18)(!1)).push([t.i,".card[data-v-2d4ea0de]{width:500px;height:auto;padding:2rem;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;background-color:#533de2;border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}@media screen and (max-width:768px){.card[data-v-2d4ea0de]{max-width:500px;width:90%;margin:0 auto}}.card--rose[data-v-2d4ea0de]{background-color:#d5b8ec}.card--blue[data-v-2d4ea0de]{background-color:#7bc8ff}.card--violet[data-v-2d4ea0de]{background-color:#9993f2}",""]),t.exports=r},177:function(t,r,e){"use strict";var o=e(170);e.n(o).a},178:function(t,r,e){(r=e(18)(!1)).push([t.i,".my-works__title[data-v-62237120]{margin:2rem 0;width:100%;text-align:center}.my-works__card-description[data-v-62237120]{color:#3c3c3c;width:100%;text-align:left}.my-works__card-tags[data-v-62237120]{display:flex;flex-wrap:wrap;width:100%;margin:0 0 1rem}.my-works__card-link[data-v-62237120]{text-decoration:none;color:#fff}.my-works__card-link>h3[data-v-62237120]{margin:0;font-family:Chivo,sans-serif;font-size:30px;font-weight:700}.my-works__wrapper[data-v-62237120]{display:grid;grid-template-columns:100%;grid-gap:1.5rem;padding:1rem 0 2rem}@media screen and (min-width:992px){.my-works__wrapper[data-v-62237120]{grid-template-columns:1fr 1fr}}",""]),t.exports=r},182:function(t,r,e){"use strict";e.r(r);var o=e(80),n={name:"Card",props:{color:{type:String}},computed:{classes:function(){return"card card--".concat(this.color)}}},c=(e(175),e(6)),l=Object(c.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes},[this._t("default")],2)}),[],!1,null,"2d4ea0de",null).exports,d=e(81),_=e(172),w={components:{BaseHero:o.a,Card:l,BaseButton:d.a,Tag:_.a},data:function(){return{tags:[["JavaScript","HTML","CSS","SCSS"],["JavaScript","HTML","CSS","SCSS","Vue.js","Webpack","Jest"],["JavaScript","HTML","CSS","SCSS"]]}}},h=(e(177),Object(c.a)(w,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"my-works-section"},[e("base-hero",{staticClass:"my-works__title",attrs:{title:"My works"}}),t._v(" "),e("div",{staticClass:"my-works__wrapper"},[e("card",{attrs:{color:"blue"}},[e("a",{staticClass:"my-works__card-link",attrs:{href:"http://www.haluchastudio.pl/",target:"blank"}},[e("h3",[t._v("Haluhastudio.pl")])]),t._v(" "),e("p",{staticClass:"my-works__card-description"},[t._v("Landing page for architectural studio")]),t._v(" "),e("div",{staticClass:"my-works__card-tags"},t._l(t.tags[0],(function(t){return e("tag",{key:t,attrs:{label:t}})})),1),t._v(" "),e("base-button",{attrs:{link:"http://www.haluchastudio.pl/",type:"rounded",label:"See the project"}})],1),t._v(" "),e("card",{attrs:{color:"rose"}},[e("a",{staticClass:"my-works__card-link",attrs:{href:"https://toniar.github.io/capabilities-creator/",target:"blank"}},[e("h3",[t._v('Capabilities creator"')])]),t._v(" "),e("p",{staticClass:"my-works__card-description"},[t._v("Tool for generating code samples for testing.")]),t._v(" "),e("div",{staticClass:"my-works__card-tags"},t._l(t.tags[1],(function(t){return e("tag",{key:t,attrs:{label:t}})})),1),t._v(" "),e("base-button",{attrs:{link:"https://toniar.github.io/capabilities-creator/",type:"rounded",label:"See the project"}})],1),t._v(" "),e("card",{attrs:{color:"blue"}},[e("a",{staticClass:"my-works__card-link",attrs:{href:"http://www.blisko.co/",target:"blank"}},[e("h3",[t._v("Blisko.co")])]),t._v(" "),e("p",{staticClass:"my-works__card-description"},[t._v('Creating landing page for application "Blisko".')]),t._v(" "),e("div",{staticClass:"my-works__card-tags"},t._l(t.tags[2],(function(t){return e("tag",{key:t,attrs:{label:t}})})),1),t._v(" "),e("base-button",{attrs:{link:"http://www.blisko.co",type:"rounded",label:"See the project"}})],1),t._v(" "),e("card",{attrs:{color:"violet"}},[e("a",{staticClass:"my-works__card-link",attrs:{href:"http://www.sisms.pl/",target:"blank"}},[e("h3",[t._v("SiSMS.pl")])]),t._v(" "),e("p",{staticClass:"my-works__card-description"},[t._v('Rewriting landing page "Sisms.pl".')]),t._v(" "),e("div",{staticClass:"my-works__card-tags"},t._l(t.tags[2],(function(t){return e("tag",{key:t,attrs:{label:t}})})),1),t._v(" "),e("base-button",{attrs:{link:"http://www.sisms.pl/",type:"rounded",label:"See the project"}})],1)],1)],1)}),[],!1,null,"62237120",null));r.default=h.exports}}]);