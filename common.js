function Likes(btnId,color,LikesCounts) {
    document.getElementById(btnId).addEventListener("click",function () {
       
       const Likes= document.getElementById(color);
       Likes.style.color="red"
     const likesCount=document.getElementById(LikesCounts);
      const countAccess=likesCount.innerText;
       const count=parseInt(countAccess);
       const total=count+1;
       likesCount.innerText=total
    })
}


function post() {
   document.getElementById(btnTd).addEventListener("click",function () {
    let inputFile = document.getElementById(fileId);
    inputFile.onchange= function () {
        profilePic.src = URL.createObjectURL(inputFile.files[0])
    }
   })
}

post()
