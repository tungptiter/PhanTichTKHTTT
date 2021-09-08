document.querySelectorAll('.item').forEach(item => {

	item.addEventListener('mouseleave', function(evt) {

		this.querySelector('.sub_bar').style.display = 'none';
	})
})

document.querySelectorAll('.item').forEach(item => {

	item.addEventListener('mouseover', function(evt) {

		this.querySelector('.sub_bar').style.display = 'flex';
	})
})