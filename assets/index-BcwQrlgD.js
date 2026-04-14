(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const W=220,H=6,C=["#ffffff","#e0d7ff","#c4b5fd","#fde68a","#bfdbfe"],A=["rgba(124, 58, 237, 0.06)","rgba(79, 70, 229, 0.05)","rgba(245, 158, 11, 0.04)","rgba(167, 139, 250, 0.05)"];let K=[],$=[],m,a,d,h;function i(e,t){return e+Math.random()*(t-e)}function q(){K=Array.from({length:W},()=>({x:i(0,d),y:i(0,h),r:i(.4,1.8),alpha:i(.2,.9),alphaTarget:i(.3,1),alphaSpeed:i(.003,.012),color:C[Math.floor(Math.random()*C.length)]}))}function z(){$=Array.from({length:H},()=>({x:i(0,d),y:i(0,h),dx:i(-.15,.15),dy:i(-.08,.08),radius:i(d*.15,d*.35),alpha:i(.3,.7),color:A[Math.floor(Math.random()*A.length)]}))}function O(){d=m.width=window.innerWidth,h=m.height=window.innerHeight,q(),z()}function R(){a.clearRect(0,0,d,h);for(const e of $){const t=a.createRadialGradient(e.x,e.y,0,e.x,e.y,e.radius);t.addColorStop(0,e.color),t.addColorStop(1,"transparent"),a.globalAlpha=e.alpha,a.fillStyle=t,a.beginPath(),a.arc(e.x,e.y,e.radius,0,Math.PI*2),a.fill(),e.x+=e.dx,e.y+=e.dy,e.x<-e.radius&&(e.x=d+e.radius),e.x>d+e.radius&&(e.x=-e.radius),e.y<-e.radius&&(e.y=h+e.radius),e.y>h+e.radius&&(e.y=-e.radius)}a.globalAlpha=1;for(const e of K)Math.abs(e.alpha-e.alphaTarget)<e.alphaSpeed&&(e.alphaTarget=i(.1,1)),e.alpha+=(e.alphaTarget-e.alpha)*e.alphaSpeed,a.globalAlpha=e.alpha,a.fillStyle=e.color,a.beginPath(),a.arc(e.x,e.y,e.r,0,Math.PI*2),a.fill();a.globalAlpha=1,requestAnimationFrame(R)}function G(e){m=e;const t=m.getContext("2d");t&&(a=t,O(),window.addEventListener("resize",O),R())}function F(e){return/[\uAC00-\uD7AF\u3131-\u318E]/.test(e)?"ko":/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(e)?"ja":/[áéíóúüñ¿¡]/i.test(e)?"es":/[àâçèéêëîïôùûü]/i.test(e)?"fr":"en"}const Q=[{symbol:"Water",emotion:"Uncertainty / Transition",insight:"Your subconscious is processing a significant life change. Water in dreams represents the fluid boundary between the conscious and unconscious mind. The current emotional turbulence is not a crisis — it is the natural pressure of growth. Trust the current.",keywords:["transformation","flow","renewal","depth"],archetype:"The River",language:"en"},{symbol:"Flight",emotion:"Liberation / Ambition",insight:"You are experiencing a powerful desire to rise above limitations. Flying dreams often emerge when the psyche is ready to transcend old patterns. Your aspirations are not fantasies — they are blueprints. The altitude you reach mirrors how far you dare to believe in yourself.",keywords:["freedom","perspective","elevation","possibility"],archetype:"The Seeker",language:"en"},{symbol:"Threshold",emotion:"Anticipation / Fear of the Unknown",insight:"A threshold moment is approaching in your waking life. The closed door is not a barrier — it is an invitation. Your subconscious is pre-processing a decision that will require courage. What waits beyond is shaped by who you choose to be when you reach for the handle.",keywords:["choice","opportunity","initiation","courage"],archetype:"The Gatekeeper",language:"en"},{symbol:"Shadow",emotion:"Anxiety / Unexplored Self",insight:"The shadowed figure in your dream is not an enemy — it is an unacknowledged part of yourself. Jungian psychology calls this the Shadow: the traits, fears, and desires you have suppressed. Confronting it is not defeat. It is integration, and integration is power.",keywords:["shadow-self","integration","hidden truth","confrontation"],archetype:"The Shadow",language:"en"},{symbol:"Storm",emotion:"Pressure / Imminent Change",insight:"A powerful force is building beneath the surface. The storm is not chaos — it is charged energy seeking release. Your psyche is preparing you for a breakthrough that may feel violent at first but will clear the air. Stand in it.",keywords:["release","breakthrough","power","catharsis"],archetype:"The Storm-Bringer",language:"en"},{symbol:"Mirror",emotion:"Identity / Self-Perception",insight:"The image in the mirror reflects how you perceive yourself at the deepest level. If the reflection surprised you, your self-concept is evolving faster than your conscious mind has caught up. This is growth, not fracture. Look again, more kindly.",keywords:["identity","reflection","self-image","truth"],archetype:"The Witness",language:"en"},{symbol:"Falling",emotion:"Loss of Control / Surrender",insight:"Falling signals a release of control the waking mind has been gripping too tightly. The dream is not a warning of failure — it is an invitation to surrender. The fear of falling often hides a deeper fear: that if you stop controlling, something precious will be lost. It will not.",keywords:["surrender","trust","release","faith"],archetype:"The Free-Faller",language:"en"},{symbol:"Labyrinth",emotion:"Confusion / Inner Search",insight:"You are in the middle of a complex inner journey. The maze is not a punishment — it is the structure of your own thought patterns made visible. Each wrong turn teaches you something about the walls you have built. The exit was always within you.",keywords:["complexity","inner-journey","patience","self-discovery"],archetype:"The Wanderer",language:"en"}],U=[{symbol:"물",emotion:"불안 / 전환기",insight:"당신의 무의식은 지금 중요한 삶의 변화를 처리하고 있습니다. 꿈속의 물은 의식과 무의식의 경계를 상징합니다. 지금의 감정적 혼란은 위기가 아니라 성장의 압력입니다. 흐름을 믿으세요.",keywords:["변화","흐름","재생","깊이"],archetype:"강의 여행자",language:"ko"},{symbol:"비상",emotion:"해방 / 야망",insight:"하늘을 나는 꿈은 한계를 넘어서고 싶은 강렬한 욕망을 드러냅니다. 정신이 오래된 패턴을 초월할 준비가 됐을 때 자주 나타납니다. 당신의 꿈은 환상이 아니라 청사진입니다.",keywords:["자유","시야","상승","가능성"],archetype:"탐구자",language:"ko"},{symbol:"문",emotion:"기대 / 미지의 두려움",insight:"당신의 삶에서 중요한 선택의 순간이 다가오고 있습니다. 닫힌 문은 장벽이 아니라 초대입니다. 문손잡이를 잡는 순간, 당신이 어떤 사람인지가 결정됩니다.",keywords:["선택","기회","용기","시작"],archetype:"문지기",language:"ko"},{symbol:"그림자",emotion:"불안 / 내면의 탐색",insight:"꿈속의 그림자 존재는 적이 아닙니다. 당신이 인정하지 않은 자신의 일부입니다. 융 심리학에서 말하는 그림자 자아입니다. 그것을 마주하는 것은 패배가 아니라 통합이며, 통합은 곧 힘입니다.",keywords:["그림자 자아","통합","숨겨진 진실","직면"],archetype:"그림자",language:"ko"},{symbol:"폭풍",emotion:"압박 / 임박한 변화",insight:"강력한 힘이 내면 깊은 곳에서 쌓이고 있습니다. 폭풍은 혼돈이 아니라 방출을 기다리는 에너지입니다. 당신의 정신은 돌파구를 준비하고 있습니다. 그 속에 서 계세요.",keywords:["해방","돌파","에너지","정화"],archetype:"폭풍의 전령",language:"ko"},{symbol:"거울",emotion:"정체성 / 자기 인식",insight:"거울 속 이미지는 당신이 가장 깊은 곳에서 자신을 어떻게 인식하는지를 보여줍니다. 반영이 낯설었다면, 당신의 자아 개념이 의식보다 빠르게 성장하고 있다는 뜻입니다.",keywords:["정체성","반영","자아상","진실"],archetype:"목격자",language:"ko"},{symbol:"추락",emotion:"통제 상실 / 내려놓음",insight:"추락하는 꿈은 너무 꽉 쥐고 있던 통제를 놓아야 한다는 신호입니다. 실패의 경고가 아니라 내려놓음의 초대입니다. 통제를 멈추면 소중한 것을 잃을까 두렵지만, 그렇지 않습니다.",keywords:["내려놓음","신뢰","해방","믿음"],archetype:"자유 낙하자",language:"ko"},{symbol:"미로",emotion:"혼란 / 내면 여정",insight:"복잡한 내면 여정의 한가운데에 있습니다. 미로는 벌이 아니라 당신의 사고 패턴을 가시화한 구조입니다. 잘못된 길마다 자신이 쌓은 벽에 대해 알게 됩니다. 출구는 항상 당신 안에 있었습니다.",keywords:["복잡성","내면 여정","인내","자기 발견"],archetype:"방랑자",language:"ko"}],X={water:0,ocean:0,sea:0,river:0,rain:0,flood:0,swim:0,fly:1,flying:1,float:1,sky:1,soar:1,wings:1,air:1,door:2,gate:2,room:2,enter:2,portal:2,threshold:2,window:2,dark:3,shadow:3,monster:3,fear:3,ghost:3,creature:3,storm:4,lightning:4,thunder:4,tornado:4,wind:4,hurricane:4,mirror:5,reflect:5,face:5,glass:5,image:5,fall:6,falling:6,drop:6,cliff:6,plunge:6,maze:7,lost:7,wander:7,labyrinth:7,corridor:7,tunnel:7},Z={물:0,바다:0,강:0,비:0,홍수:0,수영:0,파도:0,날:1,나는:1,비상:1,하늘:1,날개:1,떠:1,문:2,방:2,들어:2,문을:2,창문:2,어둠:3,그림자:3,괴물:3,공포:3,귀신:3,무서:3,폭풍:4,번개:4,천둥:4,바람:4,태풍:4,거울:5,반영:5,얼굴:5,모습:5,떨어:6,추락:6,낙하:6,절벽:6,미로:7,길을잃:7,헤매:7,터널:7,복잡:7,운석:4,우주:1,별:1};function V(e,t){const s=e.toLowerCase(),r=t==="ko",n=r?Z:X,o=r?U:Q;let l=Math.floor(Math.random()*o.length);for(const[x,I]of Object.entries(n))if(s.includes(x)){l=I;break}return{...o[l%o.length],language:t}}function ee(e){const t=F(e),s=V(e,t),r=1800+Math.random()*900;return new Promise(n=>setTimeout(()=>n(s),r))}async function te(e){var E,T,j,D,L;const t="AIzaSyByPQKqIdcxj-QZkQXq_xf-1K5DqEYnxG0",s=F(e),r=s==="ko"?"한국어로 응답하세요.":s==="ja"?"Respond in Japanese.":"Respond in English.",n=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${t}`,o=`You are a depth psychology dream analyst. ${r}
Analyze this dream and return ONLY valid JSON, no markdown, no explanation.

Dream: "${e}"

JSON structure:
{
  "symbol": "<core symbol 1-3 words>",
  "emotion": "<emotional current 2-4 words>",
  "insight": "<3-5 sentences, second person, poetic but grounded>",
  "keywords": ["<w1>","<w2>","<w3>","<w4>"],
  "archetype": "<Jungian archetype>",
  "language": "${s}"
}`,l=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:o}]}],generationConfig:{temperature:.85,maxOutputTokens:600}})});if(!l.ok)throw new Error(`Gemini ${l.status}`);const _=(((L=(D=(j=(T=(E=(await l.json()).candidates)==null?void 0:E[0])==null?void 0:T.content)==null?void 0:j.parts)==null?void 0:D[0])==null?void 0:L.text)??"").trim().replace(/^```(?:json)?\n?/,"").replace(/\n?```$/,"");return JSON.parse(_)}async function ne(e){return"AIzaSyByPQKqIdcxj-QZkQXq_xf-1K5DqEYnxG0".length>10?te(e):ee(e)}const N="dreamdecode_journal",M=20;function oe(e,t){const s={id:Date.now().toString(36),date:new Date().toISOString(),dreamText:e,result:t},r=k();return r.unshift(s),r.length>M&&r.splice(M),localStorage.setItem(N,JSON.stringify(r)),s}function k(){try{return JSON.parse(localStorage.getItem(N)??"[]")}catch{return[]}}function ae(e){return new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}G(document.getElementById("star-canvas"));const re=document.getElementById("app");re.innerHTML=`
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
        placeholder="I was flying above a dark ocean. A golden door appeared on the horizon...  (한국어로 입력하셔도 됩니다)"
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
        <button id="save-btn" class="save-btn" type="button">
          ✦ Save to Journal
        </button>
        <button id="share-btn" class="share-btn" type="button">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share on X
        </button>
      </div>
    </div>

    <!-- Dream Journal -->
    <div id="journal-section" class="journal-section">
      <div class="journal-header">
        <span class="journal-title">✦ Dream Journal</span>
        <button id="journal-toggle" class="journal-toggle" type="button">Show</button>
      </div>
      <div id="journal-list" class="journal-list hidden"></div>
    </div>
  </main>

  <div class="ad-banner-wrapper">
    <div class="ad-banner-label">Advertisement</div>
    <div id="ad-banner"></div>
  </div>

  <footer class="site-footer">
    <p>DreamDecode &mdash; GOD Company &mdash; 2026</p>
  </footer>
`;const y=document.getElementById("dream-input"),S=document.getElementById("decode-btn"),ie=document.getElementById("loading"),b=document.getElementById("result-card"),p=document.getElementById("error-msg"),se=document.getElementById("share-btn"),g=document.getElementById("save-btn"),w=document.getElementById("journal-list"),v=document.getElementById("journal-toggle"),le=document.getElementById("res-symbol"),de=document.getElementById("res-archetype"),ce=document.getElementById("res-emotion"),ue=document.getElementById("res-insight"),he=document.getElementById("res-keywords");let c=null,J="",u=!1;function B(e){ie.classList.toggle("active",e),S.disabled=e}function f(e){p.textContent=e,p.classList.add("active")}function ge(){p.textContent="",p.classList.remove("active")}function ye(e){le.textContent=e.symbol,de.textContent=e.archetype,ce.textContent=e.emotion,ue.textContent=e.insight,he.innerHTML=e.keywords.map(t=>`<span class="keyword-tag">${t}</span>`).join(""),b.classList.add("active"),g.textContent="✦ Save to Journal",g.disabled=!1,b.scrollIntoView({behavior:"smooth",block:"nearest"})}function Y(){const e=k();if(e.length===0){w.innerHTML='<p class="journal-empty">No dreams saved yet.</p>';return}w.innerHTML=e.map(t=>`
    <div class="journal-entry" data-id="${t.id}">
      <div class="journal-entry-meta">
        <span class="journal-entry-date">${ae(t.date)}</span>
        <span class="journal-entry-symbol">${t.result.symbol}</span>
      </div>
      <div class="journal-entry-dream">${t.dreamText.slice(0,80)}${t.dreamText.length>80?"…":""}</div>
      <div class="journal-entry-insight">${t.result.insight.slice(0,120)}…</div>
    </div>
  `).join("")}v.addEventListener("click",()=>{u=!u,w.classList.toggle("hidden",!u),v.textContent=u?"Hide":"Show",u&&Y()});g.addEventListener("click",()=>{c&&(oe(J,c),g.textContent="✦ Saved!",g.disabled=!0,u&&Y())});S.addEventListener("click",async()=>{const e=y.value.trim();if(!e){f("Please describe your dream before decoding."),y.focus();return}if(e.length<5){f("Please add a bit more detail."),y.focus();return}ge(),b.classList.remove("active"),B(!0);try{const t=await ne(e);c=t,J=e,ye(t)}catch(t){console.error("[DreamDecode]",t),f("Something went wrong. Please try again.")}finally{B(!1)}});se.addEventListener("click",()=>{if(!c)return;const e=["🔮 My dream was decoded by DreamDecode","",`Symbol: ${c.symbol}`,`Archetype: ${c.archetype}`,"",`"${c.insight.slice(0,160)}..."`,"","#DreamDecode #DreamMeaning #AI","https://wang-jeon.github.io/dreamdecode/"].join(`
`);window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(e)}`,"_blank","noopener,noreferrer,width=600,height=450")});y.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="Enter"&&S.click()});const P=k().length;P>0&&(v.textContent=`Show (${P})`);
