function currency_query(){
	var display_span = document.getElementById("current_rate");
	display_span.innerHTML = 'Waiting for server response...';
	var req = new XMLHttpRequest();
	req.open('POST','http://jerm.000webhostapp.com',true);
	
	//req.onreadystatechange = function (){
	req.onload = function (){
		if(this.status==200 || this.readyState==4){
			var server_response = this.responseText;
			var data = JSON.parse(server_response);
			for(var item in data){
				console.log(item+"==>"+data[item]);
				display_span.innerHTML = item+"==>"+data[item];
			}
		}else{
			alert(this.status+"==>"+this.responseText);
		}
		
	}
	var payload = new FormData();
	payload.append('convert_dollar','');
	req.send(payload);
}