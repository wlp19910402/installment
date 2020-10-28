const aesjs = require('aes-js');
// https://my.oschina.net/u/4330791/blog/3375893
function encrypt (key, iv, data) {
    let aesCbc = new aesjs.ModeOfOperation.cbc(aesjs.utils.utf8.toBytes(key), aesjs.utils.utf8.toBytes(iv));
    let encryptedBytes = aesCbc.encrypt(aesjs.utils.utf8.toBytes(data));
    return aesjs.utils.hex.fromBytes(encryptedBytes);
}

function decrypt (key, iv, crypted) {
    let aesCbc = new aesjs.ModeOfOperation.cbc(aesjs.utils.utf8.toBytes(key), aesjs.utils.utf8.toBytes(iv));
    let encryptedBytes = aesCbc.decrypt(aesjs.utils.hex.toBytes(crypted));
    return aesjs.utils.utf8.fromBytes(encryptedBytes);
}


let key = 'a{U*i++12hang2/p';
console.log('加密的key:', key);
let iv = '*O}d(3a^3qhg@da(';
console.log('加密的iv:', iv);
let data = "Thisisanexample0";
console.log("需要加密的数据:", data);
let crypted = encrypt(key, iv, data);
console.log("数据加密后:", crypted);
let dec = decrypt(key, iv, crypted);
console.log("数据解密后:", dec);