const image2base64 = require('image-to-base64');
const crypto = require('crypto');

image2base64('./logo-source.jpg')
    .then(function(imageb64) {
      const hash = crypto.createHash('sha256').update(imageb64).digest('hex');
      console.log({hash});
    });
