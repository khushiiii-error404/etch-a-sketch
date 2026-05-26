const btn =document.querySelector("button");
const container = document.querySelector("#container");

  for(let i=0;i<256;i++){
      const div=document.createElement("div");
      let opacity =1;
      div.addEventListener('mouseenter', () => {
      opacity -=0.1;
      div.style.background = randomcolor();
      div.style.opacity = opacity;
      });
      div.style.width=`${700/16}px`;
      div.style.height=`${700/16}px`;
      div.style.boxSizing ='border-box';
      container.appendChild(div);
}
function randomcolor(){
    return `hsl(${Math.random ()* 360}, 70%, 60%)`
}

btn.addEventListener('click',(e)=>{
    container.textContent=""
    let input=prompt("Enter number of grids (Limit : 100)")
    if (input>100 || input<0){
        alert('Please enter a valid number');
    }
    else{
    const size = Math.floor(700/input);
    for(let i=0;i<input * input ;i++){
      const div=document.createElement("div");
      let opacity =1;
      div.addEventListener('mouseenter', () => {
      opacity -=0.1;
      div.style.background = randomcolor();
      div.style.opacity = opacity;
      });
      div.style.width=`${size}px`;
      div.style.height=`${size}px`;
      div.style.boxSizing ='border-box';
      container.appendChild(div);
    }
}});