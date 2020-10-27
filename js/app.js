    const buttons = document.querySelector('.project-menu-container').children;
    const items   = document.querySelector('.projet-container').children;

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

    let projet1 = document.querySelector('#project-1');
    let projet2 = document.querySelector('#project-2');
    let projet3 = document.querySelector('#project-3');
    let projet4 = document.querySelector('#project-4');
    let projet5 = document.querySelector('#project-5');
    let projet6 = document.querySelector('#project-6');
    let projet7 = document.querySelector('#project-7');
    let body    = document.querySelector('body');
    
    document.querySelector('.voir-project-1').addEventListener("click", function(){
        afficherProjet(projet1);
    });

    document.querySelector('#project-1-close').addEventListener("click", function(){
        fermerProjet(projet1);
    });

    document.querySelector('.voir-project-2').addEventListener("click", function(){
        afficherProjet(projet2);
    });

    document.querySelector('#project-2-close').addEventListener("click", function(){
        fermerProjet(projet2);
    });

    document.querySelector('.voir-project-3').addEventListener("click", function(){
        afficherProjet(projet3);
    });

    document.querySelector('#project-3-close').addEventListener("click", function(){
        fermerProjet(projet3);
    });

    document.querySelector('.voir-project-4').addEventListener("click", function(){
        afficherProjet(projet4);
    });

    document.querySelector('#project-4-close').addEventListener("click", function(){
        fermerProjet(projet4);
    });

    document.querySelector('.voir-project-5').addEventListener("click", function(){
        afficherProjet(projet5);
    });

    document.querySelector('#project-5-close').addEventListener("click", function(){
        fermerProjet(projet5);
    });

    document.querySelector('.voir-project-6').addEventListener("click", function(){
        afficherProjet(projet6);
    });

    document.querySelector('#project-6-close').addEventListener("click", function(){
        fermerProjet(projet6);
    });

    document.querySelector('.voir-project-7').addEventListener("click", function(){
        afficherProjet(projet7);
    });

    document.querySelector('#project-7-close').addEventListener("click", function(){
        fermerProjet(projet7);
    });
    
    function afficherProjet(projet) 
    {
        projet.style.display = 'flex';
        body.style.overflow = "hidden";
    }

    function fermerProjet(projet)
    {
        projet.style.display = 'none';
        body.style.overflow = "unset";
    }
    

