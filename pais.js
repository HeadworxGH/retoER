class Pais extends HTMLElement{	
	constructor(){
		super();
		this.flag;		
		this.name;
		this.capital;
		this.population;
		this.continente;
	}
	
	static get observedAttributes(){
		return ['flag','name','capital','population','continente'];
	}
	
	attributeChangedCallback(nameAtr, valueOld, valueAtr){
		switch(nameAtr){
			case "flag":
				this.flag = valueAtr;
			break;		
			case "name":
				this.name = valueAtr;
			break;
			case "capital":
				this.capital = valueAtr;
			break;
			case "population":
				this.population = valueAtr;
			break;
			case "continente":
				this.continente = valueAtr;
			break;						
		}
	}
	
	connectedCallback(){
		this.innerHTML =`<div>
			<img src=${this.flag} height=20px width=30px>
			<p>País: <a href='#' onclick=mostrarMensaje('${this.continente}')>${this.name}</a></p>
			<p>Capital: ${this.capital}</p>
			<p>Población: ${this.population}</p>
		</div>`;
	}
	
}

window.customElements.define("component-pais", Pais);