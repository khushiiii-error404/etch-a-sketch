const btn =document.querySelector("button");
const container = document.querySelector("#container");
  for(let i=1;i<256;i++){
      const div=document.createElement("div");
      div.style.border ="1px solid white";
      div.style.width=`${700/16}px`;
      div.style.height=`${700/16}px`;
      div.style.boxSizing ='border-box';
      container.appendChild(div);
}

