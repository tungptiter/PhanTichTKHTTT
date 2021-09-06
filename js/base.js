var sub_menu = document.querySelector(".sub_menu");

sub_menu.addEventListener('mouseleave', evt => {
	
	sub_menu.style.display = 'none';
})

document.querySelector(".icon_user").addEventListener('click', evt => {

	sub_menu.style.display = 'block';
})