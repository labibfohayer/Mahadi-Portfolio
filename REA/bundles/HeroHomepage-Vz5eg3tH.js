import{n as e}from"./chunk-DzMEjpoC.js";import{t}from"./barba.umd-952WaOnd.js";import{t as n}from"./gsap-C1dwDtf_.js";import{a as r,c as i,d as a,f as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./Sketch-BeEm10aS.js";var m=e(t(),1),h=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},g=class extends h{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function _(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var v={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:_,toHexString:_},y={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},b=[v,y,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=y.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return y.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=y.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return y.toHexString(i)}}];function x(e){return b.find(t=>t.match(e))}var S=class extends h{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=x(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=_(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},C=class extends h{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},w=class extends h{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},T=class extends h{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},E=class extends h{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},D=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function O(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var k=!1,A=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!k&&o&&(O(D),k=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a}add(e,t,n,r,i){if(Object(n)===n)return new T(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new w(this,e,t,n,r,i);case`boolean`:return new g(this,e,t);case`string`:return new E(this,e,t);case`function`:return new C(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new S(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof C||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof C)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},j=`uniform float uBend;
uniform vec2 uSize;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 p = position;
  float halfW = uSize.x * 0.5;
  float distX = clamp(abs(p.x) / halfW, 0.0, 1.0); 
  p.z -= uBend * distX * distX;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,M=`precision highp float;

uniform sampler2D uMap;
uniform float uHasMap;
uniform vec3 uColor;
uniform vec2 uSize;        
uniform float uRadius;     
uniform float uOpacity;
uniform float uImageAspect; 
varying vec2 vUv;

vec3 linearToSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float sdRoundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + vec2(r);
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

vec2 coverUv(vec2 uv, float imgAspect, float planeAspect) {
  vec2 scale = vec2(1.0);
  if (imgAspect > planeAspect) {
    scale.x = planeAspect / imgAspect;
  } else {
    scale.y = imgAspect / planeAspect;
  }
  return (uv - 0.5) * scale + 0.5;
}

float gaussWeight(int i) {
  return i == 0 ? 0.5 : 0.25;
}

void main() {
  
  vec2 uv = coverUv(vUv, uImageAspect, uSize.x / uSize.y);
  vec3 col = uHasMap > 0.5 ? texture2D(uMap, uv).rgb : uColor;
  vec2 p = (vUv - 0.5) * uSize;
  float d = sdRoundedBox(p, uSize * 0.5, uRadius);
  float aa = fwidth(d);
  float maskAlpha = 1.0 - smoothstep(-aa, aa, d);
  float alpha = maskAlpha * uOpacity;
  if (alpha <= 0.001) discard;
  
  
  gl_FragColor = vec4(linearToSRGB(col), alpha);
}`,N=3,P={cameraZ:8.6,fov:24,carouselRadius:4.3,carouselTiltDeg:-13,planeWidth:1.6,planeHeight:1.6,borderRadius:.08,bendAmount:.12,minOpacity:0,autoRotateSpeed:-.04},F=[{maxWidth:768,name:`phone`,overrides:{fov:49,carouselRadius:4}},{maxWidth:1024,name:`tablet`,overrides:{fov:40}}],I=Math.cos(Math.PI/N),L=5,R=.35,z=.94,B=6,V=.001,H=100,U=class e extends p{static mount(t=document){let n=t.querySelector(`[data-hero-homepage]`);if(!n)return null;let r=n.querySelector(`[data-hero-homepage-canvas]`),i=n.querySelector(`[data-hero-homepage-services]`);if(!r||!i)return null;let a;try{a=JSON.parse(i.textContent)}catch(e){return console.warn(`HeroHomepage: invalid services JSON`,e),null}return!Array.isArray(a)||a.length===0?null:new e({stage:n,canvasMount:r,services:a})}constructor({stage:e,canvasMount:t,services:n}){super({dom:t,fov:P.fov,far:100,cameraPosition:{x:0,y:0,z:P.cameraZ}}),this.stage=e,this.canvasMount=t,this.services=n,this.activeBreakpoint=this.resolveBreakpoint(),this.params={...P,...this.activeBreakpoint.overrides},this.dragInfluence=.005,this.rotation=0,this.targetRotation=0,this.isDragging=!1,this.spinVelocity=this.params.autoRotateSpeed,this.lastPointerTime=0,this.prefersReduced=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,this.scrollTween=null,this.isAnimatingScroll=!1,this.scrollMinDuration=.8,this.scrollMaxDuration=2.8,this.scrollHoldMs=1500,this.lastPointerX=0,this.pointerDownX=0,this.pointerDownY=0,this.dragDistance=0,this.resumeTimer=null,this.activeSlug=null,this.introTimeline=null,this.raycaster=new f,this.pointerNDC=new o,this.bindPointerEvents(),this.bindLabelEvents(),this.buildCarousel(),this.isDebugEnabled()&&this.setupDebugGui(),this.playIntro()}playIntro(){let e=this.stage.parentElement,t=e?.querySelectorAll(`.hero-homepage__title-line`),r=e?.querySelector(`[data-hero-homepage-labels]`),i=this.prefersReduced;if(n.set(this.canvasMount,{y:this.parkedY(),autoAlpha:0}),this.updateClip(),i){n.set(this.canvasMount,{y:0,autoAlpha:0}),this.canvasMount.style.clipPath=``,t&&n.set(t,{opacity:0,y:0}),r&&n.set(r,{opacity:1}),this.setupCarouselReveal();return}let a=n.timeline({onComplete:()=>this.setupCarouselReveal()});this.introTimeline=a,t&&t.length>0&&(a.to(t,{opacity:1,y:0,duration:1.3,stagger:.1,ease:`power3.out`,delay:.2}),a.to(t,{opacity:0,duration:.35,stagger:{each:.06,from:`end`},ease:`power2.in`},`+=0.25`)),a.to(this.canvasMount,{y:0,autoAlpha:1,duration:1.2,ease:`power3.out`,onUpdate:()=>this.updateClip(),onComplete:()=>{this.canvasMount.style.clipPath=``}},t&&t.length>0?`<0.15`:0),r&&a.to(r,{opacity:1,duration:.6,ease:`power2.out`})}parkedY(){return this.canvasMount.offsetHeight}updateClip(){let e=this.canvasMount.getBoundingClientRect(),t=Math.max(0,e.bottom-window.innerHeight);this.canvasMount.style.clipPath=t>0?`inset(0 0 ${t}px 0)`:`none`}setupCarouselReveal(){this.revealObserver=new IntersectionObserver(e=>{for(let t of e)n.killTweensOf(this.canvasMount),n.set(this.canvasMount,{y:0,autoAlpha:+!!t.isIntersecting}),this.canvasMount.style.clipPath=``},{threshold:0}),this.revealObserver.observe(this.stage)}init(){this.carousel=new d,this.scene.add(this.carousel),this.applyTilt(P.carouselTiltDeg,P.carouselRadius),this.planes=[],this.textureLoader=new a,this.textureLoader.crossOrigin=`anonymous`}isDebugEnabled(){return typeof window>`u`?!1:new URLSearchParams(window.location.search).has(`debug`)}resolveBreakpoint(){if(typeof window>`u`)return{name:`desktop`,overrides:{}};let e=window.innerWidth;for(let t of F)if(e<=t.maxWidth)return t;return{name:`desktop`,overrides:{}}}onResize(){let e=this.resolveBreakpoint();if(e.name===this.activeBreakpoint?.name)return;this.activeBreakpoint=e;let t={...P,...e.overrides};Object.assign(this.params,t),this.camera.fov=this.params.fov,this.camera.position.z=this.params.cameraZ,this.camera.updateProjectionMatrix(),this.applyTilt(this.params.carouselTiltDeg,this.params.carouselRadius),this.rebuildCarousel(),this.gui?.controllersRecursive().forEach(e=>e.updateDisplay())}buildCarousel(){let e=[];for(let t=0;t<N;t++)this.services.forEach(t=>e.push(t));let t=e.length,n=new o(this.params.planeWidth,this.params.planeHeight);e.forEach((e,a)=>{let o=a/t*Math.PI*2,s=new u(this.params.planeWidth,this.params.planeHeight,24,1),d=new c({vertexShader:j,fragmentShader:M,transparent:!0,side:2,uniforms:{uMap:{value:null},uHasMap:{value:0},uColor:{value:new l(15658734)},uSize:{value:n},uRadius:{value:this.params.borderRadius},uBend:{value:this.params.bendAmount},uOpacity:{value:1},uImageAspect:{value:1}}});e.image&&this.textureLoader.load(e.image,e=>{e.colorSpace=i,d.uniforms.uMap.value=e,d.uniforms.uHasMap.value=1;let{width:t,height:n}=e.image;t&&n&&(d.uniforms.uImageAspect.value=t/n),d.needsUpdate=!0},void 0,()=>{});let f=new r(s,d);f.position.set(Math.sin(o)*this.params.carouselRadius,0,Math.cos(o)*this.params.carouselRadius),f.rotation.y=o,f.userData={baseAngle:o,material:d,service:e},this.carousel.add(f),this.planes.push(f)})}rebuildCarousel(){if(this.planes){for(let e of this.planes)this.carousel.remove(e),e.geometry.dispose(),e.userData.material.uniforms.uMap.value?.dispose?.(),e.userData.material.dispose();this.planes.length=0,this.buildCarousel(),this.applyTilt(this.params.carouselTiltDeg,this.params.carouselRadius)}}applyTilt(e,t){if(!this.carousel)return;let n=s.degToRad(e);this.carousel.rotation.x=n,this.carousel.position.y=t*Math.sin(n)}setupDebugGui(){this.gui=new A({title:`Hero Homepage`});let e=this.gui.addFolder(`Camera`);e.add(this.params,`cameraZ`,1,20,.1).onChange(e=>{this.camera.position.z=e,this.camera.updateProjectionMatrix()}),e.add(this.params,`fov`,10,90,1).onChange(e=>{this.camera.fov=e,this.camera.updateProjectionMatrix()});let t=this.gui.addFolder(`Arc`);t.add(this.params,`carouselRadius`,1,12,.1).onChange(()=>this.rebuildCarousel()),t.add(this.params,`carouselTiltDeg`,-30,30,.5).onChange(e=>this.applyTilt(e,this.params.carouselRadius));let n=this.gui.addFolder(`Plane`);n.add(this.params,`planeWidth`,.3,4,.05).onChange(()=>this.rebuildCarousel()),n.add(this.params,`planeHeight`,.3,4,.05).onChange(()=>this.rebuildCarousel()),n.add(this.params,`borderRadius`,0,.5,.01).onChange(e=>this.forEachUniform(`uRadius`,e)),n.add(this.params,`bendAmount`,0,.6,.01).onChange(e=>this.forEachUniform(`uBend`,e));let r=this.gui.addFolder(`Motion`);r.add(this.params,`autoRotateSpeed`,0,1,.01),r.add(this.params,`minOpacity`,0,1,.01),this.gui.add({reset:()=>this.resetDebugParams()},`reset`).name(`Reset`)}resetDebugParams(){Object.assign(this.params,P),this.camera.position.z=this.params.cameraZ,this.camera.fov=this.params.fov,this.camera.updateProjectionMatrix(),this.applyTilt(this.params.carouselTiltDeg,this.params.carouselRadius),this.rebuildCarousel(),this.gui?.controllersRecursive().forEach(e=>e.updateDisplay())}forEachUniform(e,t){if(this.planes)for(let n of this.planes){let r=n.userData.material.uniforms[e];r&&(r.value=t)}}bindPointerEvents(){this.onPointerDown=this.handlePointerDown.bind(this),this.onPointerMove=this.handlePointerMove.bind(this),this.onPointerUp=this.handlePointerUp.bind(this),this.stage.addEventListener(`pointerdown`,this.onPointerDown),window.addEventListener(`pointermove`,this.onPointerMove),window.addEventListener(`pointerup`,this.onPointerUp),window.addEventListener(`pointercancel`,this.onPointerUp)}handlePointerDown(e){this.isDragging=!0,this.lastPointerX=e.clientX,this.pointerDownX=e.clientX,this.pointerDownY=e.clientY,this.dragDistance=0,this.spinVelocity=0,this.lastPointerTime=performance.now(),this.resumeTimer&&=(clearTimeout(this.resumeTimer),null),this.scrollTween&&(this.scrollTween.kill(),this.scrollTween=null,this.isAnimatingScroll=!1,this.setActiveSlug(null)),this.targetRotation=this.rotation}handlePointerMove(e){if(!this.isDragging)return;let t=e.clientX-this.lastPointerX;this.lastPointerX=e.clientX;let n=t*this.dragInfluence;this.targetRotation+=n;let r=performance.now(),i=Math.max(r-this.lastPointerTime,1)/1e3;this.lastPointerTime=r;let a=n/i;this.spinVelocity=this.spinVelocity*(1-R)+a*R,this.dragDistance=Math.hypot(e.clientX-this.pointerDownX,e.clientY-this.pointerDownY)}handlePointerUp(e){if(this.isDragging){if(this.isDragging=!1,this.dragDistance<L&&this.tryNavigateFromCanvas(e),performance.now()-this.lastPointerTime>H||this.prefersReduced){this.spinVelocity=this.params.autoRotateSpeed;return}this.spinVelocity=n.utils.clamp(-B,B,this.spinVelocity)}}tryNavigateFromCanvas(e){if(!this.canvasMount||!this.planes?.length||!e||e.target!==this.canvasMount.firstChild)return;let t=this.canvasMount.getBoundingClientRect();if(t.width===0||t.height===0)return;this.pointerNDC.x=(e.clientX-t.left)/t.width*2-1,this.pointerNDC.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointerNDC,this.camera);let n=this.raycaster.intersectObjects(this.planes,!1);if(n.length===0)return;let r=n[0].object.userData?.service?.permalink;if(r)try{m.default.go(r)}catch{window.location.href=r}}bindLabelEvents(){this.labelsRoot=this.stage.parentElement?.querySelector(`[data-hero-homepage-labels]`),this.labelsRoot&&(this.onLabelClick=this.handleLabelClick.bind(this),this.labelsRoot.addEventListener(`click`,this.onLabelClick))}handleLabelClick(e){let t=e.target.closest(`[data-hero-homepage-label]`);if(!t)return;let n=t.dataset.serviceSlug;n&&(this.setActiveSlug(n),this.scrollToService(n))}setActiveSlug(e){if(e===this.activeSlug||(this.activeSlug=e,!this.labelsRoot))return;let t=this.labelsRoot.querySelectorAll(`[data-hero-homepage-label]`);for(let n of t)n.classList.toggle(`is-active`,n.dataset.serviceSlug===e)}updateActiveFromFrontPlane(){if(!this.planes?.length)return;let e=null,t=-1/0;for(let n of this.planes){let r=n.userData.baseAngle+this.rotation,i=Math.cos(r);i>t&&(t=i,e=n)}let n=e?.userData.service?.slug;n&&this.setActiveSlug(n)}scrollToService(e){if(!this.planes?.length)return;let t=this.planes.filter(t=>t.userData.service?.slug===e);if(t.length===0)return;let r=Math.PI*2,i=t[Math.floor(Math.random()*t.length)],a=this.targetRotation,o=-i.userData.baseAngle;for(;o-a>Math.PI;)o-=r;for(;o-a<-Math.PI;)o+=r;Math.random()<.5&&(o>a?o-=r:o<a?o+=r:o+=Math.random()<.5?r:-r),this.targetRotation=o,this.scrollTween&&=(this.scrollTween.kill(),null),this.resumeTimer&&=(clearTimeout(this.resumeTimer),null);let c=Math.abs(o-this.rotation),l=s.lerp(this.scrollMinDuration,this.scrollMaxDuration,Math.min(c/r,1));this.isAnimatingScroll=!0,this.scrollTween=n.to(this,{rotation:o,duration:l,ease:`power2.inOut`,onComplete:()=>{this.isAnimatingScroll=!1,this.scrollTween=null,this.resumeTimer=setTimeout(()=>{this.resumeTimer=null},this.scrollHoldMs)}})}update(e,t){if(!(!this.carousel||!this.params)){if(this.isDragging)this.rotation=this.targetRotation;else if(this.isAnimatingScroll)this.targetRotation=this.rotation;else if(this.resumeTimer)this.spinVelocity=this.params.autoRotateSpeed,this.targetRotation=this.rotation;else{let e=this.params.autoRotateSpeed,n=z**(t*60);this.spinVelocity=e+(this.spinVelocity-e)*n,Math.abs(this.spinVelocity-e)<V&&(this.spinVelocity=e),this.rotation+=this.spinVelocity*t,this.targetRotation=this.rotation}if(this.carousel.rotation.y=this.rotation,this.isAnimatingScroll||this.updateActiveFromFrontPlane(),this.planes){let e=this.params.minOpacity,t=I;for(let n of this.planes){let r=n.userData.baseAngle+this.rotation,i=Math.cos(r),a;if(i>=t)a=1;else{let n=(i+1)/(t+1);a=e+(1-e)*n}n.userData.material.uniforms.uOpacity.value=a}}}}destroy(){this.resumeTimer&&=(clearTimeout(this.resumeTimer),null),this.revealObserver?.disconnect(),this.revealObserver=null,this.introTimeline?.kill(),this.gui?.destroy(),this.stage?.removeEventListener(`pointerdown`,this.onPointerDown),window.removeEventListener(`pointermove`,this.onPointerMove),window.removeEventListener(`pointerup`,this.onPointerUp),window.removeEventListener(`pointercancel`,this.onPointerUp),this.labelsRoot?.removeEventListener(`click`,this.onLabelClick),super.destroy()}};export{U as default};