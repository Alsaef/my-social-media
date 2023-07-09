const btnSystem=()=>{
   const show=document.getElementById("show")
    show.classList.remove("d-none")
   
}

const click=document.getElementById("clickbtn").addEventListener("click",function () {
   
    const Input=document.getElementById("searchId")
    const inputValue=Input.value;
    Input.value="";
    if (inputValue==="mamun"|| inputValue==="Abdulla Al Mamun") {
        window.location.href = "https://www.facebook.com/profile.php?id=100017012255471"
    }
    else if(inputValue==="ratul"){
        window.location.href = "profile.html"
    }
})