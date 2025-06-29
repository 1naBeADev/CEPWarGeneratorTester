// Color change and sum other layouts

let cnGetter = document.getElementById("contactChannel");
let mainColor = document.getElementById("mainContainer");



cnGetter.addEventListener("change",function(){
    // console.log(cnGetter.value);  

    switch(cnGetter.value){
        case "Hotline CND": 
        mainColor.style.backgroundColor = "#202020";
        break
        
        case "Sana All CND":
        mainColor.style.backgroundColor = "#434445";  
        break

        case "BOH AM":
        mainColor.style.backgroundColor = "#5b5b5c";  
        break

        case "Email CND":
        mainColor.style.backgroundColor = "#8d8d8f";  
        break

        case "Socmed CND":
        mainColor.style.backgroundColor = "#bbbbbd";  
        break


    }

})

