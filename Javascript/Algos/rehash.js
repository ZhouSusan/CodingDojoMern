/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                   v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
frequencyMap = {
  b: 70,
  a: 184, //+20
  c: 42, //+10
}
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    let result = "";
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let num = "";
        let key = "";
        if (isNaN(str[i])) {
            key = str[i];
        }
        while (parseInt(str[i+1]) || str[i+1] === "0") {
            num += str[i+1];
            i++;
        } 
        if (!obj.hasOwnProperty(key)) {
            obj[key] = parseInt(num);
        } else {
            obj[key] += parseInt(num);
        }
    }
    // console.log(obj);
    let sortedObj = Object.entries(obj).sort(function(a, b) {
        return a[0].localeCompare(b[0]);
    })
    // console.log(sortedObj);
    for (let k = 0; k < sortedObj.length; k++) {
        result += sortedObj[k][0] + sortedObj[k][1];
    }
    // console.log(result);
    return result;
}

console.log(rehash(str1));
console.log(rehash(str1) === expected1, "<-- should be \"true\"");