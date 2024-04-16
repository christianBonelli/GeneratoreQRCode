    //SCRIPT PER SMS
function generateQRCode5() {
    var telefono = document.getElementById('numero').value;
    var testo = document.getElementById('testo').value;

    var numeroTelefono = "+39" + telefono;
    var qrData = "smsto:" + encodeURIComponent(numeroTelefono) + ":" + decodeURIComponent(testo);
    var qr = qrcode(0, 'M');
    qr.addData(qrData); 
    qr.make(); 
    var qrCodeElement = document.getElementById('qrcode5');

    var telefono = document.getElementById('numero').value = "";
    var testo = document.getElementById('testo').value = "";
   
    qrCodeElement.innerHTML = qr.createSvgTag();
}



function downloadQRCode5() {
    var qrCodeElement = document.getElementById('qrcode5');
    var svgData = qrCodeElement.innerHTML;
    var blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'qrcode.svg'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    convertiSVGaJPEG5();
}

function convertiSVGaJPEG5() {
var svg = document.getElementById('qrcode5').querySelector('svg');

// Crea un canvas
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