function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	// Загальна вартість товарів
	let priceTotal = 0;
	// вартість доставки за замовчуванням
	const deliveryPrice = 120; 
	// Мінімальне замовлення для безкоштовної доставки
	const freeShipping = 600; 

	// Обходимо всі блоки з цінами в кошику
	priceElements.forEach(function (item) {
		// Знаходимо кількість товарів
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Додаємо вартість товару до загальної вартості (кі-сть * ціну)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	if (priceTotal >= freeShipping) {
		deliveryPrice = 0; // безкоштовна доставка
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'безкоштовна';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = `${deliveryPrice} грн`;
	}

	// Додаємо вартість доставки до загальної вартості
	priceTotal += deliveryPrice;

	// Відображаємо загальну вартість на сторінці
	totalPriceEl.innerText = priceTotal;
}
