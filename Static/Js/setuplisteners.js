/** 
 *  Author: jacob miller
 *  Last edited: 10/22/21 (mm/dd/yy)
 */

document.addEventListener('DOMContentLoaded', function() {
    /*
        When the document has been loaded:
        sets up teh listeners or something
    */
    "use strict"
    setUpListeners();
})

function setUpListeners(){
document.getElementById("quit").addEventListener('click', function(){
    quit()
});
document.getElementById("save").addEventListener('click', function(){
    save()
});
document.getElementById("load").addEventListener('click', function(){
    load()
});
document.getElementById("addPlaceButton").addEventListener('click', function(){
    addPlaceWithDropDown()
});
document.getElementById("clearListButton").addEventListener('click', function(){
    clearList()
});
document.getElementById("calFuelAndDisButton").addEventListener('click', function(){
    calFuelAndDis()
});
document.getElementById("color").addEventListener('click', function(){
    changeTheme()
});
}