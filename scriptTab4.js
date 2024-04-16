
function generateQRCode4() {
    var ssid = document.getElementById('ssid').value;
    var password = document.getElementById('password').value;

    var wifiData = "WIFI:T:WPA;S:" + ssid + ";P:" + password + ";;";

    var qr = qrcode(0, 'M');
    qr.addData(wifiData);
    qr.make();

    var qrCodeElement = document.getElementById('qrcode4');

    var ssid = document.getElementById('ssid').value = "";
    var password = document.getElementById('password').value = "";
    qrCodeElement.innerHTML = qr.createImgTag();
}

function downloadQRCode4() {
    var qrCodeElement = document.getElementById('qrcode4');
    var svgData = qrCodeElement.innerHTML;
    var blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'qrcode.svg'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    convertiSVGaJPEG4();
}

function convertiSVGaJPEG4() {
var svg = document.getElementById('qrcode4').querySelector('svg');


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