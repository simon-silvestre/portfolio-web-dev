const buttons = document.querySelector('.project-menu-container').children;
const items = document.querySelector('.projet-container').children;

    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            const target = this.getAttribute("data-target");

            for(let k=0; k<items.length; k++){
                items[k].style.display="none";
                
                if(items[k].getAttribute("data-id") == target){
                    items[k].style.display = "flex";
                }
                if(target == "All"){
                    items[k].style.display = "flex";
                }
            }
        })
    }
    



