(this.webpackJsonpmemeopedia=this.webpackJsonpmemeopedia||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),o=n(2),r=(n(9),n(0));var l=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),l=i[0],m=i[1],d=Object(c.useState)(),u=Object(o.a)(d,2),j=u[0],p=u[1];return Object(c.useEffect)((function(){m([]),a(),fetch("https://api.imgflip.com/get_memes").then((function(e){if(e.ok)return e.json()})).then((function(e){var t=e.data.memes,n=Math.floor(Math.random()*t.length);a(t[n]),p(t[n].url)}))}),[]),Object(c.useEffect)((function(){n&&n.box_count&&m(new Array(n.box_count).fill(""))}),[n]),Object(c.useEffect)((function(){if(l.length>0){var e=new FormData;e.append("username","aritrabasu71"),e.append("password","aritrabasu71"),e.append("template_id",null===n||void 0===n?void 0:n.id),l.forEach((function(t,n){e.append("boxes[".concat(n,"][text]"),t)})),fetch("https://api.imgflip.com/caption_image",{method:"POST",body:e}).then((function(e){if(e.ok)return e.json()})).then((function(e){e.success&&p(e.data.url)}))}}),[l,null===n||void 0===n?void 0:n.id]),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row bg-design",children:[Object(r.jsxs)("div",{className:"col",children:[Object(r.jsxs)("div",{className:"app-name",children:["Meme",Object(r.jsx)("span",{className:"text-theme",children:"Opedia"})]}),Object(r.jsxs)("div",{className:"app-description",children:[Object(r.jsxs)("p",{children:["Hey Buddy let's complete ",Object(r.jsx)("span",{className:"text-theme",children:" this mission "})," and make her laugh !! \ud83d\ude09"]}),Object(r.jsxs)("form",{className:"meme-form",children:[l&&l.map((function(e,t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{children:["Caption - ",t+1]},"label-".concat(t)),Object(r.jsx)("input",{type:"text",onChange:function(e){!function(e,t){var n=e.target.value||"";m(l.map((function(e,c){return c===t?n:e})))}(e,t)}},t)]})})),j&&Object(r.jsx)("button",{className:"post-btn",onClick:function(e){e.preventDefault()},children:" Post Meme "})]})]})]}),Object(r.jsx)("div",{className:"col image-holder",children:j&&Object(r.jsx)("img",{src:j,className:"meme-template",alt:"meme"})})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.bba1477e.chunk.js.map