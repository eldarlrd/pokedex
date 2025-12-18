/*! For license information please see index.614ddf2a.js.LICENSE.txt */
(()=>{"use strict";var e,s,t,a,r={24(e,s,t){t(17);var a=t(864);let r="display",i={hp:"favorite",speed:"electric_bolt",attack:"sports_mma",defense:"shield","special-attack":"auto_fix_high","special-defense":"health_and_safety"},n=["hp","speed","attack","defense","special-attack","special-defense"],o=e=>e.charAt(0).toUpperCase()+e.slice(1);var l=t(672);let c="Invalid data.";var p=t(238);let d=(0,p.vt)(e=>{(0,p.t6)("id",()=>{(0,p.FE)(e.id).isNumeric()}),(0,p.t6)("name",()=>{(0,p.FE)(e.name).isString().isNotBlank()}),(0,p.t6)("height",()=>{(0,p.FE)(e.height).isNumeric()}),(0,p.t6)("weight",()=>{(0,p.FE)(e.weight).isNumeric()}),(0,p.t6)("frontDefault",()=>{(0,p.FE)(e.sprites.frontDefault).isString().isNotBlank()}),(0,p.t6)("stats",()=>{(0,p.FE)(e.stats).isArray(),e.stats.forEach(e=>{(0,p.FE)(e.baseStat).isNumeric(),(0,p.FE)(e.stat.name).isString().isNotBlank()})}),(0,p.t6)("types",()=>{(0,p.FE)(e.types).isArray(),e.types.forEach(e=>{(0,p.FE)(e.type.name).isString().isNotBlank()})})}),f=e=>{if(null===e||"object"!=typeof e)return e;if(Array.isArray(e))return e.map(e=>f(e));let s={};return Object.keys(e).forEach(t=>{s[t.replace(/([-_][a-z])/g,e=>e.toUpperCase().replace("-","").replace("_",""))]=f(e[t])}),s},u=async e=>{try{let{data:s}=await l.A.get(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${e}`),t=f(s),a=d(t);if(a.hasErrors())throw console.error(a.getError()),Error(c);return t}catch(e){var s;if(l.A.isAxiosError(e)&&(null==(s=e.response)?void 0:s.status)===404)throw console.error(e),Error("Pokemon not found.");if(e instanceof Error){if(e.message===c)throw e;throw Error("Request failed.")}throw e}},m=null,h=document.getElementById("root");if(h){let e;h.innerHTML=`
  <section class='section is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center'>
    
  <header class='is-size-4'>
    <span id='pokeball' class='material-icons'>catching_pokemon</span>
    <span>Pok\xe9dex</span>
  </header>


    <main class='box'>
      
  <figure id='${r}' aria-live='polite' aria-atomic='true'></figure>

      
  <form id='search-form'>
    <input id='search-input' class='input has-background-light has-text-dark is-dark' type='text' maxLength='64' />
    <button class='button is-info is-dark is-inverted' type='submit' autocapitalize='words'>
      <span class='material-icons'>search</span>
    </button>
  </form>

    </main>

    
  <footer class='is-size-5'>
    \xa9 2025
    <a
      title='Source'
      target='_blank'
      type='text/html'
      rel='author external noreferrer'
      href='https://github.com/eldarlrd/pokedex'>
      <span class='material-icons'>fork_right</span>eldarlrd
    </a>
  </footer>

  </section>
`,e=()=>{var e;let s=null==(e=(0,a.A)("#search-input").val())?void 0:e.toString().trim();(0,a.A)('#search-form button[type="submit"]').prop("disabled",!s)},(0,a.A)(document).off("input","#search-input").on("input","#search-input",e),(0,a.A)(document).off("submit","#search-form").on("submit","#search-form",async s=>{var t,l,c,p;s.preventDefault();let d=null==(t=(0,a.A)("#search-input").val())?void 0:t.toString();if(!d)return;let f=d.toLowerCase().trim().replace(/[\s_]+/g,"-").replace(/[^\w-]/g,"").replace(/-+/g,"-");if(f&&f===m)return;let h=(0,a.A)('#search-form button[type="submit"]'),v=h.find(".material-icons"),g=v.text();try{let e,s,t,l,d,g;h.prop("disabled",!0),v.text("hourglass_bottom").addClass("is-rotating"),(e=(0,a.A)(`#${r}`)).removeClass("is-active is-error is-success"),e.empty(),m=f;t=(c=await u(f)).stats.reduce((e,s)=>(e[s.stat.name]=s.baseStat,e),{}),l=(0,a.A)(`#${r}`),d=n.map(e=>`
      <li class='stat stat--base stat--${e}'>
        <span class='material-icons stat-icon'>${i[e]}</span>
        <span class='stat-label'>${({hp:"HP",attack:"ATK",defense:"DEF",speed:"SPD","special-attack":"SpA","special-defense":"SpD"})[e]??e}</span>
        <span class='stat-value'>${t[e]??"-"}</span>
      </li>
    `).join(""),g=c.types.map(e=>{let s;return s=e.type.name,`
  <span class='type-chip type-chip--${s}'>${o(s)}</span>
`}).join(""),l.removeClass("is-error").addClass("is-success is-active").html(`
      <figcaption class='display-title'>
        <span class='title-left'>
          <span class='pokemon-name'>${o(c.name).replace(/-m$/i," ♂").replace(/-f$/i," ♀")}</span>
        </span>
        <span class='pokemon-id'>#${String(c.id).padStart(4,"0")}</span>
      </figcaption>

      <div class='display-content'>
        <div class='sprite-wrap'>
          <img
            class='sprite'
            loading='eager'
            decoding='async'
            alt='${o(c.name)} front sprite'
            src='${c.sprites.frontDefault}'
          />
          <div class='types'>${g}</div>
        </div>

        <ul class='stats'>
          ${d}
        </ul>
      </div>

      <div class='display-footer'>
        <div class='meta meta--size'>
          <span class='material-icons'>straighten</span>
          <span class='meta-value'>${(s=Math.round(c.height/10*39.4),`${~~(s/12)}'${s%12}"`)}</span>
        </div>
        <div class='meta meta--weight'>
          <span class='material-icons'>fitness_center</span>
          <span class='meta-value'>${(p=c.weight,`${(p/10*2.2).toFixed(1)} lbs`)}</span>
        </div>
      </div>
    `)}catch(e){e instanceof Error&&(l=e.message,(0,a.A)(`#${r}`).removeClass("is-success").addClass("is-error is-active").html(`
      <div class='display-error'>
        <span class='material-icons'>sentiment_dissatisfied</span>
        <span>${l}</span>
      </div>
    `))}finally{v.removeClass("is-rotating").text(g),e()}}),e()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/pokedex/sw.js",{scope:"/pokedex/"}).catch(e=>{e instanceof Error&&console.error(e)})})}},i={};function n(e){var s=i[e];if(void 0!==s)return s.exports;var t=i[e]={exports:{}};return r[e](t,t.exports,n),t.exports}n.m=r,n.d=(e,s)=>{for(var t in s)n.o(s,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},n.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],n.O=(s,t,a,r)=>{if(t){r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,a,r];return}for(var o=1/0,i=0;i<e.length;i++){for(var[t,a,r]=e[i],l=!0,c=0;c<t.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every(e=>n.O[e](t[c]))?t.splice(c--,1):(l=!1,r<o&&(o=r));if(l){e.splice(i--,1);var p=a();void 0!==p&&(s=p)}}return s},s={410:0},n.O.j=e=>0===s[e],t=(e,t)=>{var a,r,[i,o,l]=t,c=0;if(i.some(e=>0!==s[e])){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var p=l(n)}for(e&&e(t);c<i.length;c++)r=i[c],n.o(s,r)&&s[r]&&s[r][0](),s[r]=0;return n.O(p)},(a=self.webpackChunkpokedex=self.webpackChunkpokedex||[]).forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a));var o=n.O(void 0,["354","190"],()=>n(24));o=n.O(o)})();