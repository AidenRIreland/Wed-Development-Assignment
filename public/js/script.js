document.addEventListener('DOMContentLoaded',function(){
    let service = document.querySelectorAll('.service');
    //Select all the divs with service
    service.forEach(service =>{
        let title = service.querySelector('.stitle');
        let description = service.querySelector('.description')
        let arrow = service.querySelector('.arrow');
        //Declare the stuff inside service ima mess with
        title.addEventListener('click', function(){
            //If someone clicks the title *aka the H4 with the arrow, change the div 
            if(description.style.display === "none" || !description.style.display){
                description.style.display = "block";
                arrow.innerHTML = '&#x25BC;';
            }
            else{
                description.style.display ="none";
                arrow.innerHTML = '&#x25BA;';
            }
        })
    })
});