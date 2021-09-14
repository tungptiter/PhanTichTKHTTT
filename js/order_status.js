var all = document.querySelector('.title_status').querySelector('.all');
var all_box = document.querySelector('.content_status.all');

var confirming = document.querySelector('.title_status').querySelector('.confirming');
var confirming_box = document.querySelector('.content_status.confirming');

var waiting = document.querySelector('.title_status').querySelector('.waiting');
var waiting_box = document.querySelector('.content_status.waiting');

var shipping = document.querySelector('.title_status').querySelector('.shipping');
var shipping_box = document.querySelector('.content_status.shipping');

var completed = document.querySelector('.title_status').querySelector('.completed');
var completed_box = document.querySelector('.content_status.completed');

var canceled = document.querySelector('.title_status').querySelector('.canceled');
var canceled_box = document.querySelector('.content_status.canceled');

all.addEventListener('click', evt => {

	all.classList.add('selected');
	confirming.classList.remove('selected');
	waiting.classList.remove('selected');
	shipping.classList.remove('selected');
	completed.classList.remove('selected');
	canceled.classList.remove('selected');
	
	all_box.style.display = "flex";
	confirming_box.style.display = "none";
	waiting_box.style.display = "none";
	shipping_box.style.display = "none";
	completed_box.style.display = "none";
	canceled_box.style.display = "none";
})


confirming.addEventListener('click', evt => {

	all.classList.remove('selected');
	confirming.classList.add('selected');
	waiting.classList.remove('selected');
	shipping.classList.remove('selected');
	completed.classList.remove('selected');
	canceled.classList.remove('selected');
	
	all_box.style.display = "none";
	confirming_box.style.display = "flex";
	waiting_box.style.display = "none";
	shipping_box.style.display = "none";
	completed_box.style.display = "none";
	canceled_box.style.display = "none";
})

waiting.addEventListener('click', evt => {

	all.classList.remove('selected');
	confirming.classList.remove('selected');
	waiting.classList.add('selected');
	shipping.classList.remove('selected');
	completed.classList.remove('selected');
	canceled.classList.remove('selected');
	
	all_box.style.display = "none";
	confirming_box.style.display = "none";
	waiting_box.style.display = "flex";
	shipping_box.style.display = "none";
	completed_box.style.display = "none";
	canceled_box.style.display = "none";
})

shipping.addEventListener('click', evt => {

	all.classList.remove('selected');
	confirming.classList.remove('selected');
	waiting.classList.remove('selected');
	shipping.classList.add('selected');
	completed.classList.remove('selected');
	canceled.classList.remove('selected');
	
	all_box.style.display = "none";
	confirming_box.style.display = "none";
	waiting_box.style.display = "none";
	shipping_box.style.display = "flex";
	completed_box.style.display = "none";
	canceled_box.style.display = "none";
})

completed.addEventListener('click', evt => {

	all.classList.remove('selected');
	confirming.classList.remove('selected');
	waiting.classList.remove('selected');
	shipping.classList.remove('selected');
	completed.classList.add('selected');
	canceled.classList.remove('selected');
	
	all_box.style.display = "none";
	confirming_box.style.display = "none";
	waiting_box.style.display = "none";
	shipping_box.style.display = "none";
	completed_box.style.display = "flex";
	canceled_box.style.display = "none";
})

canceled.addEventListener('click', evt => {

	all.classList.remove('selected');
	confirming.classList.remove('selected');
	waiting.classList.remove('selected');
	shipping.classList.remove('selected');
	completed.classList.remove('selected');
	canceled.classList.add('selected');
	
	all_box.style.display = "none";
	confirming_box.style.display = "none";
	waiting_box.style.display = "none";
	shipping_box.style.display = "none";
	completed_box.style.display = "none";
	canceled_box.style.display = "flex";
})