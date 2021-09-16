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
    tag = ""
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