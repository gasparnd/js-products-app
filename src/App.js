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
				<button class="Hero__products-product-button" id="delete-product">Delete</button>
			</div>
		`
		spaceDOM.appendChild(productUI)

		this.resetForm()
		this.showMessage('added', 'add-message')
	}

	resetForm() {
		document.getElementById('product-form').reset()
	}

	removeProduct(element) {
		if(element.id === 'delete-product') {
			element.parentElement.parentElement.remove()
			this.showMessage('removed', 'remove-message')
		}
	}
	
	showMessage(message, className) {
		const dom = document.querySelector('.Hero')
		const app = document.querySelector('.Hero__app')
		const alert = document.createElement('div')
		alert.className = 'alert'
		alert.innerHTML = `
			<div class="${className}">
				<p>The product was ${message} successfully</p>
			</div>
		`

		dom.insertBefore(alert, app)

		setTimeout(() => {
			alert.remove()
		},1500)
	}	
	
}


document.getElementById('product-form').addEventListener('submit', ev => {
	ev.preventDefault()
	const productName = document.getElementById('product-name').value
	const productPrice = document.getElementById('product-price').value
	const productYear = document.getElementById('product-year').value


	if(productName === '' || productPrice === '' || productYear === '') {
		alert('Please complete all the cells')
	} else {
		const product = new Product({name: productName, price: productPrice, year: productYear})

		const ui = new UI()
		ui.addProduct(product)	
	}
})

document.getElementById('product-list').addEventListener('click', (ev) => {
	const ui = new UI()
	ui.removeProduct(ev.target)
})