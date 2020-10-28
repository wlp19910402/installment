const crypto = require("crypto");

function encrypt (key, iv, data) {
    let decipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    // decipher.setAutoPadding(true);
    return decipher.update(data, 'binary', 'base64') + decipher.final('base64');
}

function decrypt (key, iv, crypted) {
     crypted = new Buffer(crypted, 'base64').toString('binary');
     let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
     return decipher.update(crypted, 'binary', 'utf8') + decipher.final('utf8');
}

let key = '12345*789abcdeff';
console.log('加密的key:', key);
let iv = 'abcdeff12345*789';
console.log('加密的iv:', iv);
let data = "This is an example";
console.log("需要加密的数据:", data);
let crypted = encrypt(key, iv, data);
console.log("数据加密后:", crypted);
let dec = decrypt(key, iv, crypted);
console.log("数据解密后:", dec);