/*1*/
function greet(name, callback) {
    const msg = `Hello, ${name}!`;
    callback(msg);
  }
  
  function printMsg(msg) {
    console.log(msg);
  }
  
  greet('Alice', printMsg); 
  
/*2*/

function mul(num){
    return num * 2;
}
function sub(num){
    return num - 5;
}
function add(num){
    return num + 10;
}

let p = new Promise((resolve,rejet) =>{
    resolve(10);
})
p.then(mul).then(sub).then(add).then((val) => {
    console.log(`2. Result is: ${val}`)
}
)


/*3*/

function delayedMsg(message, delay, callback) {
    setTimeout(() => {
      console.log(message); 
      callback(); 
    }, delay);
  }

  function msgPrinted() {
    console.log('3. Msg has printed.');
  }

delayedMsg('Hello, world!', 2000, msgPrinted); 

/*4*/

// function fetchDataWithCallback(callback){
//     setTimeout(() =>{
//         let num1 = Math.random () * 10;

//         if(num1 < 5){
//             const obj={
//                 name:"santhosh",
//                 age : "20"
//             }
//             callback(obj)
//         }else{
//             callback("failed to retrieve information");
//         }
//     }
//     )}

// function result(obj){
//     console.log(obj);
// }
// fetchDataWithCallback(result)

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        let num1 = Math.random() * 10;

        if (num1 < 5) {
            const obj = {
                name: "Santhosh",
                age: "20"
            };
            callback(null, obj);
        } else {
            callback("Failed to retrieve information", null);
        }
    }, 2000);
}

function result(error, data) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("4. Data retrieved:", data);
    }
}

fetchDataWithCallback(result);

/*6*/

let p1 = Promise.resolve(5);
let p2 = Promise.resolve(10);
let p3 = Promise.resolve(15);

p1
  .then(val1 => {
    return p2.then(val2 => {
      return p3.then(val3 => {
       
        return val1 + val2 + val3;
      });
    });
  })
  .then(sum => {
    console.log("6.Sum of all values:", sum); 
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
