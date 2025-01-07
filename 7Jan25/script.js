/*1*/
function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

const result = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log("1.Array:",result);  
 
/*2*/
function calculateTotal(...a){
    let sum=0
    for(let i of a){
        sum +=i;
    }
    return sum;
}
console.log("2.Sum of numbers:")
console.log(calculateTotal(10,20,30)) 

/* 3.*/
function updateEmployeeDetails(employee, newRole) {
    return {
      ...employee,
      role: newRole
    };
  }
  
  const employee = { name: 'Afroz', role: 'Developer', age: 28, location: 'IN' };
  const updatedEmployee = updateEmployeeDetails(employee, 'Senior Developer');
  console.log("3.UpdatedEmployee:",updatedEmployee);
 

  /*4.*/
   function mergeUserData(userDetails, userAddress, userPreferences) {
    return {
      ...userDetails,
      ...userAddress,
      ...userPreferences
    };
  }
  

  const userDetails = {name: 'CVR', age: 25};
  const userAddress = {address: 'Mangalpally', city: 'Hyderabad'};
  const userPreferences = {theme: 'Engineering Edu', language: 'EN'};
  
  const mergedData = mergeUserData(userDetails, userAddress, userPreferences);
  console.log("4.MergedData:",mergedData); 

  /* 5.*/
  function updateProductInfo(product) {
    
    const updatedProduct = {
      ...product, 
      discount: 10, 
      inStock: true 
    };
    
    return updatedProduct;
  }
  
  const product = { id: 101, name: 'Laptop', price: 1000, category: 'Electronics' };
  const updatedProduct = updateProductInfo(product);
  console.log("5.UpdatedProduct:",updatedProduct); 
  
/* 6.*/
const user={
    name:'Afroz',
    age:30,
    city:'Hyderabad',
    country:'INDIA'
};

const{name,city}=user;
console.log("6.Name and city:")
console.log(name);
console.log(city);


/* 7.*/
const person = {
    name: 'Alice', 
    address: {
        street: '123 Main St',
        city1: 'Los Angeles',
        zip: '90001'},
        age: 25
    };

const{address:{street,city1}}=person;
console.log("7.Street and city:")
console.log(street);
console.log(city); 

/* 8.*/
var colors = ['red', 'green', 'blue', 'yellow'];

var [firstColor, secondColor] = colors;
console.log("8.FirstColor and SecondColor:"); 
console.log(firstColor);  
console.log(secondColor); 

var [, secondColor, , fourthColor] = colors;
console.log("SecondColor and FourthColor:")
console.log(secondColor); 
console.log(fourthColor);  
 /*9. */
const numbers = [1, 2, 3, 4, 5];

const [, , , , lastElement] = numbers;
console.log("9.Last Element:",lastElement);  

/*10. */
const matrix = [[1, 2], [3, 4], [5, 6]];

const [, [three], [, five]] = matrix;

console.log("10.Three:",three); 
console.log("Five:",five);  
