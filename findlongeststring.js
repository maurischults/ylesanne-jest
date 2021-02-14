// funktsioon võtab sisse array stringidest ja leiab sealt kõige pikema stringi
/* // findLongestString  - funktsioon leiab talle etteantud array’st kõige pikema stringi
array [‘welcome’, ‘hey’, ‘hello’] põhjal peaks funktsioon tagastama stringi ‘welcome’
etteantud array’s peavad olema ainult stringid, vastasel juhul tagastatakse sõnum ‘only strings are allowed as input’
 */
let long = "";

const findLongest = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      return "only strings are allowed as input";
    } else {
      /* for (let i = 0; i < arr.length; i++) { */
      if (arr[i].length > long.length) {
        long = arr[i];
      }
    }
  }
  return long;
};

module.exports = findLongest;
/* for (i = 0; i < arr.length; i++) {
      if (arr[i].length > long.length) {
        long = arr[i].length;
      }
      return long;
    } else {
      if (arr.includes(1)) {
    return "only strings are allowed as input";
  }
  }
};  */
/* console.log(typeof arr);
  if (typeof arr != "string") {
    return "only strings are allowed as input"; */

/* const lowerCaseStr = str.toLowerCase();
      const arr = lowerCaseStr.split("");
      const reverseArr = arr.reverse();
      const reverseStr = reverseArr.join("");
      return reverseStr; */
