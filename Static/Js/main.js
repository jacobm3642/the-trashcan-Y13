/** 
 *  Author: jacob miller
 *  Last edited: 8/12/21
 */

places = ["leeston", "Southbridge", "place 3", "place 4"]
listNum = 0
placesInOrder = []


function addPlace() {
    number = document.getElementById("places").value
    document.getElementById("listarea").innerHTML += makeTag(places[number], "https://via.placeholder.com/900x350", listNum)
    placesInOrder.push(places[number])
    console.log("start", number, placesInOrder)
    listNum += 1
};

function makeTag(place, photoLink, number) {
    tag = "<div class=\"row\" id=\"" + number + "\"><div class=\"container place\"><div class=\"row rcorners1\"><div class=\"col-2\"><img src=\"" + photoLink + "\" alt=\"" + place + "\" class=\"imgplace\"></div><div class=\"col-8\"><h6>" + place + "</h6></div><div class=\"col-2\"><div class=\"container\" id=\"xbox\"><span id=\"x\" onclick=\"removeTag(" + number + ")\">X</span></div></div></div></div></div>"
    return tag
};

function removeTag(position) {
    placesInOrder.splice(position, 1, null)
    document.getElementById(position).innerHTML = ""
};

function clearList() {
    placesInOrder = []
    document.getElementById("listarea").innerHTML = ""
};

function quit() {
    window.close()
};

function cleanplacesinorder() {
    placesInOrderFinal = []
    let items = placesInOrder.length
    i = 0
    while (items >= i) {
        if (placesInOrder[i] != null) {
            placesInOrderFinal.push(placesInOrder[i])
        };
        i += 1
    };
    return placesInOrderFinal
}

function calFuelAndDis() {
    cleanedPlacesInOrder = cleanplacesinorder()
};