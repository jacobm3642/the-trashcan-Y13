/** 
 *  Author: jacob miller
 *  Last edited: 10/22/21 (mm/dd/yy)
 */

describe("js working", function(){
    testing = true
    i = 0
    while (i < 5){
    it("shoud be able to cal dis as 0 if both places are the same " + i, function(){
        placesInOrder = [i,i]
        expect(calFuelAndDis()).toEqual(0)
        placesInOrder = []
    })
    it("shoud be able to cal dis if they all go to place 1 from " + i, function(){
        placesInOrder = [1,i]
        expect(calFuelAndDis()).toEqual(((distances[i])[1])*2)
        placesInOrder = []
    })
    it("shoud be able to cal dis if they all go to place 25 from " + i, function(){
        placesInOrder = [25,i]
        expect(calFuelAndDis()).toEqual(((distances[i])[25])*2)
        placesInOrder = []
    })
    it("shoud be able to cal dis if they all go to place 15 from " + i, function(){
        placesInOrder = [15,i]
        expect(calFuelAndDis()).toEqual(((distances[i])[15])*2)
        placesInOrder = []
    })
    it("shoud be able to cal dis as 0 if both places are the same with a null " + i, function(){
        placesInOrder = [i,null,i]
        expect(calFuelAndDis()).toEqual(0)
        placesInOrder = []
    })
    i +=1
}   
})