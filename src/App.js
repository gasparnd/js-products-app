class Product {
	constructor(config) {
		this.productName = config.name
		this.productPrice = config.price
		this.productYear = config.year
	}
}

class UI {
	addProduct(product) {
		const spaceDOM = document.getElementById('product-list')
		const productUI = document.createElement('div') 

		productUI.innerHTML = `
			<div class="Hero__products-product">
				<p><strong>Name:</strong> ${product.productName}, <strong>Price:</strong> $${product.productPrice}, <strong>Year:</strong> ${product.productYear}</p>
				<button id="delete-product">Delete</button>
			</div>
		`
		spaceDOM.appendChild(productUI)

		this.resetForm()
	}

	resetForm() {
		document.getElementById('product-form').reset()
	}

	removeProduct() {

	}
	
	showMessage() {

	}	
	
}


document.getElementById('product-form').addEventListener('submit', ev => {
	ev.preventDefault()
	const productName = document.getElementById('product-name').value
	const productPrice = document.getElementById('product-price').value
	const productYear = document.getElementById('product-year').value

	const product = new Product({name: productName, price: productPrice, year: productYear})

	const ui = new UI()
	ui.addProduct(product)	

	console.log(product)
})
