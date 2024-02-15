function captureScreenshot() {
    var imageElement = document.getElementById('badge');
    var canvas = document.createElement('canvas');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    var context = canvas.getContext('2d');
    context.drawImage(imageElement, 0, 0);
    var screenshotDataUrl = canvas.toDataURL('image/png');
    var doc = new jsPDF();
    doc.addImage(screenshotDataUrl, 'PNG', 10, 10, 100, 0);
    var timestamp = Date.now();
    var filename = 'screenshot_' + timestamp + '.pdf';
    doc.save(filename);
}


function download() {
    var element = document.getElementById('badge');
    html2canvas(element).then(function(canvas) {
        var screenshotDataUrl = canvas.toDataURL();

        var link = document.createElement('a');
        link.href = screenshotDataUrl;
        link.download = 'eFeza-badge.jpg';
        link.target = '_blank';

        link.click();
    });
}