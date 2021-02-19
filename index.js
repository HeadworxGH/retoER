

window.onload = function () {
	let url = 'https://restcountries.eu/rest/v2/lang/es';
	get(url, mostrarLista);
}

function get(url, metodo) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            metodo(xhr.responseText);
        }
    }
    xhr.send();
}

function mostrarLista(rpta) {
	let parsejson=JSON.parse(rpta);
	let data= "";
	for (let i = 0; i < parsejson.length-12; i++) {
		let x= parsejson[i];
		data+="<component-pais";
		data+=" flag='";
		data+=x['flag'];
		data+="' ";
		data+=" name='";
		data+=x['name'];
		data+="'";
		data+="' ";
		data+=" capital='";
		data+=x['capital'];
		data+="'";
		data+=" population='";
		data+=x['population'];
		data+="'";
		data+=" continente='";
		data+=x['region'];
		data+="'";
		data+="></component-pais>";
	}
	document.getElementById("divPaises").innerHTML = data;
}

function mostrarMensaje(msn){
	alert('Conitente: ' + msn);
}