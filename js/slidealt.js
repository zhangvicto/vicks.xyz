document.addEventListener('DOMContentLoaded', function() {
	let stream = document.querySelector('.slides');
	let items = document.querySelectorAll('.slide');
	let prev = document.getElementById('previous');
	let next = document.getElementById('nextup');
	prev.addEventListener('click', function() {
		stream.insertBefore(items[items.length - 1], items[0]);
		items = document.querySelectorAll('.slide');
	});
	next.addEventListener('click', function() {
		stream.appendChild(items[0]);
		items = document.querySelectorAll('.slide');
    });
    
    

});