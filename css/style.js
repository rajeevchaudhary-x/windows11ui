var store;
function sta(){
 store = document.getElementById("star");
console.log("Clicked");
event.stopPropagation();
if(store.style.bottom == "44px"){
    store.style.bottom = "-553px";
}
else{
    store.style.bottom =" 44px";
}
}

function wifi(){
    var z = document.getElementById("ra");
    event.stopPropagation();
    if(z.style.bottom == "0px"){
        z.style.bottom = "-553px";
    }
    else{
        z.style.bottom =" 0px";
    }

}
function reload() {
    window .location.reload();
}

// document.getElementById("cv").addEventListener("click",function(){
//     console.log("Clicked");
//     var m = document.getElementById("star");
//     if(m.style.bottom = "44px"){
//      m.style.bottom = "-553px";
//     }
// });

function rat(){
console.log("body clicled")
var t = document.getElementById('star');
if(t.style.bottom == "44px"){
    t.style.bottom = "-553px";
}


}
function cat(){
    var oo = document.getElementById('ra');
    event.stopPropagation();
    if(oo.style.bottom == "0px"){
        oo.style.bottom = "-553px";
    }
}



