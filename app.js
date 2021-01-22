function myFunction() {
    var x = document.getElementById("header-nav-bar");
    if (x.className === "header-nav") {
      x.className += "responsive";
    } else {
      x.className = "header-nav";
    }
    const headerNav=document.getElementById("header-nav-bar");
    headerNav.classList.add("headerNavClass")
  }

  const headerText=document.getElementById("hotel-name");
  const spanTags=document.querySelectorAll("span");

  function mouseOver(span){
    const spanElement= document.getElementById(`${span.id}`);
    spanElement.style.color="silver";
  }
  function mouseOut(span){
    const spanElement= document.getElementById(`${span.id}`);
    spanElement.style.color="white";
  }

  
  // const textArea=document.querySelector("#text-Area");
  // const commentsDiv=document.querySelector("#review-comments-div");
  // const button=document.querySelector("#comment-button");
  // button.addEventListener('click',function(){
  //   const h=document.createElement("h");
  //   h.innerText=textArea.value;
  //   commentsDiv.appendChild(h);
  // })

