// //part 3: feeling loopy 
let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let newStr = "\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

function loopThruStrings(str) {
    let arr = [];
    for(let i = 0; i <= str.length; i++) {

        let newStr = '';
        if( str[i] !== "\n"){
            newStr += str[i]
            console.log(newStr)
            // newArray.push(newStr)
        } 
        // console.log(newArray)
    }
    // return newArray
}



// not really sure if im doing this right 
// function loopThruStrings(str){
//     let splitArr = str.split("\n");
//     return splitArr
// }

console.log(loopThruStrings(str))
// console.log(loopThruStrings(newStr))