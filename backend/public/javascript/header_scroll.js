/* fait disparaitre le header lors que scrolldown et réapparaitre lors du scrollup */

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


  const messageEle = document.getElementById('comment');
  const counterEle = document.getElementById('current');
  
  messageEle.addEventListener('input', function (e) {
      const target = e.target;
  
      // Get the `maxlength` attribute
      const maxLength = target.getAttribute('maxlength');
  
      // Count the current number of characters
      const currentLength = target.value.length;
  
      counterEle.innerHTML = `${currentLength}`;
  });