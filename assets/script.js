// document.getElementById('resume_btn').addEventListener('click', function() {
//     var url = './assets/resume/AkashPGaneshResume.pdf';
//     var a = document.createElement('a');
//     a.href = url;
//     a.download = 'Akash_P_Ganesh.pdf';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });

var toggle = document.getElementById("toggle-ul")
// var body = document.getElementById("body")
var go_top = document.getElementById("go-top")

const toggleMenu = () => {
    toggle.style.transform = "translateX(50%)";
    document.body.style.overflow = "hidden";
}

const toggleClose = () => {
    toggle.style.transform = "translateX(100%)";
    document.body.style.overflow = "auto";
}

toggle.addEventListener('click',() => {
    toggle.style.transform = "translateX(100%)";
    document.body.style.overflow = "auto";
})

window.addEventListener('scroll',() => {
    go_top.style.display = "flex"
    if(window.scrollY === 0) {
        go_top.style.display = "none"
    }
})

const scrollContainer = document.getElementById('skills');

const scrollLeft_fn = () => {
    scrollContainer.scrollLeft -= 250;
}

const scrollRight = () => {
    scrollContainer.scrollLeft += 250;
}