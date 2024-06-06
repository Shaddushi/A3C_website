window.onwheel = e => {
    const header = document.getElementById("header");
    if(e.deltaY >= 0){
      header.classList.remove("visible");
      header.classList.add("invisible");
    } else {
      header.classList.add("visible");
      header.classList.remove("invisible");
    }
  }