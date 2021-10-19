/** 
 *  Author: jacob miller
 *  Last edited: 10/17/21 (mm/dd/yy)
 */

describe("js working", function(){
    var main = require("../Js/main")
    var Main

    beforeEach(function() {
        Main = new main();
        } 
    )
    it("shoud be able to cal dis", function(){
        placesInOrder = [4,7,3,9]
        expect(placesInOrder).toEqual(placesInOrder)
        placesInOrder = []
    })   
})