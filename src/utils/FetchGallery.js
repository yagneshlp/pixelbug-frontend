var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: 'AKIAJTRW6SORHT47MQIQ', secretAccessKey: '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', region: 'ap-south-1'});
var s3 = new AWS.S3();

var params = { 
 Bucket: 'pixelbug-website.s3.ap-south-1.amazonaws.com',
 Delimiter: '/',
 Prefix: '/gallery/2015/'
}

s3.listObjects(params, function (err, data) {
 if(err)throw err;
 console.log(data);
});


export default  "<div></div>";