import{P as R,Q as U,j as d}from"./index-D29d1MPK.js";import{r as B}from"./router-Bu5b4_LN.js";var C={};Object.defineProperty(C,"__esModule",{value:!0});C.default=void 0;var A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},P=function(){function t(e,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),b,_,S=C.confirmAlert=V,x=B,u=I(x),T=R,a=I(T),w=U;function I(t){return t&&t.__esModule?t:{default:t}}function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function L(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var E=(_=b=function(t){L(e,t);function e(){var o,r,n,p;K(this,e);for(var y=arguments.length,g=Array(y),m=0;m<y;m++)g[m]=arguments[m];return p=(r=(n=N(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(g))),n),n.handleClickButton=function(l){l.onClick&&l.onClick(),n.close()},n.handleClickOverlay=function(l){var c=n.props,i=c.closeOnClickOutside,s=c.onClickOutside,f=l.target===n.overlay;i&&f&&(s(),n.close()),l.stopPropagation()},n.close=function(){var l=n.props.afterClose;q(),M(n.props),G(l)},n.keyboard=function(l){var c=n.props,i=c.closeOnEscape,s=c.onKeypressEscape,f=c.onkeyPress,h=c.keyCodeForClose,O=l.keyCode,j=O===27;h.includes(O)&&n.close(),i&&j&&(s(l),n.close()),f&&f()},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboard,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboard,!1),n.props.willUnmount()},n.renderCustomUI=function(){var l=n.props,c=l.title,i=l.message,s=l.buttons,f=l.customUI,h={title:c,message:i,buttons:s,onClose:n.close};return f(h)},r),N(n,p)}return P(e,[{key:"render",value:function(){var r=this,n=this.props,p=n.title,y=n.message,g=n.buttons,m=n.childrenElement,l=n.customUI,c=n.overlayClassName;return u.default.createElement("div",{className:"react-confirm-alert-overlay "+c,ref:function(s){return r.overlay=s},onClick:this.handleClickOverlay},u.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():u.default.createElement("div",{className:"react-confirm-alert-body"},p&&u.default.createElement("h1",null,p),y,m(),u.default.createElement("div",{className:"react-confirm-alert-button-group"},g.map(function(i,s){return u.default.createElement("button",A({key:s,className:i.className},i,{onClick:function(h){return r.handleClickButton(i)}}),i.label)})))))}}]),e}(x.Component),b.propTypes={title:a.default.string,message:a.default.string,buttons:a.default.array.isRequired,childrenElement:a.default.func,customUI:a.default.func,closeOnClickOutside:a.default.bool,closeOnEscape:a.default.bool,keyCodeForClose:a.default.arrayOf(a.default.number),willUnmount:a.default.func,afterClose:a.default.func,onClickOutside:a.default.func,onKeypressEscape:a.default.func,onkeyPress:a.default.func,overlayClassName:a.default.string},b.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},_);C.default=E;var v=null,k="react-confirm-alert";function F(){var t=document.getElementById("react-confirm-alert-firm-svg");if(!t){var e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"feGaussianBlur");o.setAttribute("stdDeviation","0.3");var r=document.createElementNS(e,"filter");r.setAttribute("id","gaussian-blur"),r.appendChild(o);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(r),document.body.appendChild(n)}}function G(t){var e=document.getElementById("react-confirm-alert-firm-svg");e&&e.parentNode.removeChild(e),document.body.children[0].classList.remove("react-confirm-alert-blur"),t()}function D(t){var e=document.getElementById(t.targetId||k);t.targetId,e?(v=(0,w.createRoot)(e),v.render(u.default.createElement(E,t))):(document.body.children[0].classList.add("react-confirm-alert-blur"),e=document.createElement("div"),e.id=k,document.body.appendChild(e),v=(0,w.createRoot)(e),v.render(u.default.createElement(E,t)))}function M(t){var e=document.getElementById(t.targetId||k);e&&v.unmount(e)}function $(){document.body.classList.add("react-confirm-alert-body-element")}function q(){document.body.classList.remove("react-confirm-alert-body-element")}function V(t){$(),F(),D(t)}const W=(t,e,o)=>{S({customUI:({onClose:r})=>d.jsx("div",{className:"fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-55 z-50",children:d.jsxs("div",{className:"dark:bg-gray-900 bg-white  p-4 shadow-lg rounded-md",children:[d.jsx("h1",{className:"text-lg font-bold",children:t}),d.jsx("p",{className:"text-sm",children:e}),d.jsxs("div",{className:"flex justify-end mt-4",children:[d.jsx("button",{className:"bg-red-500 text-white px-4 py-1 rounded-md",onClick:()=>{o(),r()},children:"Yes"}),d.jsx("button",{className:"bg-gray-500 text-white px-4 py-1 rounded-md ml-2",onClick:r,children:"No"})]})]})})})};export{W as C};
