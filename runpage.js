function RUN(){
    target = document.getElementById("p");
    var code = localStorage.getItem("main");
    eval(code);
}
function MoveEditor(){
    location.href="index.html";
}
