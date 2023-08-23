const i=document.querySelector("swiper-container"),r=document.querySelector("#clients-swiper"),o=[`
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
`];Object.assign(i,{injectStyles:o,pagination:{clickable:!0},loop:!0}),Object.assign(r,{injectStyles:o,pagination:{clickable:!0}}),i.initialize(),r.initialize();
//# sourceMappingURL=index.379015b8.js.map
