function greet(name, callback){
    callback(`Hello, ${name}!`);
}

greet('Naman', message => console.log(message)); // Hello, Naman!