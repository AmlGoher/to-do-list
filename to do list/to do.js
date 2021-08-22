const button = document.querySelector("button");
const container = document.getElementById("container");
const form = document.querySelector("form");
const input = document.querySelector("input");
const heart = `<span id="heart" class="icon-heart"></span>`;
const smile=` <span class="icon-smile icon"></span>`

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-smile icon") {
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");


      eo.target.parentElement.innerHTML += heart;


   }else if(eo.target.className=="icon-heart"){
      eo.target.classList.add("dn");
      eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");


      eo.target.parentElement.innerHTML += smile;
  
  }else if( eo.target.className=="icon-star icon"){
    eo.target.classList.add("orange");
    
    container.prepend(eo.target.parentElement) ;
  }else if(eo.target.className=="icon-star icon orange"){
    eo.target.classList.remove("orange");
    container.append(eo.target.parentElement) ;
  }
  
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `<div class="task">
    <span class="icon-star icon"></span>
    <p lang="ar" class="task-text">${input.value}</p>
    <div>
      <span class="icon-trash icon"></span>
      <span class="icon-smile icon"></span>
    </div>
          <!-- <span class="icon-heart"></span> -->
     </div>`;
  container.innerHTML += task;
  input.value=""
});
