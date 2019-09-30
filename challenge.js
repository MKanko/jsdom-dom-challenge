document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("submit");
    button.addEventListener("click", displayCom);
    heart.addEventListener("click", displayLike);
    plus.addEventListener("click", incrementCount);
    setInterval(incrementCount, 1000); 
  });

  const plus = document.getElementById("plus")

const displayCom = (event) => {
    event.preventDefault(); 

    const comm = document.getElementById("comment-input");
    const divList = document.querySelector("div#list");

    const p = document.createElement("p");

    divList.appendChild(p);

    p.innerText = comm.value;
    comm.value = "" 
}

  let seconds = 0;
  const counter = document.getElementById("counter");

  const incrementCount = () => {
      seconds += 1;
      counter.innerText = seconds;
  }

  const heart = document.getElementById("heart");
  
  const displayLike = () => {
    const ul = document.querySelector("ul");
    let li = ul.children.namedItem(seconds)
    if (li) {
      li.dataset.count = parseInt(li.dataset.count, 10) + 1
      li.innerText = `${seconds} was liked ${li.dataset.count} times.`
    } else {
      li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = `${seconds} was liked 1 time.`
      li.id = `${seconds}`
      li.dataset.count = 1
    }
    

  }


  //button.setAttribute("data-description", "taskText.value")
   