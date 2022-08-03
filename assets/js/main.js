let funcionarios = document.querySelector (".funcionarios");
let login = document.querySelector (".login");

/*login.addEventListener("click", function(e){
  if (funcionarios.classList.contains("dropdown")){
    funcionarios.classList.remove("dropdown")
  }else {
    funcionarios.classList.add("dropdown")
  }
})*/

login.addEventListener("click", function(e){
   funcionarios.style.display="block";
   funcionarios.style.backgroundColor="black";
   funcionarios.style.color="white";
   funcionarios.style.transform="translateY(15px)";
})

funcionarios.addEventListener("click", function(){
    funcionarios.style.display="none";
})
