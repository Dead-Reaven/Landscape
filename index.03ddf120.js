document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".pagination div");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(e=>{e.classList.remove("active-bullet")}),this.classList.add("active-bullet")})}),document.querySelector("#burger-button").addEventListener("click",()=>{let e=document.querySelector("#menu");e.style.display="flex"===e.style.display?"none":"flex"});let t=e=>{let t=e.querySelector("#card-content");t.classList.toggle("animate-open"),t.classList.toggle("animate-close")},l=document.querySelectorAll(".service-card");console.log(l),l.forEach(e=>{e.addEventListener("mouseenter",()=>t(e)),e.addEventListener("mouseleave",()=>t(e)),e.addEventListener("click",()=>t(e))})});
//# sourceMappingURL=index.03ddf120.js.map
