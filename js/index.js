function currency_query(){
	var display_span = document.getElementById("current_rate");
	display_span.innerHTML = 'Waiting for server response, now...';
	var req = new XMLHttpRequest();
	req.open('POST','http://jerm.000webhostapp.com',true);
	
	//req.onreadystatechange = function (){
	req.onload = function (){
		alert('Lindirira!');
		if(this.status==200 || this.readyState==4){
			var server_response = this.responseText;
			var data = JSON.parse(server_response);
			//for(var item in data){
			console.log("USD_UGX"+"==>"+data['USD_UGX']);
			display_span.innerHTML = "USD_UGX"+"==>"+data["USD_UGX"];
			//}
		}else{
			alert(this.status+"==>"+this.responseText);
		}
		
	}
	var payload = new FormData();
	payload.append('convert_dollar','');
	req.send(payload);
}