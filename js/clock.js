function clock() {
	var myVar = setInterval(function() {
		var d = new Date();
		var hour = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		
		if (d.getHours() < 10)
		{
			hour = "0" + d.getHours();
		}
		if (d.getMinutes() < 10)
		{
			min = "0" + d.getMinutes();
		}
		if (d.getSeconds() < 10)
		{
			sec = "0" + d.getSeconds();
		}
		
		var string = hour + ":" + min + ":" + sec;
		document.getElementById("clock").innerHTML = string;
	});
}