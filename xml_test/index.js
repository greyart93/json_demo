x = new XMLHttpRequest()
x.open("GET", "sample.xml", false)
x.send()
xDoc = x.responseXML;
document.getElementById("name").innerHTML = xDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue
document.title = xDoc.getElementsByTagName('name')[1].childNodes[0].nodeValue
