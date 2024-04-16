function generateQRCode2() {
    var nomeCognome = document.getElementById('nomeCognome').value;
    var bic = document.getElementById('bic').value;
    var iban = document.getElementById('iban').value;
    var sede = document.getElementById('sede').value;
    var qr = qrcode(0, 'M'); 
    qr.addData(nomeCognome + "\n" + bic + "\n" + iban + "\n" + sede); 
    qr.make();
    console.log("Sono in qr code 2");
    var qrCodeElement = document.getElementById('qrcode2');

    var nomeCognome = document.getElementById('nomeCognome').value = "";
    var bic = document.getElementById('bic').value = "";
    var iban = document.getElementById('iban').value = "";
    var sede = document.getElementById('sede').value = "";

    qrCodeElement.innerHTML = qr.createSvgTag();
}


function downloadQRCode2() {
    var qrCodeElement = document.getElementById('qrcode2');
    var svgData = qrCodeElement.innerHTML;
    var blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'qrcode.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    convertiSVGaJPEG2();
}

function convertiSVGaJPEG2() {
var svg = document.getElementById('qrcode2').querySelector('svg');

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