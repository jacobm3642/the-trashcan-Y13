/** 
 *  Author: jacob miller
 *  Last edited: 10/21/21 (mm/dd/yy)
 */

places = ["Alexandra", "Blenheim", "Christchurch", "Collingwood", "Cromwell", "Dunedin", "Franz Josef", "Geraldine", "Gore", "Greymouth", "Haast", "Invercargill", "Kaikoura", "Lake Tekapo", "Milford Sound", "Mount Cook", "Murchison", "Nelson", "Oamaru", "Picton", "Queenstown", "Te Anau", "Timaru", "Twizel", "Wanaka", "Westport"]
listNum = 1
placesInOrder = []
const distances= [
    [0,786,755,964,31,190,373,315,136,661,231,202,657,227,370,242,734,865,223,791,93,249,307,169,86,761],
    [786,0,308,251,733,670,486,446,821,324,643,887,129,534,1081,639,153,116,555,28,794,960,471,592,745,254],
    [755,308,0,509,410,362,395,138,513,258,535,579,183,226,773,331,292,424,247,336,486,652,163,284,424,333],
    [964,251,509,0,939,871,582,697,1022,384,720,1088,380,785,1232,840,219,135,756,245,961,1117,672,843,839,320],
    [31,733,410,939,0,221,342,273,167,526,200,233,607,196,336,201,693,845,228,761,62,217,268,138,55,639],
    [190,670,362,871,221,0,563,232,151,551,421,217,545,3030,411,331,654,786,115,698,283,290,199,261,276,695],
    [373,486,395,582,342,563,0,481,509,176,142,575,550,485,678,498,340,469,506,531,404,560,493,427,287,277],
    [315,446,138,697,273,232,481,0,387,329,431,449,321,88,635,187,430,562,123,474,346,516,35,146,286,432],
    [136,821,513,1022,167,151,509,387,0,704,367,66,696,363,260,378,842,937,266,849,169,139,350,316,222,804],
    [661,324,258,384,526,551,176,329,704,0,316,769,338,417,860,510,167,292,443,352,583,739,352,475,469,101],
    [231,643,535,720,200,421,142,431,367,316,0,433,710,343,539,356,503,609,376,671,262,418,418,285,145,437],
    [202,887,579,1088,233,217,575,449,66,769,433,0,762,429,278,444,871,1003,332,915,187,152,416,371,285,869],
    [657,129,183,380,607,545,550,321,696,338,710,762,0,409,956,514,299,245,430,157,669,835,346,467,607,340],
    [227,534,226,785,196,3030,485,88,363,417,343,429,409,0,532,99,518,650,188,562,258,428,104,58,198,559],
    [370,1081,773,1232,336,411,678,635,260,860,539,278,956,532,0,550,1029,1146,526,1108,291,121,610,474,394,951],
    [242,639,331,840,201,331,498,187,378,510,356,444,514,99,550,0,623,755,216,667,263,429,211,63,211,664],
    [734,153,292,219,693,654,340,430,842,167,503,871,299,518,1029,623,0,129,539,191,775,944,455,576,715,101],
    [865,116,424,135,845,786,469,562,937,292,609,1003,245,650,1146,755,129,0,671,110,693,1025,587,708,587,226],
    [223,555,247,756,228,115,506,123,266,443,376,332,430,188,526,216,539,671,0,583,319,404,84,146,231,580],
    [791,28,336,245,761,698,531,474,849,352,671,915,157,562,1108,667,191,110,583,0,822,988,499,620,733,288],
    [93,794,486,961,62,283,404,346,169,583,262,187,669,258,291,263,775,693,319,822,0,170,335,200,117,664],
    [249,960,652,1117,217,290,560,516,139,739,418,152,835,428,121,429,944,1025,404,988,170,0,489,370,273,830],
    [307,471,163,672,268,199,493,35,350,352,418,416,346,104,610,211,455,587,84,499,335,489,0,162,273,497],
    [169,592,284,843,138,261,427,146,316,475,285,371,467,58,474,63,576,708,146,620,200,370,162,0,140,617],
    [86,745,424,839,55,276,287,286,222,469,145,285,607,198,394,211,715,587,231,733,117,273,273,140,0,558],
    [761,254,333,320,639,695,277,432,804,101,437,869,340,559,951,664,101,226,580,288,664,830,497,617,558,0],
]
function addPlaceWithDropDown(){
    // gets the place selectid 
    number = document.getElementById("places").value
    // tells the add place function the number of the place it wants added
    addPlace(number)
}

function addPlace(number) {
    // tells the make tag function what name and img shuod be on the tag that is added to the listarea
    document.getElementById("listarea").innerHTML += makeTag(places[number], "https://via.placeholder.com/900x350")
    // adds the number to the places in order array to keep trak of it 
    placesInOrder.push(number)
    // adds one to listNum so it keeps trak of the number of places that have bean added 
    listNum += 1
};

function makeTag(place, photoLink) {
    // makes the html for the tag
    tag = "<div id=\""+listNum+"\"  class=\"item\"><img class=\"itemphoto\" src=\""+photoLink+"\" alt=\"\"><div class=\"name\"><p class=\"name\">"+place+"<a class=\"xbox\" onclick=\"removeTag("+listNum+")\" id=\"xbox"+listNum+"\">x</a></p></div>"
    // gives the html to whoever reqestided it 
    return tag
};

function removeTag(position) {
    // uses the inpuied position to replace it with null so the id of the tag still match there position in the aray
    placesInOrder.splice((position-1), 1, null)
    // removes the html for the tag
    document.getElementById(position).outerHTML = ""
};

function clearList() {
    // resets placesInOrder
    placesInOrder = []
    // clears the listArea
    document.getElementById("listarea").innerHTML = ""
    // set the distance to 0
    distance = 0
    // resets listNum
    listNum = 1
};

function quit() {
    // closes the tab
    window.close()
};

function cleanPlacesInOrder() {
    // makes a new array for the places without null
    placesInOrderFinal = []
    // makes a vareabule that has the orignal lenth of placesInOrder
    let items = placesInOrder.length
    // makes i for iterating through a list of numbers
    i = 0
    while (items >= i) {
        // makes a loop that will repeat an equle number of times to orignal lenth of placesInOrder
        if (placesInOrder[i] != null) {
            // checks if the ith iteam in placesInOrder is not qule to null 
            placesInOrderFinal.push(placesInOrder[i])
            // if the ith iteam in placesInOrder is not qule to null adds it to the array placesInOrderFinal
        };
        // add one to i so it moves thought all the items
        i += 1
    };
    // returns a array without any nulls in it
    return placesInOrderFinal
};

function calFuelAndDis() {
    fuelPerKm = Number(document.getElementById("fuelperkm").value)
    priceOfFuel = Number(document.getElementById("priceoffuel").value)
    document.getElementById("footertextarea").innerHTML = ""
    // asks for an array of placesInOrder with no nulls
    cleanedPlacesInOrder = cleanPlacesInOrder()
    cleanedPlacesInOrder.push(cleanedPlacesInOrder[0])
    // makes i for iterating through a list of numbers
    i = 0
    // makes a distance var to keep trak of the total
    distance = 0
    // start a while loop to iterate through the places
    while (i < (cleanedPlacesInOrder.length - 1)){
        // defs cPlace as the ith item in cleanedPlacesInOrder
        cPlace = cleanedPlacesInOrder[i]
        // defs nPlace as the (i + 1)th item in cleanedPlacesInOrder
        nPlace = cleanedPlacesInOrder[(i+1)]
        // gets the ith place set of distances
        disSet = distances[cPlace]
        // gets the (i+1)th place dis form the ith place set of distances
        dis = disSet[nPlace]
        // adds the distance to the total 
        distance += dis
        // adds one to i
        i += 1
        console.log(cPlace,nPlace,disSet,dis,distance)
    }
    document.getElementById("footertextarea").innerHTML += "<br/>the distance between the places given is "+distance+" km"
    distance = Number(distance)
    console.log(fuelPerKm,priceOfFuel)
    if(fuelPerKm != 0){
        fuel = distance*fuelPerKm
        document.getElementById("footertextarea").innerHTML += "</br>the amount of fuel used is " +fuel+" liters"
        if(priceOfFuel != 0){
            cost = fuel*priceOfFuel
            document.getElementById("footertextarea").innerHTML += "</br>the cost will be " +cost+" dollars"
        }
        else{
            alert("you need to enter a number for price of fuel for me to calulate it")
        }
    }
    else{
        alert("you need to enter a number for fuel uses per km for me to calulate it")
    }
    // this is so jasmine can read the cal number
    return distance
};

function save(){
    input =  "<br/><label for=\"save/load\" id=\"inputlabel\">name your save</label><input type=\"text\" id=\"save/load\"><button id=\"save/loadbutton\" onclick=\"savePlaces()\">save</button>"
    document.getElementById("entry").innerHTML = input 
};

function load(){
    input =  "<br/><label for=\"save/load\" id=\"inputlabel\">what is the name of your save</label><input type=\"text\" id=\"save/load\"><button id=\"save/loadbutton\" onclick=\"loadPlaces()\">load</button>"
    document.getElementById("entry").innerHTML = input 
};

function savePlaces(){
    key = document.getElementById("save/load").value
    place = JSON.stringify(cleanPlacesInOrder())
    localStorage.setItem(key, place)
    alert("saved")
};

function loadPlaces(){
    clearList()
    retrevedPlaces = retrivePlaces();
    i = 0;
    retrivePlaceslenth = retrevedPlaces.length
    while(i < retrivePlaceslenth) {
        addPlace(retrevedPlaces[i],"../Static/img/external-deuhiufsguiyvgdsiufer.jpg",retrevedPlaces[i] )
        i += 1
    };
    console.log(retrevedPlaces)
    alert("loaded")

};

function retrivePlaces(){
    key = document.getElementById("save/load").value
    storedPlace = localStorage.getItem(key)
    storedPlaces = JSON.parse(storedPlace)
    return storedPlaces
};
