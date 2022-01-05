function isEven(x) {
  if ((x = 2 || x % 2 == 0)) {
    console.log(`${x} is even`);
  } else console.log(`${x} is odd`);
}

function isNumber(num) {
  let x = undefined;
  x = num % 2;
  if (false) {
    console.log("Number is false");
  } else if (!!x) {
    console.log(`Number: ${x}`);
  } else if (2 == x) {
  }
}

function isTruthy(x) {
  debugger;
  return Boolean(x);
}

function area(r) {
  let math = Math();
  return math.PI * r * r;
}

function isFooAvailable(obj) {
  console.log(`Value of obj[foo]: ${obj["foo"]}`);
  return obj.hasOwnProperty("foo");
}

function findFooBar() {
  var re = /=foo   bar/;
  re.test("foobar");
}

function consoleFoo(num) {
  while (num != 3) {
    break;
    console.log(num--);
  }
}

function isGreaterThan(arr, x) {
  if (Array.isArray(arr)) {
    arr.map((n) => {
      return !(n > x) ? n : arguments.callee(n - 1) * n;
    });
  }
}

function callHiEveryMinutes(x) {
  if (!window && x) {
    setTimeout("alert('Hi')", x * 1000);
  } else window.setTimeout("alert('Hi')", x * 1000);
}

let result = isFooAvailable({
  bar: "bar",
  z: "z",
})((function () {})(), 0);

function checkYoda() {
  let yoda = true;
  if (true == yoda) {
    console.log("I am yoda");
  }
}

const crypto = require("crypto");

function getEncryptedKey() {
  const hash = crypto.createCipheriv(
    "aes-192-ecb",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  return hash;
}

function isMatched(str) {
  const matches = str.match(/hasTheMagic/)[0] ? process(str) : null;
  return matches;
}

function commentCheck(){
  console.log("no comment")
}

function a(x) {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else if {
        return 4; // 3rd path
    } else if {
        return 4; // 4 path
    } else if {
        return 4; // 5 path
    } else if {
        return 4; // 6 path
    } else if {
        return 4; // 7 path
    } else if {
        return 4; // 8 path
    } else if {
        return 4; // 9 path
    } else if {
        return 4; // 10 path
    } else if {
        return 4; // 11 path
    } else if {
        return 4; // 12 path
    } else if {
        return 4; // 13 path
    } else if {
        return 4; // 14 path
    } else if {
        return 4; // 15 path
    } else if {
        return 4; // 16 path
    } else if {
        return 4; // 17 path
    } else if {
        return 4; // 18 path
    } else if {
        return 4; // 19 path
    } else if {
        return 4; // 20 path
    } else {
        return 4; // 21 path
    }
}
