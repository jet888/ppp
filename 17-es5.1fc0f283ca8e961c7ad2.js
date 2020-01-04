function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var t=0;t<n.length;t++){var u=n[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Pm0H:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=t("Gzjn"),a=t("XIv+"),o=function(){function l(n,t){_classCallCheck(this,l),this.location=n,this.psService=t,this.photoStandard=new a.b("__unknown__","Loading ..."),this._allStandards=t.getAllPhotoStandards(),this.photoStandard=t.getSelectedStandard()}return _createClass(l,[{key:"ngOnInit",value:function(){this._selectableStandards=this._allStandards}},{key:"setSelected",value:function(l){this.psService.setSelectedStandard(l),this.location.back()}},{key:"getFlagClass",value:function(l){return"flag-icon flag-icon-"+this.getCountryCode(l)}},{key:"getCountryCode",value:function(l){return l.id.substr(0,2)}},{key:"filterPhotoStandard",value:function(l){var n=l.target.value.toLowerCase();this._selectableStandards=n?this._allStandards.filter((function(l){return l.country.toLowerCase().includes(n)||l.text.toLowerCase().includes(n)})):this._allStandards}},{key:"selectableStandards",get:function(){var l=this,n=null!=this._selectableStandards?this._selectableStandards:this._allStandards,t=this.psService.getCountryCode();return t?((t=t.toLowerCase())&&n.sort((function(n,u){return l.getCountryCode(n)===t?-1:l.getCountryCode(u)===t?1:0})),n):n}}]),l}(),r=function l(){_classCallCheck(this,l)},i=t("pMnS"),b=t("oBZk"),s=t("ZZ/e"),c=t("s7LF"),d=t("SVse"),p=u.zb({encapsulation:0,styles:[""],data:{}});function f(l){return u.Sb(0,[(l()(),u.Bb(0,0,null,null,9,"ion-item",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setSelected(l.context.$implicit)&&u),u}),b.R,b.m)),u.Ab(1,49152,null,0,s.H,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,0,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),u.Bb(3,0,null,0,2,"ion-label",[["class","ion-margin-start"]],null,null,null,b.S,b.p)),u.Ab(4,49152,null,0,s.N,[u.j,u.p,u.F],null,null),(l()(),u.Rb(5,0,[" "," "])),(l()(),u.Bb(6,0,null,0,3,"ion-button",[["icon-only",""]],null,null,null,b.F,b.c)),u.Ab(7,49152,null,0,s.k,[u.j,u.p,u.F],null,null),(l()(),u.Bb(8,0,null,0,1,"ion-icon",[["name","create"]],null,null,null,b.O,b.l)),u.Ab(9,49152,null,0,s.C,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(l,n){l(n,9,0,"create")}),(function(l,n){l(n,2,0,n.component.getFlagClass(n.context.$implicit)),l(n,5,0,n.context.$implicit.text)}))}function h(l){return u.Sb(0,[(l()(),u.Bb(0,0,null,null,15,"ion-header",[],null,null,null,b.N,b.k)),u.Ab(1,49152,null,0,s.B,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,13,"ion-toolbar",[],null,null,null,b.fb,b.C)),u.Ab(3,49152,null,0,s.Cb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.G,b.d)),u.Ab(5,49152,null,0,s.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Mb(l,8).onClick(t)&&e),e}),b.E,b.b)),u.Ab(7,49152,null,0,s.g,[u.j,u.p,u.F],{defaultHref:[0,"defaultHref"]},null),u.Ab(8,16384,null,0,s.h,[[2,s.ib],s.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),u.Bb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,b.G,b.d)),u.Ab(10,49152,null,0,s.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(11,0,null,0,1,"ion-menu-button",[],null,null,null,b.V,b.t)),u.Ab(12,49152,null,0,s.R,[u.j,u.p,u.F],null,null),(l()(),u.Bb(13,0,null,0,2,"ion-title",[],null,null,null,b.db,b.A)),u.Ab(14,49152,null,0,s.Ab,[u.j,u.p,u.F],null,null),(l()(),u.Rb(-1,0,["Available Photo Standards"])),(l()(),u.Bb(16,0,null,null,11,"ion-content",[],null,null,null,b.L,b.i)),u.Ab(17,49152,null,0,s.u,[u.j,u.p,u.F],null,null),(l()(),u.Bb(18,0,null,0,9,"ion-list",[],null,null,null,b.U,b.q)),u.Ab(19,49152,null,0,s.O,[u.j,u.p,u.F],null,null),(l()(),u.Bb(20,0,null,0,5,"ion-list-header",[["class","ion-no-padding"]],null,null,null,b.T,b.r)),u.Ab(21,49152,null,0,s.P,[u.j,u.p,u.F],null,null),(l()(),u.Bb(22,0,null,0,3,"ion-searchbar",[["placeholder","Search photo standards"]],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,a=l.component;return"ionBlur"===n&&(e=!1!==u.Mb(l,25)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Mb(l,25)._handleInputEvent(t.target)&&e),"ionInput"===n&&(e=!1!==a.filterPhotoStandard(t)&&e),e}),b.ab,b.x)),u.Ob(5120,null,c.c,(function(l){return[l]}),[s.Lb]),u.Ab(24,49152,null,0,s.kb,[u.j,u.p,u.F],{placeholder:[0,"placeholder"]},null),u.Ab(25,16384,null,0,s.Lb,[u.p],null,null),(l()(),u.qb(16777216,null,0,1,null,f)),u.Ab(27,278528,null,0,d.h,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,7,0,"/"),l(n,8,0,"/"),l(n,24,0,"Search photo standards"),l(n,27,0,t.selectableStandards)}),null)}var S=u.xb("app-photo-standard",o,(function(l){return u.Sb(0,[(l()(),u.Bb(0,0,null,null,1,"app-photo-standard",[],null,null,null,h,p)),u.Ab(1,114688,null,0,o,[d.f,e.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=t("iInd");t.d(n,"PhotoStandardPageModuleNgFactory",(function(){return C}));var C=u.yb(r,[],(function(l){return u.Jb([u.Kb(512,u.m,u.jb,[[8,[i.a,S]],[3,u.m],u.D]),u.Kb(4608,d.k,d.j,[u.z,[2,d.r]]),u.Kb(4608,c.g,c.g,[]),u.Kb(4608,s.b,s.b,[u.F,u.g]),u.Kb(4608,s.Gb,s.Gb,[s.b,u.m,u.w]),u.Kb(4608,s.Jb,s.Jb,[s.b,u.m,u.w]),u.Kb(1073742336,d.b,d.b,[]),u.Kb(1073742336,c.f,c.f,[]),u.Kb(1073742336,c.b,c.b,[]),u.Kb(1073742336,s.Eb,s.Eb,[]),u.Kb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),u.Kb(1073742336,r,r,[]),u.Kb(1024,g.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);