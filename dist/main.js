(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(645),i=t.n(o)()((function(n){return n[1]}));i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 15px;\n  line-height: 20px;\n}\n\na {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  background-color: #f4f5f7;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmain {\n  width: 100%;\n  display: flex;\n  flex-grow: 2;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  appearance: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\nbutton:active {\n  color: black;\n  opacity: 1;\n}\n\n.container {\n  background-color: #f1f2f5;\n  border-radius: 3px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  max-width: 500px;\n  width: 100%;\n  margin: 24px;\n}\n\n.page-footer {\n  display: flex;\n  margin: auto;\n  padding: 24px;\n}\n\n.list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  background-color: white;\n}\n\n.list-title {\n  line-height: 20px;\n  font-weight: 400;\n  padding: 1rem;\n}\n\n.input-form {\n  display: flex;\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.add-todo-input {\n  border: none;\n  padding: 0 40px 0 1rem;\n  line-height: 50px;\n  height: 50px;\n  outline: none;\n  box-shadow: none;\n  width: 100%;\n  font-weight: 300;\n  font-style: italic;\n}\n\n.todo {\n  position: relative;\n  font-size: 1rem;\n  padding-left: 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  box-sizing: content-box;\n  display: flex;\n  align-items: center;\n  background-color: white;\n}\n\n.dragging {\n  border: 2px solid royalblue;\n}\n\n.todo-completed .toggle .icon {\n  color: #2e8ae6;\n}\n\n.edit {\n  height: 20px;\n  line-height: 20px;\n  width: 100%;\n  padding: 15px 0;\n  border: none;\n  outline: none;\n  font-weight: 300;\n  resize: none;\n  box-shadow: none;\n}\n\n.todo-completed .edit {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.45);\n}\n\n.edit:focus {\n  text-decoration: none;\n  color: inherit;\n}\n\n.list-footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.clear-button {\n  margin: 1rem auto;\n  font-weight: 300;\n}\n\n.clear-button:hover {\n  text-decoration: underline;\n}\n\n.icon-button {\n  line-height: 50px;\n  font-size: 18px;\n  color: #333;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px;\n}\n\n.toggle {\n  padding: 0;\n  margin: 0;\n  margin-right: 17px;\n  opacity: 1;\n  color: #c1c1c3;\n}\n\n.drag-button {\n  cursor: all-scroll;\n}\n\n.hide {\n  display: none;\n}\n\n.opacity-2 {\n  opacity: 0.2;\n}\n\n.opacity-5 {\n  opacity: 0.5;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.color-gray {\n  color: #515664;\n}\n",""]);const r=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],d=0;d<n.length;d++){var s=n[d],c=o.base?s[0]+o.base:s[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=t(p),g={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(e[u].references++,e[u].updater(g)):e.push({identifier:p,updater:i(g,o),references:1}),a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var d=t(r[a]);e[d].references--}for(var s=o(n,i),c=0;c<r.length;c++){var l=t(r[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(695),a=t.n(r),d=t(216),s=t.n(d),c=t(426),l={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=a()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};l.domAPI=i(),l.insertStyleElement=s(),e()(c.Z,l),c.Z&&c.Z.locals&&c.Z.locals;const p="action/toggle",u="action/load_todos",g="action/swap",f="action/add_todo",h="action/edit_description",m="action/delete_todo",b="action/clear_completed",x=new class{constructor(){this.store=function(){let n=[];const e=[];return{getState:()=>n,subscribe:n=>e.push(n),dispatch:t=>{switch(t.type){case p:{const e=n.find((n=>n.index===t.index));e.completed=!e.completed;break}case u:n=t.items;break;case g:{const e=n[t.source],o=n[t.dest];n[t.source]=o,n[t.dest]=e,o.index=t.source,e.index=t.dest;break}case f:if(t.text.trim()){const e={index:n.length,description:t.text,completed:!1};n.push(e)}break;case h:{const e=n[t.index];e&&t.text.trim()&&(e.description=t.text);break}case m:n=n.filter((n=>n.index!==t.index)).map(((n,e)=>({...n,index:e})));break;case b:n=n.filter((n=>!n.completed)).map(((n,e)=>({...n,index:e})))}e.forEach((n=>n()))}}}()}get todos(){return this.store.getState()}toggleTodo(n){this.store.dispatch({type:p,index:n})}loadTodos(n){this.store.dispatch({type:u,items:n})}swapTodos(n,e){this.store.dispatch({type:g,source:n,dest:e})}addTodo(n){this.store.dispatch({type:f,text:n})}editTodo(n,e){this.store.dispatch({type:h,index:n,text:e})}deleteTodo(n){this.store.dispatch({type:m,index:n})}clearCompleted(){this.store.dispatch({type:b})}onUpdate(n){this.store.subscribe(n)}};function v(n){const e=document.createElement("button");e.classList.add("icon-button");const t=document.createElement("span");return t.innerText=n,t.classList.add("material-icons","icon"),e.appendChild(t),e}const y=document.getElementById("add-todo");y.addEventListener("submit",(n=>{n.preventDefault();const e=y.elements[0].value;x.addTodo(e),y.elements[0].value=""})),window.addEventListener("load",(()=>{document.getElementById("clear-btn").addEventListener("click",(()=>{x.clearCompleted()}));const n="localstorage/todos";x.onUpdate((()=>{!function(n=[]){const e=document.getElementById("items");e.innerHTML="",n.forEach((n=>{e.appendChild(function({index:n,description:e,completed:t,onToggle:o,onSwap:i,onEdit:r,onDelete:a}){const d=document.createElement("li");d.classList.add("todo"),d.addEventListener("dragstart",(e=>{d.classList.add("dragging"),setTimeout((()=>{d.classList.add("opacity-0")}),0),e.dataTransfer.setData("index",n)})),d.addEventListener("dragover",(n=>{n.preventDefault(),d.classList.add("opacity-2")})),d.addEventListener("dragleave",(()=>{d.classList.remove("opacity-2")})),d.addEventListener("dragend",(()=>{d.setAttribute("draggable",!1),d.classList.remove("opacity-0","dragging")})),d.addEventListener("drop",(e=>{const t=e.dataTransfer.getData("index");i(t,n)}));const s=v(t?"done":"check_box_outline_blank");s.classList.add("toggle"),t&&(d.classList.add("todo-completed"),s.classList.add("todo-completed")),s.addEventListener("click",(()=>{o(n)}));const c=document.createElement("input");c.value=e,c.classList.add("edit"),c.addEventListener("keyup",(e=>{"Enter"===e.key&&(e.preventDefault(),r(n,e.target.value))}));const l=v("more_vert");l.classList.add("drag-button","opacity-2"),l.addEventListener("mousedown",(()=>{d.setAttribute("draggable",!0)}));const p=v("delete_outline");p.classList.add("opacity-5","hide"),p.addEventListener("mousedown",(()=>{a(n)})),d.appendChild(s),d.appendChild(c),d.appendChild(p),d.appendChild(l);const u=()=>{l.classList.toggle("hide"),p.classList.toggle("hide")};return c.addEventListener("focus",u),c.addEventListener("blur",(e=>{u(),r(n,e.target.value)})),d}({...n,onToggle:n=>x.toggleTodo(n),onSwap:(n,e)=>x.swapTodos(n,e),onEdit:(n,e)=>x.editTodo(n,e),onDelete:n=>x.deleteTodo(n)}))}))}(x.todos)})),x.onUpdate((()=>{localStorage.setItem(n,JSON.stringify(x.todos))}));const e=localStorage.getItem(n);x.loadTodos(e?JSON.parse(e):[])}))})()})();