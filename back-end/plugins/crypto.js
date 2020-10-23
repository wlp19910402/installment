const {createCipher,createDecipher} = require('crypto');
const {SECRET_KEY} = require('../config')
//AES对称加密
function encrypt(a) {
  var content = a;
  var cipher = createCipher('aes192', SECRET_KEY); //使用aes192加密
  var enc = cipher.update(content, 'utf8', 'hex'); //编码方式从utf-8转为hex;
  return (enc += cipher.final('hex')); //编码方式转为hex;
}
 //AES对称解密
function decrypt(data) {
  var decipher =createDecipher('aes192', SECRET_KEY);
  var dec = decipher.update(data, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec

}
module.exports={encrypt,decrypt}


