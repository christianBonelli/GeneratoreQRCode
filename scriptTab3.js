function generateQRCode3() {
    var url = document.getElementById('url').value;
    var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    var qr = qrcode(0, 'M');
    if(url !== "" && urlRegex.test(url)){
    qr.addData(url); 
    qr.make();
    }else{
        alert("Inserisci un URL valido");
    }
  
    var qrCodeElement = document.getElementById('qrcode3');
    document.getElementById("url").value = " ";
    
    qrCodeElement.innerHTML = qr.createSvgTag();
}


function downloadQRCode3() {
    var qrCodeElement = document.getElementById('qrcode3');
    var svgData = qrCodeElement.innerHTML;
    var blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'qrcode.svg'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    convertiSVGaJPEG3();
}

function convertiSVGaJPEG3() {
var svg = document.getElementById('qrcode3').querySelector('svg');


var canvas = document.createElement('canvas');
canvas.width = 400; 
canvas.height = 400;

var svgData = new XMLSerializer().serializeToString(svg);
var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
var url = URL.createObjectURL(svgBlob);

var ctx = canvas.getContext('2d');
var img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0, 400, 400); 
    var jpegData = canvas.toDataURL('image/jpeg', 1.0); 
    var downloadLink = document.createElement('a');
    downloadLink.href = jpegData;
    downloadLink.download = 'qrcode.jpg'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
img.src = url;
}