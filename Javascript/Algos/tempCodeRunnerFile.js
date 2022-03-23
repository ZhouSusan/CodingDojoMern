const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  };
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];
  
//   obj1.__proto__ = obj2;
  
  function entries(obj) { 
    let result = [];
    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
  }
  
  console.log(entries(obj1));
  console.log(entries(obj2));