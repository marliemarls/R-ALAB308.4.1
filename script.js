// //part 3: feeling loopy 
let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let newStr = "\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


function nestedArr(str) {
    let splitArr = str.split("\n")
    console.log()
    let arrays = []
    for(let i = 0; i < splitArr.length; i++){
        const newArr = splitArr[i].split(",")
        arrays.push(newArr)
        // console.log(newArr)
    }
    return arrays
}


// let nestedArray = nestedArr(str)
// console.log(nestedArray)

// let newKeys = nestedArr[0]

// let newObj = Object.assign({}, newKeys);
// console.log(newObj)

function createObject (arr) {
    //created variables that will hold the key names, an empty object, and an empty array. 
    //these variables will be used later on 
    
    let keys = arr[0] 
    let newObj = {};
    let newArr = []

    //i am creating two for loops because I am working with a nested array (an array that holds other arrays)
    //the first for loop will be use to iterate through the entire nested array
    //iteration begins at the second element ([1]) because the first ([0]) is the key names and we dont want to grab that information
    for(let i = 1; i <= arr.length-1; i++) {
        // console.log(arr[i])
        //the second for loop will be used to iterate through the arrays within the nested array (the elements in arr)
        //this iteration will begin at 0 this time because we are now working within the nested arrays and need to grab all the elements as they represent the value property
        //i created the variable index within the first loop to hold the current iteration of the first loop .length-1 so that within my next loop, i will use index as my array to iterate through
        let index = arr[i].length-1;
        for(let j = 0; j <= index; j++) {
            //now that i'm iterating through the elements, I want to create a variable to hold the first array in the nested array so i created the key variable to hold keys[j] to hold the first element in the nested array 
            //created a value variable that is grabbing the elements of the nested array and then at the same time grabbing the current iteration of both loops
            let key = keys[j];
            let value = arr[i][j];
            //now i can grab the newObj variable to implement the key and value pairs
            newObj[key] = value; 
        }
        //outside of the inner loop, i will push the objects into the newArr that I created in the beginnig of the function
        //once i push the newObj, I can reset the value to an empty object so that we can continue using the obj variable to push the others into the array
        newArr.push(newObj)
        newObj = {}
    }
    //now we can return the newArr
    return newArr
}

let createdObjectArray = createObject(nestedArr(str)) 

console.log(createdObjectArray)

//part 4 sorting and manipulating data: 

createdObjectArray.pop()
console.log(createdObjectArray)

createdObjectArray.splice(1, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" });

console.log(createdObjectArray)

createdObjectArray.push({ ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" })

console.log(createdObjectArray)

//