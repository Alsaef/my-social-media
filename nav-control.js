const navClicks= document.getElementsByClassName("nav-click");

for (const navClick of navClicks) {
    navClick.addEventListener("click",function () {
        location.href = "setting.html";
    })
}

document.getElementById("nav-click-profile").addEventListener("click",function () {
    location.href = "profile.html";
})