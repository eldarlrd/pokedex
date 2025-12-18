/*! For license information please see index.18bd8c36.js.LICENSE.txt */
(()=>{"use strict";var e,s,a,t,r={24(e,s,a){a(17);var t=a(864);let r="display",i={hp:"favorite",speed:"electric_bolt",attack:"sports_mma",defense:"shield","special-attack":"auto_fix_high","special-defense":"health_and_safety"},n=["hp","speed","attack","defense","special-attack","special-defense"],o=e=>e.charAt(0).toUpperCase()+e.slice(1);var l=a(672);let c="Invalid data.";var p=a(238);let d=(0,p.vt)(e=>{(0,p.t6)("id",()=>{(0,p.FE)(e.id).isNumeric()}),(0,p.t6)("name",()=>{(0,p.FE)(e.name).isString().isNotBlank()}),(0,p.t6)("height",()=>{(0,p.FE)(e.height).isNumeric()}),(0,p.t6)("weight",()=>{(0,p.FE)(e.weight).isNumeric()}),(0,p.t6)("baseExperience",()=>{(0,p.FE)(e.baseExperience).isNumeric()}),(0,p.t6)("frontDefault",()=>{(0,p.FE)(e.sprites.frontDefault).isString().isNotBlank()}),(0,p.t6)("stats",()=>{(0,p.FE)(e.stats).isArray(),e.stats.forEach(e=>{(0,p.FE)(e.baseStat).isNumeric(),(0,p.FE)(e.stat.name).isString().isNotBlank()})}),(0,p.t6)("types",()=>{(0,p.FE)(e.types).isArray(),e.types.forEach(e=>{(0,p.FE)(e.type.name).isString().isNotBlank()})})}),m=e=>{if(null===e||"object"!=typeof e)return e;if(Array.isArray(e))return e.map(e=>m(e));let s={};return Object.keys(e).forEach(a=>{s[a.replace(/([-_][a-z])/g,e=>e.toUpperCase().replace("-","").replace("_",""))]=m(e[a])}),s},u=async e=>{try{let{data:s}=await l.A.get(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${e}`),a=m(s),t=d(a);if(t.hasErrors())throw console.error(t.getError()),Error(c);return a}catch(e){var s;if(l.A.isAxiosError(e)&&(null==(s=e.response)?void 0:s.status)===404)throw console.error(e),Error("Pokemon not found.");if(e instanceof Error){if(e.message===c)throw e;throw Error("Request failed.")}throw e}},f=null,h=document.getElementById("root");if(h){let e;h.innerHTML=`
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
`,e=()=>{var e;let s=null==(e=(0,t.A)("#search-input").val())?void 0:e.toString().trim();(0,t.A)('#search-form button[type="submit"]').prop("disabled",!s)},(0,t.A)(document).off("input","#search-input").on("input","#search-input",e),(0,t.A)(document).off("submit","#search-form").on("submit","#search-form",async s=>{var a,l,c,p;s.preventDefault();let d=null==(a=(0,t.A)("#search-input").val())?void 0:a.toString();if(!d)return;let m=d.toLowerCase().trim().replace(/[\s_]+/g,"-").replace(/[^\w-]/g,"").replace(/-+/g,"-");if(m&&m===f)return;let h=(0,t.A)('#search-form button[type="submit"]'),v=h.find(".material-icons"),g=v.text();try{let e,s,a,l,d,g;h.prop("disabled",!0),v.text("hourglass_bottom").addClass("is-rotating"),(e=(0,t.A)(`#${r}`)).removeClass("is-active is-error is-success"),e.empty(),f=m;a=(c=await u(m)).stats.reduce((e,s)=>(e[s.stat.name]=s.baseStat,e),{}),l=(0,t.A)(`#${r}`),d=n.map(e=>`
      <li class='stat stat--base stat--${e}'>
        <span class='material-icons stat-icon'>${i[e]}</span>
        <span class='stat-label'>${({hp:"HP",attack:"ATK",defense:"DEF",speed:"SPD","special-attack":"SpA","special-defense":"SpD"})[e]??e}</span>
        <span class='stat-value'>${a[e]??"-"}</span>
      </li>
    `).join(""),g=c.types.map(e=>{let s;return s=e.type.name,`
  <span class='type-chip type-chip--${s}'>${o(s)}</span>
`}).join(""),l.removeClass("is-error").addClass("is-success is-active").html(`
      <figcaption class='display-title'>
        <span class='title-left'>
          <span class='pokemon-name'>${o(c.name).replace(/-m$/i," ♂").replace(/-f$/i," ♀")}</span>
          <span class='pokemon-xp'>
            <span class='material-icons'>military_tech</span>
            <span class='xp-value'>${c.baseExperience}</span>
          </span>
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
    `)}catch(e){e instanceof Error&&(l=e.message,(0,t.A)(`#${r}`).removeClass("is-success").addClass("is-error is-active").html(`
      <div class='display-error'>
        <span class='material-icons'>sentiment_dissatisfied</span>
        <span>${l}</span>
      </div>
    `))}finally{v.removeClass("is-rotating").text(g),e()}}),e()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/pokedex/sw.js",{scope:"/pokedex/"}).catch(e=>{e instanceof Error&&console.error(e)})})}},i={};function n(e){var s=i[e];if(void 0!==s)return s.exports;var a=i[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,n.d=(e,s)=>{for(var a in s)n.o(s,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})},n.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],n.O=(s,a,t,r)=>{if(a){r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,t,r];return}for(var o=1/0,i=0;i<e.length;i++){for(var[a,t,r]=e[i],l=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every(e=>n.O[e](a[c]))?a.splice(c--,1):(l=!1,r<o&&(o=r));if(l){e.splice(i--,1);var p=t();void 0!==p&&(s=p)}}return s},s={410:0},n.O.j=e=>0===s[e],a=(e,a)=>{var t,r,[i,o,l]=a,c=0;if(i.some(e=>0!==s[e])){for(t in o)n.o(o,t)&&(n.m[t]=o[t]);if(l)var p=l(n)}for(e&&e(a);c<i.length;c++)r=i[c],n.o(s,r)&&s[r]&&s[r][0](),s[r]=0;return n.O(p)},(t=self.webpackChunkpokedex=self.webpackChunkpokedex||[]).forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t));var o=n.O(void 0,["354","190"],()=>n(24));o=n.O(o)})();