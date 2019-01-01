const fs = require('fs');
const pdf = require('html-pdf');
const uuidV1 = require('uuid/v1');
const options = {
    format: 'Letter'
};

const folderPath = './public/';

function SavePdf(html) {
    var fileName = uuidV1().toString() + '.pdf';
    pdf.create(html, options).toFile(folderPath + fileName, (err, res) => {
        if (err) return console.log(err);
        console.log(res);
    });
}

function SaveHtml(htmlStr) {
    var fileName = uuidV1().toString() + '.html';
    var writeStream = fs.createWriteStream(folderPath + fileName);
    writeStream.write(htmlStr);
    writeStream.end();
}

function SaveMarkdown(markdownStr) {
    var fileName = uuidV1().toString() + '.md';
    var writeStream = fs.createWriteStream(folderPath + fileName);
    writeStream.write(markdownStr);
    writeStream.end();
}

function RemoveFile(filePath) {
    fs.stat(filePath, function (err, stats) {
        console.log(stats);//here we got all information of file in stats variable
     
        if (err) {
            return console.error(err);
        }
     
        fs.unlink(filePath, function(err){
             if(err) return console.log(err);
             console.log('file deleted successfully');
             return true;
        });  
     });
}

module.exports = {
    SaveHtml,
    SaveMarkdown,
    SavePdf,
    RemoveFile
}