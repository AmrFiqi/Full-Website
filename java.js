function tabs(){
    document.querySelectorAll(".tabs_button").forEach(button => {
        button.addEventListener("click",()=>{
           const sideTabs= button.parentElement;
           const tabData = sideTabs.parentElement;
           const tabNum= button.dataset.forTab;
           const active= tabData.querySelector(`.data[data-tab='${tabNum}']`);
           console.log(sideTabs);
           console.log(tabData);
           console.log(tabNum);    
           console.log(active);

           sideTabs.querySelectorAll(".tabs_button").forEach(button =>{
               button.classList.remove("tabs_button-active");
           });
           tabData.querySelectorAll(".data").forEach(tab =>{
               tab.classList.remove("data-active");
           });
           button.classList.add("tabs_button-active");
           active.classList.add("data-active");
        });
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    tabs();
});