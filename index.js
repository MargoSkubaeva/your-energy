const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-DWeE5lQs.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
/* empty css                      */import{i as h,a as w}from"./assets/vendor-DWeE5lQs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();h.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear",maxWidth:"432px",message:"Sorry, something went wrong."});const F=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1"),v={success:{iconUrl:F?"./img/success.svg":"/your-energy/img/success.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},error:{iconUrl:F?"./img/error.svg":"/your-energy/img/error.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040"}},oe="https://your-energy.b.goit.study/api";w.defaults.baseURL=oe;const ne=async e=>{const{data:t}=await w.post("/subscription",{email:e});return t},V={404:"Exercises not found for the given filters.",409:"Filters are required to perform the search.",500:"Something went wrong while fetching exercises. Please try again later."},re={400:"Invalid request. Please check the body.",404:"Exercise not found. Please ensure the exercise ID is correct.",409:"Rating update conflict. The rating already exists with this email.",500:"Something went wrong while updating the rating. Please try again later."},se={400:"Invalid request. Please check the exercise ID format.",404:"Exercise not found with the provided ID.",500:"Something went wrong while fetching the exercise. Please try again later."},ae={404:"Filters not found. Please check the filters configuration.",500:"Something went wrong while fetching filters. Please try again later."},ie={400:"Invalid request. Please check the email format.",404:"Endpoint not found. Please try again later.",409:"You are already subscribed.",500:"Something went wrong on the server. Please try again later."},ce=async e=>{try{const{message:t}=await ne(e);return h.show({...v.success,message:t,timeout:5e3}),t}catch(t){const{status:o}=t,n=ie[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}},k={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn"),exercisesContainer:document.getElementById("exercise-cards-container")},s={modalExercises:document.getElementById("exerciseModal"),modalRating:document.getElementById("ratingModal"),modalTitle:document.getElementById("modalTitle"),modalRatingValue:document.getElementById("modalRating"),modalImage:document.getElementById("modalImage"),modalTarget:document.getElementById("modalTarget"),modalBodyPart:document.getElementById("modalBodyPart"),modalEquipment:document.getElementById("modalEquipment"),modalPopular:document.getElementById("modalPopular"),modalCalories:document.getElementById("modalCalories"),modalDescription:document.getElementById("modalDescription"),stars:document.querySelectorAll(".star"),favoriteButton:document.getElementById("favoriteButton"),ratingButton:document.getElementById("ratingButton"),closeModalBtn:document.getElementById("closeModalBtn")},g={burgerButton:document.querySelector(".js-burger-button"),mobileMenu:document.querySelector(".mobile-menu-js"),backdrop:document.querySelector(".mobile-backdrop-js"),closeButton:document.querySelector(".mobile-menu-close-js"),navLinks:document.querySelectorAll(".nav-links.mobile-menu .nav-link")},P={paginationContainer:document.getElementById("pagination")},d={cardsContainer:document.querySelector(".cards-container"),filterButtons:document.querySelectorAll(".filter-btn"),sectionTitle:document.querySelector(".home-title"),sectionSubTitle:document.querySelector(".current-category-name"),searchInput:document.querySelector(".search")};function le(){const e=window.innerHeight/4;window.scrollY>e?k.scrollToTopBtn.classList.remove("invisible"):k.scrollToTopBtn.classList.add("invisible")}function de(){window.scrollTo({top:0,behavior:"smooth"})}const ue=e=>{const t=e.getAttribute("href");return!t||t==="#"?"":t.split("/").pop()||"index.html"},me=()=>{const e=document.querySelectorAll(".nav-link");let t=window.location.pathname.split("/").pop()||"index.html";e.forEach(o=>{ue(o)===t?o.classList.add("active"):o.classList.remove("active")})},ge=()=>{document.body.style.overflow="hidden"},he=()=>{document.body.style.overflow=""},pe=()=>{g.backdrop.style.visibility="visible",g.backdrop.style.opacity=1,g.mobileMenu.style.transform="translateX(0%)",ge()},fe=e=>{e.target===g.backdrop&&T()},ye=e=>{e.key==="Escape"&&g.mobileMenu.style.transform==="translateX(0%)"&&T()},L=()=>{T()},T=()=>{g.mobileMenu.style.transform="translateX(100%)",setTimeout(()=>{g.backdrop.style.opacity=0,g.backdrop.style.visibility="hidden",he()},300)},ve=async e=>{const{data:t}=await w.get("/exercises",{params:e});return t},we=async(e,t)=>{const{data:o}=await w.patch(`/exercises/${e}/rating`,{...t});return o},Ee=async e=>{const{data:t}=await w.get(`/exercises/${e}`);return t},be=async e=>{try{return await ve(e)}catch(t){const{status:o}=t,n=V[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}},xe=async(e,t)=>{try{const o=await we(e,t);return h.show({...v.success,message:"Your rating has been successfully added"}),o}catch(o){const{status:n}=o,r=re[n]||`Unexpected error (${o.message||"unknown"})`;throw h.show({...v.error,message:r}),{code:n,message:r}}},Le=async e=>{try{return await Ee(e)}catch(t){const{status:o}=t,n=se[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}};function Ce(e,t,o=!0){if(!t||t.length===0){e.innerHTML="";return}const n=t.map(r=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${o?`
            <button class="delete-button js-delete-button" aria-label="Delete workout" data-exercise-id=${r._id}>
              <img src="/img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `:""}
          <button class="start-button" data-exercise-id=${r._id}>Start ➔</button>
        </div>
        <div class="workout-body">
          <span class="workout-icon-running">
            <img
              src="./img/runner.svg"
              width="24"
              height="24"
              alt="Running Icon"
            >
          </span>
          <h3 class="workout-name">${r.name}</h3>
          <p class="workout-stats">
            Burned calories: ${r.burnedCalories} / ${r.time} min
            <br>
            Body part: ${r.bodyPart} <br>  Target: ${r.target}
          </p>
        </div>
      </div>
    </li>
    `).join("");e.innerHTML=n}function J(){s.favoriteButton.innerHTML=`
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`}function W(){s.favoriteButton.innerHTML=`
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function ke(e,t){const o=e.findIndex(n=>n._id===t._id);o===-1?(e.push(t),W()):(e.splice(o,1),J()),localStorage.setItem("favorites",JSON.stringify(e))}function Se(e){const t=e.target.closest(".js-delete-button");if(!t)return;const o=t.dataset.exerciseId,n=localStorage.getItem("favorites"),a=(n?JSON.parse(n):[]).filter(i=>i._id!==o);localStorage.setItem("favorites",JSON.stringify(a)),Q()}function Q(){const e=document.querySelector(".workout-list"),t=document.querySelector(".not-items-message");if(!e||!t)return;let o=[];try{const n=localStorage.getItem("favorites");o=n?JSON.parse(n):[]}catch{o=[]}if(!o.length){e.innerHTML="",t.hidden=!1;return}t.hidden=!0,Ce(e,o),document.querySelectorAll(".js-delete-button").forEach(n=>{n.addEventListener("click",Se)})}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Te(e){s.modalRating.exerciseData=e,s.modalTitle.textContent=C(e.name),s.modalRatingValue.textContent=e.rating,s.modalImage.src=e.gifUrl,s.modalImage.alt=e.name,s.modalTarget.textContent=C(e.target),s.modalBodyPart.textContent=C(e.bodyPart),s.modalEquipment.textContent=C(e.equipment),s.modalPopular.textContent=e.popularity,s.modalCalories.textContent=`${e.burnedCalories}/${e.time} min`,s.modalDescription.textContent=e.description,s.stars.forEach((a,i)=>{i<Math.floor(e.rating)?a.classList.add("filled"):a.classList.remove("filled")});const t=JSON.parse(localStorage.getItem("favorites")||"[]");t.some(a=>a._id===e._id)?W():J();const n=()=>ke(t,e);s.favoriteButton.addEventListener("click",n),s.closeModalBtn.addEventListener("click",_);const r=a=>{a.target===s.modalExercises?_():a.target===s.modalRating&&S()};window.addEventListener("click",r),s.modalExercises._windowClickHandler=r,s.modalExercises._favoriteClickHandler=n,Be(s.modalExercises),s.ratingButton.addEventListener("click",S)}function Be(e){e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10),document.body.style.overflow="hidden"}function S(){s.modalExercises.classList.toggle("hidden"),s.modalExercises.classList.toggle("show"),s.modalRating.classList.toggle("hidden"),s.modalRating.classList.toggle("show")}function _(){s.modalExercises.classList.remove("show"),setTimeout(()=>{s.modalExercises.classList.add("hidden"),document.body.style.overflow=""},300),document.body.style.overflow="",s.closeModalBtn.removeEventListener("click",_),s.favoriteButton.removeEventListener("click",s.modalExercises._favoriteClickHandler),s.ratingButton.removeEventListener("click",S),window.removeEventListener("click",s.modalExercises._windowClickHandler),s.modalTitle.textContent="",s.modalRatingValue.textContent="",s.modalImage.src="",s.modalImage.alt="",s.modalTarget.textContent="",s.modalBodyPart.textContent="",s.modalEquipment.textContent="",s.modalPopular.textContent="",s.modalCalories.textContent="",s.modalDescription.textContent=""}k.exercisesContainer.addEventListener("click",async function(e){const t=e.target.closest(".start-button");if(t){const o=t.dataset.exerciseId;if(o)try{const n=await Le(o);Te(n)}catch(n){console.error("Error fetching exercise:",n)}finally{}}});const p=document.querySelector('[data-modal="rating"]'),f=p==null?void 0:p.querySelector("form"),I=f==null?void 0:f.querySelectorAll('input[name="rating"]'),Ie=f==null?void 0:f.querySelector(".rating-value"),q=p==null?void 0:p.querySelector("[data-modal-close]");I==null||I.forEach(e=>{e.addEventListener("change",()=>{Ie.textContent=e.value+".0"})});f==null||f.addEventListener("submit",qe);async function qe(e){var i;e.preventDefault();const t=e.target,o=+((i=t.querySelector('[name="rating"]:checked'))==null?void 0:i.value)||0,n=t.querySelector('[name="email"]').value.trim(),r=t.querySelector('[name="comment"]').value.trim();if(!o||!n||!r){h.error({title:"Please fiil in all fields"});return}if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)){h.error({title:"Type valid email"});return}try{const l=s.modalRating.exerciseData;if(!l)throw new Error("Exercise data is not available.");const c=l._id,y=await xe(c,{rate:o,email:n,review:r});X()}catch{}finally{}}q==null||q.addEventListener("click",X);function X(){p==null||p.classList.add("hidden"),S()}const Pe="vanilla-app-template",_e="1.0.0",Me="module",$e={dev:"vite",build:"vite build --base=/your-energy/",preview:"vite preview"},Re={glob:"^11.0.0",postcss:"^8.4.41","postcss-sort-media-queries":"^5.2.0",vite:"^5.4.6"},Ae="Alexander Repeta <alexander.repeta@gmail.com>",De="ISC",Fe={axios:"^1.13.4",izitoast:"^1.4.0","lottie-web":"^5.13.0","vite-plugin-full-reload":"^1.2.0","vite-plugin-html-inject":"^1.1.2"},Oe={name:Pe,private:!0,version:_e,type:Me,scripts:$e,devDependencies:Re,author:Ae,license:De,dependencies:Fe},O=`${window.location.origin}${Oe.homepage||""}`,He=document.querySelectorAll('a[href^="/"]');function Ue(){O&&He.forEach(e=>{const t=e.getAttribute("href"),o=`${O}${t}`;e.href=new URL(o)})}const je=async()=>{const{data:e}=await w.get("/quote");return e},G=()=>new Date().toISOString().split("T")[0],ze=async()=>{try{const e=await je(),t=G(),o={...e,date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o}catch(e){const{status:t}=e,o=V[t]||`Unexpected error (${e.message||"unknown"})`;throw{code:t,message:o}}},Ne="modulepreload",Ve=function(e){return"/your-energy/"+e},H={},Je=function(t,o,n){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(o.map(c=>{if(c=Ve(c),c in H)return;H[c]=!0;const u=c.endsWith(".css"),y=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${y}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Ne,u||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((A,x)=>{m.addEventListener("load",A),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return r.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};class K{constructor({path:t=new URL("/your-energy/animations/loader.json",import.meta.url).href,size:o=200,color:n,timeout:r=1e3}={}){this._path=t,this._defaultSize=o,this._defaultColor=n??getComputedStyle(document.documentElement).getPropertyValue("--text-color").trim(),this._defaultTimeout=r??null,this._loadPromise=null,this._instances=new Map}async _loadLottie(){return this._loadPromise||(this._loadPromise=Je(()=>import("./assets/vendor-DWeE5lQs.js").then(t=>t.l),__vite__mapDeps([0,1])).then(t=>t.default)),this._loadPromise}_resolveTarget(t){return typeof t=="string"?document.getElementById(t):t}async show(t,{size:o,color:n,timeout:r}={}){const a=this._resolveTarget(t);if(!a)throw new Error("Target not found");if(this._instances.has(a))return;const i=o??this._defaultSize,l=n??this._defaultColor,c=r??this._defaultTimeout;getComputedStyle(a).position==="static"&&(a.style.position="relative");const y=document.createElement("div");y.classList="loader-wrapper",y.style.cssText=`
			width: ${i}px;
			height: ${i}px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			pointer-events: none;
			z-index: 10;
		`;const m=document.createElement("div");m.style.cssText="width: 100%; height: 100%;",y.appendChild(m),a.appendChild(y);const x=(await this._loadLottie()).loadAnimation({container:m,renderer:"svg",loop:!0,autoplay:!0,path:this._path});x.addEventListener("DOMLoaded",()=>{m.querySelectorAll("path").forEach(te=>te.setAttribute("fill",l))}),this._instances.set(a,{wrapper:y,animation:x,timeout:c}),c&&await new Promise(D=>setTimeout(D,c))}async hide(t){const o=this._resolveTarget(t);if(!o||!this._instances.has(o))return;const{wrapper:n,animation:r,timeout:a}=this._instances.get(o);r.destroy(),n.remove(),this._instances.delete(o)}}const U=new K({size:200,color:"#f4f4f4"});async function We(){const e=document.querySelectorAll(".quote-day-card-text"),t=document.querySelectorAll(".quote-day-card-author");if(!e.length||!t.length)return;const o=Array.from(e).map(n=>n.parentElement).filter(Boolean);try{await Promise.all(o.map(c=>U.show(c)));const n=G(),r=localStorage.getItem("quoteOfTheDay"),a=r?JSON.parse(r):null;let i,l;if(a&&a.date===n)i=a.author,l=a.quote;else{const c=await ze();i=c.author,l=c.quote}e.forEach(c=>c.textContent=l||""),t.forEach(c=>c.textContent=i||"")}catch(n){console.error("renderQuoteOfTheDay error:",n)}finally{await Promise.all(o.map(n=>U.hide(n)))}}const Qe=()=>window.innerWidth<768?{categoryLimit:9,exerciseLimit:8}:{categoryLimit:12,exerciseLimit:10},{categoryLimit:it,exerciseLimit:B}=Qe(),Xe=async e=>{const{data:t}=await w.get("/filters",{params:e});return t},Ge=async e=>{try{return await Xe(e)}catch(t){const{status:o}=t,n=ae[o]||`Unexpected error (${t.message||"unknown"})`;throw h.show({...v.error,message:n}),{code:o,message:n}}},Y=({totalPages:e,onPageChange:t,query:o})=>{const n=o.page;if(P.paginationContainer.innerHTML="",e<=1)return;const r=(l,c)=>{const u=document.createElement("button");return u.textContent=c,u.classList.add("page-button"),c===n?u.classList.add("active"):u.addEventListener("click",()=>t(c)),u},a=Math.max(1,n-2),i=Math.min(e,n+2);for(let l=a;l<=i;l+=1)P.paginationContainer.appendChild(r(o,l))},Z=()=>{P.paginationContainer.innerHTML=""},E=e=>e.charAt(0).toUpperCase()+e.slice(1),ee=e=>e.replace(/\s+/g,""),Ke=e=>`${Math.floor(e)}.0`;async function M(e,t){d.cardsContainer.innerHTML="",Z();try{t&&(e.keyword=t),await b.show(d.cardsContainer.id);const o=await be(e);await b.hide(d.cardsContainer.id);const{page:n,perPage:r,totalPages:a,results:i}=o;if(i.length<=0){d.cardsContainer.innerHTML='<p class="not-items-message">No exercises found for this filter.</p>';return}Ye(i),Y({totalPages:a,query:e,onPageChange:c=>{const u={...e,page:c};M(u)}})}catch{d.cardsContainer.innerHTML=""}finally{await b.hide(d.cardsContainer.id)}}const Ye=async e=>{R(!0);const t=e.map(Ze).join("");d.cardsContainer.innerHTML=t};function Ze(e){return`
    <li class="workout-card">
      <div class="workout-header">
        <span class="workout-badge">WORKOUT</span>

        <div class="rating-block">
          <span class="workout-badge-rating">${Ke(e.rating)}</span>
          <img class="star-icon"
              src="./img/star.svg"
              width="18"
              height="18"
              alt="Star Icon"
          >
        </div>

        <button class="start-button" type="button" data-exercise-id="${e._id}">
          Start <img class="start-icon"
              src="./img/arrow-right.svg"
              width="16"
              height="16"
              alt="Arrow right Icon"
            >
        </button>
      </div>

      <div class="workout-body">
        <img class="running-icon"
              src="./img/runner.svg"
              width="24"
              height="24"
              alt="Running Man Icon"
        >

        <h3 class="workout-name">${E(e.name)}</h3>
      </div>

      <div class="workout-stats">
        <div class="workout-stats-item stats-calories">
        <p class="workout-stats-text">Burned calories:</p>
          <span class="workout-stats-value">${e.burnedCalories} / ${e.time} min</span>
        </div>
        <div class="workout-stats-item stats-part">
        <p class="workout-stats-text">Body part:</p><span class="workout-stats-value">${E(e.bodyPart)}</span></div>
        <div class="workout-stats-item stats-target"><p class="workout-stats-text">Target:</p><span class="workout-stats-value">${E(e.target)}</span></div>
      </div>
    </li>
  `}const j=e=>{e.preventDefault();const t=e.target.elements.search.value.trim().toLowerCase();if(!t)return;const o=document.querySelector(".filter-btn.active").textContent,n={[ee(o).toLowerCase()]:d.sectionSubTitle.textContent.toLowerCase(),page:1,limit:B};M(n,t),e.target.reset()},b=new K({size:200}),$=async e=>{d.cardsContainer.innerHTML="",Z();try{await b.show(d.cardsContainer.id);const t=await Ge(e);await b.hide(d.cardsContainer.id);const{totalPages:o,results:n}=t;if(!n||n.length===0){d.cardsContainer.innerHTML='<p class="not-items-message">No categories found for this filter.</p>';return}et(n),Y({totalPages:o,query:e,onPageChange:r=>{$({...e,page:r})}})}catch{d.cardsContainer.innerHTML=""}},et=e=>{d.sectionTitle.textContent="Exercises",d.sectionSubTitle.textContent="",R(!1);const t=e.map(ot).join("");d.cardsContainer.innerHTML=t,tt()},tt=()=>{document.querySelectorAll(".category-card").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.name,o=(n=e.dataset.type)==null?void 0:n.toLowerCase().trim();nt(t,o)})})},z=document.querySelector(".filters");z&&z.addEventListener("click",async e=>{const t=e.target.closest("button");if(!t||t.classList.contains("active"))return;const o=t.dataset.type;console.log("Вибрано фільтр:",o),document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),d.sectionTitle.textContent="Exercises",d.sectionSubTitle.textContent="",$({filter:o,page:1,limit:B})});const ot=e=>`
    <li
      class="category-card"
      data-name="${e.name}"
      data-type="${e.filter}"
      data-id="${e.id}"
      style="
        background-image:
          linear-gradient(0deg, rgba(17,17,17,0.50) 0%, rgba(17,17,17,0.50) 100%),
          url('${e.imgURL}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      "
    >
      <div class="category-card-text">
        <h3 class="category-card-title">${E(e.name)}</h3>
        <p class="category-card-sub">${e.filter}</p>
      </div>
    </li>
  `,nt=(e,t)=>{R(!0),d.searchInputEl&&(d.searchInputEl.value=""),d.sectionTitle.textContent="Exercises /",d.sectionSubTitle.textContent=E(e);const o={[ee(t)]:e,page:1,limit:B};M(o)},R=e=>{const t=d.searchForm;t&&(t.style.display=e?"block":"none",t.removeEventListener("submit",j),e&&t.addEventListener("submit",j))};$({filter:"Muscles",page:1,limit:B});function N(e){var n;const t=document.querySelector("#home-view"),o=document.querySelector("#favorites-view");!t||!o||(e==="home"&&(t.hidden=!1,o.hidden=!0),e==="favorites"&&(t.hidden=!0,o.hidden=!1,Q()),document.querySelectorAll("[data-page]").forEach(r=>r.classList.remove("active")),(n=document.querySelector(`[data-page="${e}"]`))==null||n.classList.add("active"))}function rt(){Ue(),document.addEventListener("DOMContentLoaded",()=>{We(),me(),N("home")}),document.addEventListener("click",t=>{const o=t.target.closest("[data-page]");o&&(t.preventDefault(),N(o.dataset.page),L==null||L())});const e=document.querySelector("#subscribe-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();try{const o=e.email.value;await ce(o),e.reset()}catch(o){console.log(o)}}),g.burgerButton.addEventListener("click",pe),g.closeButton.addEventListener("click",T),g.backdrop.addEventListener("click",fe),document.addEventListener("keydown",ye),g.navLinks.forEach(t=>t.addEventListener("click",L)),window.addEventListener("scroll",le),k.scrollToTopBtn.addEventListener("click",de)}rt();
//# sourceMappingURL=index.js.map
