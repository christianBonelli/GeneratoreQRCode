function generateQRCode5() {
    var telefono = document.getElementById('numero').value;
    var testo = document.getElementById('testo').value;

    var numeroTelefono = "+39" + telefono;
    var qrData = "smsto:" + encodeURIComponent(numeroTelefono) + ":" + decodeURIComponent(testo);
    var qr = qrcode(0, 'M');
    qr.addData(qrData); 
    qr.make(); // Genera il QR code
    var qrCodeElement = document.getElementById('qrcode5');

    var telefono = document.getElementById('numero').value = "";
    var testo = document.getElementById('testo').value = "";
    // Aggiungi il QR code all'elemento HTML
    qrCodeElement.innerHTML = qr.createSvgTag();
}


// Funzione per scaricare il QR code come immagine SVG
function downloadQRCode5() {
    var qrCodeElement = document.getElementById('qrcode');
    var svgData = qrCodeElement.innerHTML;
    var blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'qrcode.svg'; // Nome del file da scaricare
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    convertiSVGaJPEG();
}
// Funzione per convertire un'immagine SVG in un'immagine JPEG
function convertiSVGaJPEG() {
var svg = document.getElementById('qrcode').querySelector('svg');

// Crea un canvas
var canvas = document.createElement('canvas');
canvas.width = 400; // Larghezza desiderata
canvas.height = 400; // Altezza desiderata

// Crea un oggetto SVG in base64
var svgData = new XMLSerializer().serializeToString(svg);
var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
var url = URL.createObjectURL(svgBlob);

// Carica l'immagine SVG sul canvas
var ctx = canvas.getContext('2d');
var img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0, 400, 400); // Disegna l'immagine sul canvas con le dimensioni desiderate
    // Converti il canvas in un'immagine JPEG
    var jpegData = canvas.toDataURL('image/jpeg', 1.0); // Qualità 1.0
    // Crea un link per il download dell'immagine JPEG
    var downloadLink = document.createElement('a');
    downloadLink.href = jpegData;
    downloadLink.download = 'qrcode.jpg'; // Nome del file da scaricare
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
img.src = url;
}