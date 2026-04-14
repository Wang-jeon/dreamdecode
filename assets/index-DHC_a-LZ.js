(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const P=220,B=6,I=["#ffffff","#e0d7ff","#c4b5fd","#fde68a","#bfdbfe"],T=["rgba(124, 58, 237, 0.06)","rgba(79, 70, 229, 0.05)","rgba(245, 158, 11, 0.04)","rgba(167, 139, 250, 0.05)"];let L=[],A=[],p,n,i,c;function a(e,t){return e+Math.random()*(t-e)}function R(){L=Array.from({length:P},()=>({x:a(0,i),y:a(0,c),r:a(.4,1.8),alpha:a(.2,.9),alphaTarget:a(.3,1),alphaSpeed:a(.003,.012),color:I[Math.floor(Math.random()*I.length)]}))}function K(){A=Array.from({length:B},()=>({x:a(0,i),y:a(0,c),dx:a(-.15,.15),dy:a(-.08,.08),radius:a(i*.15,i*.35),alpha:a(.3,.7),color:T[Math.floor(Math.random()*T.length)]}))}function E(){i=p.width=window.innerWidth,c=p.height=window.innerHeight,R(),K()}function M(){n.clearRect(0,0,i,c);for(const e of A){const t=n.createRadialGradient(e.x,e.y,0,e.x,e.y,e.radius);t.addColorStop(0,e.color),t.addColorStop(1,"transparent"),n.globalAlpha=e.alpha,n.fillStyle=t,n.beginPath(),n.arc(e.x,e.y,e.radius,0,Math.PI*2),n.fill(),e.x+=e.dx,e.y+=e.dy,e.x<-e.radius&&(e.x=i+e.radius),e.x>i+e.radius&&(e.x=-e.radius),e.y<-e.radius&&(e.y=c+e.radius),e.y>c+e.radius&&(e.y=-e.radius)}n.globalAlpha=1;for(const e of L)Math.abs(e.alpha-e.alphaTarget)<e.alphaSpeed&&(e.alphaTarget=a(.1,1)),e.alpha+=(e.alphaTarget-e.alpha)*e.alphaSpeed,n.globalAlpha=e.alpha,n.fillStyle=e.color,n.beginPath(),n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill();n.globalAlpha=1,requestAnimationFrame(M)}function j(e){p=e;const t=p.getContext("2d");t&&(n=t,E(),window.addEventListener("resize",E),M())}const y=[{symbol:"Water",emotion:"Uncertainty / Transition",insight:"Your subconscious is processing a significant life change. Water in dreams represents the fluid boundary between the conscious and unconscious mind. The current emotional turbulence is not a crisis — it is the natural pressure of growth. Trust the current.",keywords:["transformation","flow","renewal","depth"],archetype:"The River"},{symbol:"Flight",emotion:"Liberation / Ambition",insight:"You are experiencing a powerful desire to rise above limitations. Flying dreams often emerge when the psyche is ready to transcend old patterns. Your aspirations are not fantasies — they are blueprints. The altitude you reach mirrors how far you dare to believe in yourself.",keywords:["freedom","perspective","elevation","possibility"],archetype:"The Seeker"},{symbol:"Threshold",emotion:"Anticipation / Fear of the Unknown",insight:"A threshold moment is approaching in your waking life. The closed door is not a barrier — it is an invitation. Your subconscious is pre-processing a decision that will require courage. What waits beyond is shaped by who you choose to be when you reach for the handle.",keywords:["choice","opportunity","initiation","courage"],archetype:"The Gatekeeper"},{symbol:"Shadow",emotion:"Anxiety / Unexplored Self",insight:"The shadowed figure in your dream is not an enemy — it is an unacknowledged part of yourself. Jungian psychology calls this the Shadow: the traits, fears, and desires you have suppressed. Confronting it is not defeat. It is integration, and integration is power.",keywords:["shadow-self","integration","hidden truth","confrontation"],archetype:"The Shadow"},{symbol:"Labyrinth",emotion:"Confusion / Inner Search",insight:"You are in the middle of a complex inner journey. The maze is not a punishment — it is the structure of your own thought patterns made visible. Each wrong turn teaches you something about the walls you have built. The exit was always within you.",keywords:["complexity","inner-journey","patience","self-discovery"],archetype:"The Wanderer"},{symbol:"Storm",emotion:"Pressure / Imminent Change",insight:"A powerful force — emotional, creative, or circumstantial — is building beneath the surface. The storm is not chaos. It is charged energy seeking release. Your psyche is preparing you for a breakthrough that may feel violent at first but will clear the air. Stand in it.",keywords:["release","breakthrough","power","catharsis"],archetype:"The Storm-Bringer"},{symbol:"Mirror",emotion:"Identity / Self-Perception",insight:"The image in the mirror — whether distorted or vivid — reflects how you perceive yourself at the deepest level. If the reflection surprised you, your self-concept is evolving faster than your conscious mind has caught up. This is growth, not fracture. Look again, more kindly.",keywords:["identity","reflection","self-image","truth"],archetype:"The Witness"},{symbol:"Falling",emotion:"Loss of Control / Surrender",insight:"Falling signals a release of control the waking mind has been gripping too tightly. The dream is not a warning of failure — it is an invitation to surrender. The fear of falling often hides a deeper fear: that if you stop controlling, something precious will be lost. It will not.",keywords:["surrender","trust","release","faith"],archetype:"The Free-Faller"}],W={water:0,ocean:0,sea:0,river:0,rain:0,flood:0,fly:1,flying:1,float:1,sky:1,soar:1,wings:1,door:2,gate:2,room:2,enter:2,portal:2,threshold:2,dark:3,shadow:3,monster:3,fear:3,ghost:3,maze:4,lost:4,wander:4,labyrinth:4,corridor:4,storm:5,lightning:5,thunder:5,tornado:5,wind:5,mirror:6,reflect:6,face:6,glass:6,fall:7,falling:7,drop:7,cliff:7};function Y(e){const t=e.toLowerCase();let s=Math.floor(Math.random()*y.length),l=!1;for(const[r,d]of Object.entries(W))if(t.includes(r)){s=d,l=!0;break}l||(s=Math.floor(Math.random()*y.length));const o=1800+Math.random()*1e3;return new Promise(r=>setTimeout(()=>r(y[s]),o))}async function N(e){var w,v,x,k,S;const s="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=AIzaSyByPQKqIdcxj-QZkQXq_xf-1K5DqEYnxG0",l=`You are a depth psychology dream analyst. Analyze this dream and return ONLY a valid JSON object with no markdown, no explanation, no code fences.

Dream: "${e}"

Return exactly this JSON structure:
{
  "symbol": "<core dream symbol in 1-3 words>",
  "emotion": "<primary emotional current in 2-4 words>",
  "insight": "<deep psychological insight in 3-5 sentences, second person, poetic but grounded>",
  "keywords": ["<word1>", "<word2>", "<word3>", "<word4>"],
  "archetype": "<Jungian archetype title, e.g. The Wanderer>"
}`,o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:l}]}],generationConfig:{temperature:.8,maxOutputTokens:512}})});if(!o.ok){const D=await o.text();throw new Error(`Gemini API ${o.status}: ${D}`)}const O=(((S=(k=(x=(v=(w=(await o.json()).candidates)==null?void 0:w[0])==null?void 0:v.content)==null?void 0:x.parts)==null?void 0:k[0])==null?void 0:S.text)??"").trim().replace(/^```(?:json)?\n?/,"").replace(/\n?```$/,"");return JSON.parse(O)}async function q(e){return"AIzaSyByPQKqIdcxj-QZkQXq_xf-1K5DqEYnxG0".length>10?N(e):Y(e)}j(document.getElementById("star-canvas"));const z=document.getElementById("app");z.innerHTML=`
  <header class="site-header">
    <span class="logo-mark">✦</span>
    <h1 class="logo">DreamDecode</h1>
    <p class="tagline">AI Dream Interpretation</p>
  </header>

  <div class="divider"><span class="divider-dot">· · ·</span></div>

  <main>
    <section class="input-section">
      <label class="input-label" for="dream-input">Describe your dream</label>
      <textarea
        id="dream-input"
        class="dream-textarea"
        placeholder="I was flying above a dark ocean. A golden door appeared on the horizon, and the water began rising..."
        rows="6"
        aria-label="Dream description"
      ></textarea>
      <button id="decode-btn" class="decode-btn" type="button">
        ✦ &nbsp; Decode My Dream
      </button>
    </section>

    <div id="error-msg" class="error-msg" role="alert" aria-live="polite"></div>

    <div id="loading" class="loading-area" aria-live="polite">
      <div class="loading-ring"></div>
      <p class="loading-text">Reading your subconscious&hellip;</p>
    </div>

    <div id="result-card" class="result-card" aria-live="polite">
      <div class="result-header">
        <span class="result-header-icon">✦</span>
        <span class="result-header-label">Your Dream Reading</span>
      </div>
      <div class="symbol-block">
        <div class="block-label">Core Symbol</div>
        <div class="symbol-value" id="res-symbol">—</div>
        <div class="archetype-value" id="res-archetype">—</div>
      </div>
      <div class="emotion-block">
        <div class="block-label">Emotional Current</div>
        <div class="emotion-value" id="res-emotion">—</div>
      </div>
      <div class="insight-block">
        <span class="insight-quote" aria-hidden="true">"</span>
        <div class="insight-text" id="res-insight"></div>
      </div>
      <div class="keywords-row" id="res-keywords"></div>
      <div class="result-footer">
        <button id="share-btn" class="share-btn" type="button">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share on X
        </button>
      </div>
    </div>
  </main>

  <div class="ad-banner-wrapper">
    <div class="ad-banner-label">Advertisement</div>
    <div id="ad-banner"></div>
  </div>

  <footer class="site-footer">
    <p>DreamDecode &mdash; GOD Company &mdash; 2026</p>
  </footer>
`;const u=document.getElementById("dream-input"),b=document.getElementById("decode-btn"),$=document.getElementById("loading"),f=document.getElementById("result-card"),m=document.getElementById("error-msg"),F=document.getElementById("share-btn"),_=document.getElementById("res-symbol"),H=document.getElementById("res-archetype"),G=document.getElementById("res-emotion"),J=document.getElementById("res-insight"),Q=document.getElementById("res-keywords");let h=null;function C(e){$.classList.toggle("active",e),b.disabled=e}function g(e){m.textContent=e,m.classList.add("active")}function U(){m.textContent="",m.classList.remove("active")}function X(e){_.textContent=e.symbol,H.textContent=e.archetype,G.textContent=e.emotion,J.textContent=e.insight,Q.innerHTML=e.keywords.map(t=>`<span class="keyword-tag">${t}</span>`).join(""),f.classList.add("active"),f.scrollIntoView({behavior:"smooth",block:"nearest"})}b.addEventListener("click",async()=>{const e=u.value.trim();if(!e){g("Please describe your dream before decoding."),u.focus();return}if(e.length<10){g("Please add a bit more detail (at least a sentence)."),u.focus();return}U(),f.classList.remove("active"),C(!0);try{const t=await q(e);h=t,X(t)}catch(t){console.error(t),g("Something went wrong. Please try again.")}finally{C(!1)}});F.addEventListener("click",()=>{if(!h)return;const e=["🔮 My dream was decoded by DreamDecode","",`Symbol: ${h.symbol}`,`Archetype: ${h.archetype}`,"",`"${h.insight.slice(0,160)}..."`,"","#DreamDecode #DreamMeaning #AI","https://wang-jeon.github.io/dreamdecode/"].join(`
`);window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(e)}`,"_blank","noopener,noreferrer,width=600,height=450")});u.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="Enter"&&b.click()});
