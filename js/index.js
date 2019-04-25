var URLs={
    rate:{
        mtd: 'POST', url:'https://jerm.000webhostapp.com',
},};

var DISPLAY_SPAN;

function currency_query(){
	DISPLAY_SPAN.innerHTML = 'Waiting for server response, now...';
	var req = new XMLHttpRequest();
	req.open(URLs.rate.mtd,URLs.rate.url,true);
	
	req.onreadystatechange = function (){
        if(this.readyState == 4){
            if(this.status===200){ // notice i use === instead of ==
                var data = JSON.parse(this.responseText);
                console.log("USD_UGX"+"==>"+data['USD_UGX']);
                DISPLAY_SPAN.innerHTML = "USD_UGX"+"==>"+data["USD_UGX"];
                alert('Lindirira!');
            }else if(!this.status){
                DISPLAY_SPAN.innerHTML = "URL ["+URLs.rate.url+"] does not exist";
            }
            else{
                DISPLAY_SPAN.innerHTML = "ERROR: "+this.status+"<br>"+"URL:"+this.responseURL;
                alert(this.status+"==>"+this.responseText);
            }
        }
	}
	var payload = new FormData();
	payload.append('convert_dollar','');
	req.send(payload);
}

window.onload = function(){
    DISPLAY_SPAN = document.getElementById("current_rate");
}