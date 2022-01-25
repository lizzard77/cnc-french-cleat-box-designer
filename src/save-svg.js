export default function save(svg, name = 'download.svg', zoom = 1) 
{
    var preface = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n';
    var postface = "";

    var rect = svg.getBoundingClientRect();
    let w = Math.ceil(rect.width*0.26458333);
    let h = Math.ceil(rect.height*0.26458333);
    
    if (svg.tagName !== "svg")
    {
        w *= zoom; h *= zoom;
        preface += '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + 'mm" height="' + h + 'mm" viewBox="0 0 ' + w + ' ' + h + '">';
        postface = '</svg>';        
    } else {
        svg.setAttribute("width", w + "mm");
        svg.setAttribute("height", h + "mm");
        svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    }
    console.log("export size of " + name + " is " + w + "/" + h);


    var svgData = svg.outerHTML;
    var svgBlob = new Blob([preface, svgData, postface], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    
    var downloadLink = document.createElement("a");
    downloadLink.download = name;
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    downloadLink.setAttribute('download', name);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(svgUrl);
    }, 100);
}