const e=e=>{let t=e.querySelector("#card-content");t.classList.add("animate-open"),t.classList.remove("animate-close")},t=e=>{let t=e.querySelector("#card-content");t.classList.add("animate-close"),t.classList.remove("animate-open")},r=document.querySelectorAll(".service-card");let c=r[3];e(c),r.forEach((r,n)=>{r.addEventListener("click",()=>{if(r!==c){if(t(c),window.innerWidth>=1280){let e=r.parentNode;e.insertBefore(r,c),e.insertBefore(c,r)}e(c=r)}})}),document.querySelector("#burger-button").addEventListener("click",toggleBurger);
//# sourceMappingURL=index.733bb09c.js.map
