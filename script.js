$(document).ready(()=>{

	function getDate(currentDate){
		let month = currentDate.getMonth() + 1;
		let day = currentDate.getDate();
		let year = currentDate.getFullYear();
		let fullYear =
		`${year}/${month < 10 ? '0' + month : month }/${day < 10 ? '0' + day : day}`;
		$('.current_date').text(fullYear);
	}



	function getTime(currentDate){
		let hours = currentDate.getHours();
		let minutes = currentDate.getMinutes();
		let seconds = currentDate.getSeconds();
		let fullTime = 
		`${hours < 10 ? '0' + hours : hours }/${minutes < 0 ? '0' + minutes : minutes }/${seconds < 10 ? '0' + seconds : seconds}`;
		$('.current_time').text(fullTime);
	}


	function updateDate(){
		setInterval(function(){
			let currentDate = new Date();
			getDate(currentDate);
			getTime(currentDate);
		},1000);
	};
	updateDate();
}) 