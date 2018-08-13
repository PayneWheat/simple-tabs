console.log("simpletabs.js loaded");

let displayType = "block";


let tabsContainer = document.querySelector("#simple-tabs");
let tabs = tabsContainer.querySelectorAll(".tab");

let navBar = document.createElement("nav");


for(i = 0; i < tabs.length; i++) {
    tabs[i].name = tabs[i].getAttribute("data-tab-name");
    let tempNavButton = document.createElement("button");
    let tempText = document.createTextNode(tabs[i].name);
    tempNavButton.appendChild(tempText);
    

    // "open" first tab
    if(i == 0) {
        tabs[i].style.display = displayType;
        tempNavButton.setAttribute("class", "btn btn-primary");
        tempNavButton.setAttribute("data-open-tab", "true");
    }
    else {
        tabs[i].style.display = "none";
        tempNavButton.setAttribute("class", "btn");
    }
    tempNavButton.setAttribute("data-jump-tab", tabs[i].id);
    tempNavButton.addEventListener("click", function(e){
        let jumpTabId = e.target.getAttribute("data-jump-tab");
        //let allTabs = e.target.parentElement.parentElement.querySelectorAll(".tab");
        for(j = 0; j < tabs.length; j++) {
            if(tabs[j].style.display == displayType) {
                // this is the current slide. close it.
                tabs[j].style.display = "none";
                break;
            }
        }
        let jumpTab = tabsContainer.querySelector("#" + jumpTabId).style.display = displayType;
        console.log(navBar.childNodes);
        for(j = 0; j < navBar.childNodes.length; j++) {
            if(navBar.childNodes[j].hasAttribute("data-open-tab")) {
                navBar.childNodes[j].removeAttribute("data-open-tab");
                navBar.childNodes[j].setAttribute("class", "btn");
                break;
            }
        }
        e.target.setAttribute("data-open-tab", "true");
        e.target.setAttribute("class", "btn btn-primary");
    });
    navBar.appendChild(tempNavButton);
}

tabsContainer.insertBefore(navBar, tabsContainer.childNodes[0]);
console.log(tabs);