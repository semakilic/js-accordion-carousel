const carousels = document.querySelectorAll(".carousel");

setTimeout(function(){
    carousels.forEach(carousel => {
        carousel.addEventListener("click", () => {
    
            removeActive();
            carousel.classList.add("active");
        });
    })
},100)


function removeActive(){
    carousels.forEach(carousel => {
        carousel.classList.remove("active");
    })}
