(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const ge=220,Ee=6,B=["#ffffff","#e0d7ff","#c4b5fd","#fde68a","#bfdbfe"],$=["rgba(124, 58, 237, 0.06)","rgba(79, 70, 229, 0.05)","rgba(245, 158, 11, 0.04)","rgba(167, 139, 250, 0.05)"];let ae=[],re=[],x,f,m,b;function g(e,t){return e+Math.random()*(t-e)}function pe(){ae=Array.from({length:ge},()=>({x:g(0,m),y:g(0,b),r:g(.4,1.8),alpha:g(.2,.9),alphaTarget:g(.3,1),alphaSpeed:g(.003,.012),color:B[Math.floor(Math.random()*B.length)]}))}function me(){re=Array.from({length:Ee},()=>({x:g(0,m),y:g(0,b),dx:g(-.15,.15),dy:g(-.08,.08),radius:g(m*.15,m*.35),alpha:g(.3,.7),color:$[Math.floor(Math.random()*$.length)]}))}function F(){m=x.width=window.innerWidth,b=x.height=window.innerHeight,pe(),me()}function ce(){f.clearRect(0,0,m,b);for(const e of re){const t=f.createRadialGradient(e.x,e.y,0,e.x,e.y,e.radius);t.addColorStop(0,e.color),t.addColorStop(1,"transparent"),f.globalAlpha=e.alpha,f.fillStyle=t,f.beginPath(),f.arc(e.x,e.y,e.radius,0,Math.PI*2),f.fill(),e.x+=e.dx,e.y+=e.dy,e.x<-e.radius&&(e.x=m+e.radius),e.x>m+e.radius&&(e.x=-e.radius),e.y<-e.radius&&(e.y=b+e.radius),e.y>b+e.radius&&(e.y=-e.radius)}f.globalAlpha=1;for(const e of ae)Math.abs(e.alpha-e.alphaTarget)<e.alphaSpeed&&(e.alphaTarget=g(.1,1)),e.alpha+=(e.alphaTarget-e.alpha)*e.alphaSpeed,f.globalAlpha=e.alpha,f.fillStyle=e.color,f.beginPath(),f.arc(e.x,e.y,e.r,0,Math.PI*2),f.fill();f.globalAlpha=1,requestAnimationFrame(ce)}function ve(e){x=e;const t=x.getContext("2d");t&&(f=t,F(),window.addEventListener("resize",F),ce())}var j;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(j||(j={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(k||(k={}));var K;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(K||(K={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=["user","model","function","system"];var Y;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Y||(Y={}));var q;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(q||(q={}));var V;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(V||(V={}));var J;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(J||(J={}));var w;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(w||(w={}));var W;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(W||(W={}));var X;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(X||(X={}));var z;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(z||(z={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class O extends u{constructor(t,n){super(t),this.response=n}}class de extends u{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class v extends u{}class le extends u{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="https://generativelanguage.googleapis.com",Ce="v1beta",_e="0.24.1",Ie="genai-js";var y;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(y||(y={}));class Oe{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||Ce;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ye}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Re(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${Ie}/${_e}`),t.join(" ")}async function be(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",Re(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new v(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new v(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new v(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function we(e,t,n,s,o,i){const a=new Oe(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},Te(i)),{method:"POST",headers:await be(a),body:o})}}async function N(e,t,n,s,o,i={},a=fetch){const{url:r,fetchOptions:d}=await we(e,t,n,s,o,i);return Ae(r,d,a)}async function Ae(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){Se(o,e)}return s.ok||await Ne(s,e),s}function Se(e,t){let n=e;throw n.name==="AbortError"?(n=new le(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof de||e instanceof v||(n=new u(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Ne(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new de(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function Te(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),T(e.candidates[0]))throw new O(`${p(e)}`,e);return Me(e)}else if(e.promptFeedback)throw new O(`Text not available. ${p(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(e.candidates[0]))throw new O(`${p(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Q(e)[0]}else if(e.promptFeedback)throw new O(`Function call not available. ${p(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(e.candidates[0]))throw new O(`${p(e)}`,e);return Q(e)}else if(e.promptFeedback)throw new O(`Function call not available. ${p(e)}`,e)},e}function Me(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Q(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const xe=[w.RECITATION,w.SAFETY,w.LANGUAGE];function T(e){return!!e.finishReason&&xe.includes(e.finishReason)}function p(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];T(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function A(e){return this instanceof A?(this.v=e,this):new A(e)}function Le(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(l){s[l]&&(o[l]=function(c){return new Promise(function(h,I){i.push([l,c,h,I])>1||r(l,c)})})}function r(l,c){try{d(s[l](c))}catch(h){_(i[0][3],h)}}function d(l){l.value instanceof A?Promise.resolve(l.value.v).then(E,C):_(i[0][2],l)}function E(l){r("next",l)}function C(l){r("throw",l)}function _(l,c){l(c),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function De(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=He(t),[s,o]=n.tee();return{stream:Ue(s),response:Ge(o)}}async function Ge(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return U(Be(t));t.push(o)}}function Ue(e){return Le(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield A(n.read());if(o)break;yield yield A(U(s))}})}function He(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new u("Failed to parse stream"));return}s.close();return}o+=a;let d=o.match(Z),E;for(;d;){try{E=JSON.parse(d[1])}catch{s.error(new u(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(E),o=o.substring(d[0].length),d=o.match(Z)}return i()}).catch(a=>{let r=a;throw r.stack=a.stack,r.name==="AbortError"?r=new le("Request aborted when reading from the stream"):r=new u("Error reading from the stream"),r})}}})}function Be(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const a={};for(const r of i.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[o].content.parts.push(a)}o++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e,t,n,s){const o=await N(t,y.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return De(o)}async function fe(e,t,n,s){const i=await(await N(t,y.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:U(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function S(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return $e(t)}function $e(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new u("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new u("No content is provided for sending chat message.");return s?t:n}function Fe(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new v("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=S(e);s.contents=[i]}return{generateContentRequest:s}}function ee(e){let t;return e.contents?t=e:t={contents:[S(e)]},e.systemInstruction&&(t.systemInstruction=he(e.systemInstruction)),t}function je(e){return typeof e=="string"||Array.isArray(e)?{content:S(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ke={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ke(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new u(`First content should be with role 'user', got ${s}`);if(!P.includes(s))throw new u(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(P)}`);if(!Array.isArray(o))throw new u("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new u("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const d of te)d in r&&(i[d]+=1);const a=ke[s];for(const r of te)if(!a.includes(r)&&i[r]>0)throw new u(`Content with role '${s}' can't contain '${r}' part`);t=!0}}function ne(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const s of n.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="SILENT_ERROR";class Pe{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(Ke(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,a,r,d;await this._sendPromise;const E=S(t),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,E]},_=Object.assign(Object.assign({},this._requestOptions),n);let l;return this._sendPromise=this._sendPromise.then(()=>fe(this._apiKey,this.model,C,_)).then(c=>{var h;if(ne(c.response)){this._history.push(E);const I=Object.assign({parts:[],role:"model"},(h=c.response.candidates)===null||h===void 0?void 0:h[0].content);this._history.push(I)}else{const I=p(c.response);I&&console.warn(`sendMessage() was unsuccessful. ${I}. Inspect response object for details.`)}l=c}).catch(c=>{throw this._sendPromise=Promise.resolve(),c}),await this._sendPromise,l}async sendMessageStream(t,n={}){var s,o,i,a,r,d;await this._sendPromise;const E=S(t),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,E]},_=Object.assign(Object.assign({},this._requestOptions),n),l=ue(this._apiKey,this.model,C,_);return this._sendPromise=this._sendPromise.then(()=>l).catch(c=>{throw new Error(se)}).then(c=>c.response).then(c=>{if(ne(c)){this._history.push(E);const h=Object.assign({},c.candidates[0].content);h.role||(h.role="model"),this._history.push(h)}else{const h=p(c);h&&console.warn(`sendMessageStream() was unsuccessful. ${h}. Inspect response object for details.`)}}).catch(c=>{c.message!==se&&console.error(c)}),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t,n,s){return(await N(t,y.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t,n,s){return(await N(t,y.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function Ve(e,t,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await N(t,y.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=he(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=ee(t),i=Object.assign(Object.assign({},this._requestOptions),n);return fe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=ee(t),i=Object.assign(Object.assign({},this._requestOptions),n);return ue(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new Pe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Fe(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return Ye(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=je(t),o=Object.assign(Object.assign({},this._requestOptions),n);return qe(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Ve(this.apiKey,this.model,t,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new u("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new oe(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new v("Cached content must contain a `name` field.");if(!t.model)throw new v("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&t[a]&&(n==null?void 0:n[a])!==t[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,d=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(r===d)continue}throw new v(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${t[a]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new oe(this.apiKey,i,s)}}async function We(e){const t="AIzaSyByPQKqIdcxj-QZkQXq_xf-1K5DqEYnxG0",s=new Je(t).getGenerativeModel({model:"gemini-2.0-flash-lite"}),o=`You are a depth psychology dream analyst. Analyze this dream and return ONLY a valid JSON object (no markdown, no explanation outside JSON).

Dream: "${e}"

Return exactly this JSON structure:
{
  "symbol": "<core symbol in 1-3 words>",
  "emotion": "<emotional current in 2-4 words>",
  "insight": "<deep psychological insight in 3-5 sentences, second person, poetic but grounded>",
  "keywords": ["<word1>", "<word2>", "<word3>", "<word4>"],
  "archetype": "<Jungian archetype title, e.g. The Wanderer>"
}`,r=(await s.generateContent(o)).response.text().trim().replace(/^```(?:json)?\n?/,"").replace(/\n?```$/,"");return JSON.parse(r)}async function Xe(e){return We(e)}ve(document.getElementById("star-canvas"));const ze=document.getElementById("app");ze.innerHTML=`
  <header class="site-header">
    <div class="logo">DreamDecode</div>
    <p class="tagline">What does your dream mean?</p>
  </header>

  <div class="divider"></div>

  <main>
    <section class="input-section" aria-label="Dream input">
      <label class="input-label" for="dream-input">Describe your dream</label>
      <textarea
        id="dream-input"
        class="dream-textarea"
        placeholder="Describe your dream in detail... (e.g. I was flying over a dark ocean, the water was rising, and I could see a golden door on the horizon...)"
        rows="6"
        aria-label="Dream description"
      ></textarea>
      <button id="decode-btn" class="decode-btn" type="button">
        ✦ Decode My Dream
      </button>
    </section>

    <div id="error-msg" class="error-msg" role="alert" aria-live="polite"></div>

    <div id="loading" class="loading-area" aria-live="polite" aria-label="Loading">
      <div class="loading-orb"></div>
      <p class="loading-text">Consulting the subconscious...</p>
    </div>

    <div id="result-card" class="result-card" aria-live="polite">
      <div class="result-header">
        <span class="result-icon">🔮</span>
        <span class="result-title">Your Dream Reading</span>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-item-label">Core Symbol</div>
          <div class="result-item-value" id="res-symbol">—</div>
        </div>
        <div class="result-item">
          <div class="result-item-label">Archetype</div>
          <div class="result-item-value" id="res-archetype">—</div>
        </div>
        <div class="result-item" style="grid-column: 1 / -1;">
          <div class="result-item-label">Emotional Current</div>
          <div class="result-item-value" id="res-emotion">—</div>
        </div>
      </div>
      <div class="result-insight" id="res-insight"></div>
      <div class="keywords-row" id="res-keywords"></div>
      <button id="share-btn" class="share-btn" type="button">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        Share My Dream Reading
      </button>
    </div>
  </main>

  <div class="ad-banner-wrapper">
    <div class="ad-banner-label">Advertisement</div>
    <div id="ad-banner">[ Ad Banner — Google AdSense ]</div>
  </div>

  <footer class="site-footer">
    <p>DreamDecode &copy; 2025 &mdash; GOD Company &mdash; AI Dream Interpretation</p>
  </footer>
`;const M=document.getElementById("dream-input"),H=document.getElementById("decode-btn"),Qe=document.getElementById("loading"),G=document.getElementById("result-card"),L=document.getElementById("error-msg"),Ze=document.getElementById("share-btn"),et=document.getElementById("res-symbol"),tt=document.getElementById("res-archetype"),nt=document.getElementById("res-emotion"),st=document.getElementById("res-insight"),ot=document.getElementById("res-keywords");let R=null;function ie(e){Qe.classList.toggle("active",e),H.disabled=e}function D(e){L.textContent=e,L.classList.add("active")}function it(){L.textContent="",L.classList.remove("active")}function at(e){et.textContent=e.symbol,tt.textContent=e.archetype,nt.textContent=e.emotion,st.textContent=e.insight,ot.innerHTML=e.keywords.map(t=>`<span class="keyword-tag">${t}</span>`).join(""),G.classList.add("active"),G.scrollIntoView({behavior:"smooth",block:"nearest"})}H.addEventListener("click",async()=>{const e=M.value.trim();if(!e){D("Please describe your dream before decoding."),M.focus();return}if(e.length<10){D("Please provide more detail about your dream (at least a sentence or two)."),M.focus();return}it(),G.classList.remove("active"),ie(!0);try{const t=await Xe(e);R=t,at(t)}catch(t){D("Something went wrong while decoding your dream. Please try again."),console.error(t)}finally{ie(!1)}});Ze.addEventListener("click",()=>{if(!R)return;const e=["My dream was decoded by DreamDecode 🔮","",`Symbol: ${R.symbol}`,`Archetype: ${R.archetype}`,`Emotion: ${R.emotion}`,"",`"${R.insight.slice(0,140)}..."`,"","#DreamDecode #DreamMeaning #AI"].join(`
`),t=`https://x.com/intent/tweet?text=${encodeURIComponent(e)}`;window.open(t,"_blank","noopener,noreferrer,width=600,height=450")});M.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="Enter"&&H.click()});
