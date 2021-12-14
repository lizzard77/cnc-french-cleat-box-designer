export default function save (svg, name = 'download.svg') {
		//alert('svg: ' + svg.outerHTML);
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		var svgData = svg.outerHTML;
		var preface = '<?xml version="1.0" standalone="no"?>\r\n';
		var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
		var svgUrl = URL.createObjectURL(svgBlob);
		//window.open(svgUrl, 'dl');
		var downloadLink = document.createElement("a");
	  downloadLink.download = name;
		downloadLink.href = svgUrl;
		downloadLink.download = name;
	  downloadLink.setAttribute('download', name);

	  document.body.appendChild(downloadLink);
		downloadLink.click();
		setTimeout(function(){
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(svgUrl);
    }, 100);
}