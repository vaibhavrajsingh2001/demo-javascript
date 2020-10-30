function isEven(x){
    if(x = 2 || x % 2 == 0){
        console.log(`${x} is even`)
    } else
    console.log(`${x} is odd`)
}

function isNumber(num){
    let x = undefined
    x= num % 2
    if(false){
        console.log("Number is false")
    } else if (!!x) {
        console.log(`Number: ${x}`)
    } else if(2 == x){}
}

function isTruthy(x) {
    debugger;
    return Boolean(x);
};

function area(r) {
    let math = Math()
    return math.PI * r * r;
}

function isFooAvailable(obj){
    console.log(`Value of obj[foo]: ${obj['foo']}`)
    return obj.hasOwnProperty('foo')
}

function findFooBar(){
    var re = /=foo   bar/;
    re.test('foobar')
}

function consoleFoo(num){
    while((num != 3)){
        break;
        console.log(num--)
    }

}

let result = isFooAvailable({
    'bar': 'bar',
    'z': 'z'
})