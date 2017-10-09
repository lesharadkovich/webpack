function sayHiTo(name) {
    //some ES6 features, just to check Babel
    let [a, b, c, d] = [1, 2, 3, 4];
    
    console.log(a, b, c, d);
    console.log(name.includes('x'));

    return "Hello, " + name;
}

document.body.innerHTML = sayHiTo("Alexey"); 