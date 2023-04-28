const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(item => {
	const title = item.querySelector("h2").textContent;
	const quantityEl = item.querySelectorAll("li").length;
	console.log(`Category: ${title}`);
	console.log(`Elements: ${quantityEl}`);
});




