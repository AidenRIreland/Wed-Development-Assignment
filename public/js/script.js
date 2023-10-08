document.addEventListener('DOMContentLoaded',function(){
    let service = document.querySelectorAll('.service');

    service.forEach(service =>{
        let title = service.querySelector('.stitle');
        let description = service.querySelector('.description')
        let arrow = service.querySelector('.arrow');

        title.addEventListener('click', function(){
            if(description.style.display === "none" || !description.style.display){
                description.style.display = "block";
                arrow.style.transform = 'rotate(90deg)';
            }
            else{
                description.style.display ="none";
                arrow.style.transform = 'rotate(0deg)';
            }
        })
    })
});