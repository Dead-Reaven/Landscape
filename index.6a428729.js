const e=document.querySelector("swiper-container"),i=document.querySelector("#clients-swiper"),r=[`
.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #dfebd0;
  border: 2px solid #34623f;
  cursor: pointer;
  transition: width 0.3s, border-radius 0.3s;
}

.swiper-pagination-bullet-active {
  width: 38px;
  background-color: #34623f;
  border-radius: 15px;
  transition: width 0.3s, background-color 0.3s, border-radius 0.3s,
    transform 0.3s;
}
`];Object.assign(e,{injectStyles:r,pagination:{clickable:!0},loop:!0}),Object.assign(i,{injectStyles:r,pagination:{clickable:!0}}),e.initialize(),i.initialize();const t=document.querySelectorAll(".tab h4");t.forEach((i,r)=>{i.addEventListener("click",()=>{e.swiper.slideTo(r)})}),e.swiper.on("slideChange",()=>{let i=e.swiper.realIndex,r=document.querySelectorAll(".tab h4");r.forEach((e,r)=>{if(r===i)return e.classList.add("active");e.classList.remove("active")})});
//# sourceMappingURL=index.6a428729.js.map
