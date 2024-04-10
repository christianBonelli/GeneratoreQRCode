function generateQRCode() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var via = document.getElementById('via').value;
    var cap = document.getElementById('cap').value;
    var citta = document.getElementById('citta').value;
    var regione = document.getElementById('regione').value;
    var paese = document.getElementById('paese').value;
    var note = document.getElementById('note').value;
    
    var qrData = "Informazioni personali:\n" +
                 "Nome: " + nome + "\n" +
                 "Cognome: " + cognome + "\n" +
                 "Email: " + email + "\n" +
                 "Telefono: " + telefono + "\n" +
                 "Via: " + via + "\n" +
                 "CAP: " + cap + "\n" +
                 "Città: " + citta + "\n" +
                 "Regione: " + regione + "\n" +
                 "Paese: " + paese + "\n" +
                 "Note: " + note;

    var qr = qrcode(0, 'M'); // Crea un nuovo oggetto QRCode
    qr.addData(qrData); // Aggiunge i dati al QR code
    qr.make(); // Genera il QR code

    // Ottieni l'elemento HTML in cui inserire il QR code
    var qrCodeElement = document.getElementById('qrcode');

    // Aggiungi il QR code all'elemento HTML
    qrCodeElement.innerHTML = qr.createSvgTag();
}

    // Funzione per scaricare il QR code come immagine SVG
    function downloadQRCode() {
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