const HSL_btn = document.querySelector("#generate-hsl-btn");
const RGB_btn = document.querySelector("#generate-rgb-btn");
const colorCode = document.querySelector("#show-code");
function  generate_hsl_color(){
  const HUE = Math.floor(Math.random() * 359);
  const SATURATION = Math.floor(Math.random() * 100);
  const LIGHTNESS = Math.floor(Math.random() * 100);
  const hsl_color_code = `hsl(${HUE},${SATURATION}%,${LIGHTNESS}%)`; 
  colorCode.innerText = hsl_color_code;
  document.body.style.backgroundColor = hsl_color_code;
}

function  generate_rgb_color(){
  const RED = Math.floor(Math.random() * 255);
  const GREEN = Math.floor(Math.random() * 255);
  const BLUE = Math.floor(Math.random() * 255);
  const rgb_color_code = `rgb(${RED},${GREEN},${BLUE})`;
  colorCode.innerText = rgb_color_code
  document.body.style.backgroundColor = rgb_color_code;
}
HSL_btn.addEventListener("click",generate_hsl_color);
RGB_btn.addEventListener("click",generate_rgb_color);