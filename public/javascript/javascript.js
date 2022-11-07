const openDash =()=>{
    const display = document.querySelector(".dashboard");
    display.classList.toggle("displayOn"); 
}

const openSecond = () =>{
    const display = document.querySelector(".dashboard2");
    display.classList.toggle("dashboard2show"); 
}

const closedashboard2=()=>{
    const display = document.querySelector(".dashboard2");
    display.classList.remove("dashboard2show"); 
}

document.querySelectorAll(".dashboard2Close").forEach(function(element) {
	element.addEventListener('click', function() {
		const display = document.querySelector(".dashboard2");
        display.classList.remove("dashboard2show"); 
	});
});

const dashboard3Close = () =>{
    const display = document.querySelector(".dashboard3");
    display.classList.toggle("display3");
}

const dashboard3Open = () =>{
    const display = document.querySelector(".dashboard3");
    display.classList.add("display3");
}

const offdisplay = document.querySelectorAll(".offfdisplay");
offdisplay.forEach((element)=>{
    element.addEventListener("click",()=>{
        const display = document.querySelector(".dashboard3");
        display.classList.add("display3");
        const display2 = document.querySelector(".dashboard2");
        display2.classList.remove("dashboard2show");
        const display3 = document.querySelector(".dashboard");
        display3.classList.remove("displayOn"); 
    })
})


