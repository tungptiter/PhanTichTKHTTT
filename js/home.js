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

document.querySelectorAll('.home_box .list .item').forEach(item => {

	item.addEventListener('click', function(evt) {

		window.location.href = './infor.html';
	})
})
