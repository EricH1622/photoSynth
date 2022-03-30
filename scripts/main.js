document.addEventListener("DOMContentLoaded", function() {

    let change = document.querySelector("#icon");

   change.addEventListener('click' ,function () {
       let item = document.querySelector("#icon");

       if(this.innerText == 'favorite'){
            item.innerText = "favorite_border";

        }else{   
            item.innerText = "favorite";

        }

    })
});

document.addEventListener("DOMContentLoaded", function() {

    let change = document.querySelector("#icon2");

   change.addEventListener('click' ,function () {
       let item = document.querySelector("#icon2");

       if(this.innerText == 'favorite'){
            item.innerText = "favorite_border";

        }else{   
            item.innerText = "favorite";

        }

    })
});