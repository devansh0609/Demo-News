function clckFull(a){
    document.getElementById(`n${a}`).style.height = "auto";
    document.getElementById(`f${a}`).style.visibility = "hidden";
    document.getElementById(`r${a}`).style.visibility = "visible"
}
function clckLess(a){
    document.getElementById(`n${a}`).style.height = "500px";
    document.getElementById(`f${a}`).style.visibility = "visible";
    document.getElementById(`r${a}`).style.visibility = "hidden";
}