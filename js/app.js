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
    
    document.querySelector('.voir-project-1').addEventListener("click", function(){
        document.querySelector('#project-1').style.display = 'flex';
        document.querySelector('body').style.overflow = "hidden";
    });

    document.querySelector('#project-1-close').addEventListener("click", function(){
        document.querySelector('#project-1').style.display = 'none';
        document.querySelector('body').style.overflow = "unset";
    });


    document.querySelector('.voir-project-2').addEventListener("click", function(){
        document.querySelector('#project-2').style.display = 'flex';
        document.querySelector('body').style.overflow = "hidden";
    });

    document.querySelector('#project-2-close').addEventListener("click", function(){
        document.querySelector('#project-2').style.display = 'none';
        document.querySelector('body').style.overflow = "unset";
    });


    document.querySelector('.voir-project-3').addEventListener("click", function(){
        document.querySelector('#project-3').style.display = 'flex';
        document.querySelector('body').style.overflow = "hidden";
    });

    document.querySelector('#project-3-close').addEventListener("click", function(){
        document.querySelector('#project-3').style.display = 'none';
        document.querySelector('body').style.overflow = "unset";
    });


    document.querySelector('.voir-project-4').addEventListener("click", function(){
        document.querySelector('#project-4').style.display = 'flex';
        document.querySelector('body').style.overflow = "hidden";
    });

    document.querySelector('#project-4-close').addEventListener("click", function(){
        document.querySelector('#project-4').style.display = 'none';
        document.querySelector('body').style.overflow = "unset";
    });
    

