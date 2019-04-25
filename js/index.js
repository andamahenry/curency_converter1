var URLs={
    rate:{mtd: 'POST', url:'http://jerm.000webhostapp.com',},
    rtu:{mtd:'GET', url:'http://45.33.74.38:8890/get_config',},
};

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
            }else if(!this.status){
                DISPLAY_SPAN.innerHTML = "URL ["+URLs.rate.url+"] does not exist";
            }
            else{
                DISPLAY_SPAN.innerHTML = "ERROR: "+this.status+"<br>"+"URL:"+this.responseURL;
            }
        }
	}
	var payload = new FormData();
	payload.append('convert_dollar','');
	req.send(payload);
}

function get_config(){ // this is to test if all urls are broken
	var req = new XMLHttpRequest();
	req.open(URLs.rtu.mtd,URLs.rtu.url,true);
	
	req.onreadystatechange = function (){
        if(this.readyState == 4){
            if(this.status===200){alert("test-config link is Ok. problem is probably on the currency server");
            }else if(!this.status){alert("URL ["+URLs.rate.url+"] does not exist");
            }else{alert("failed to fetch config. this is strange");}
        }
	}
	var payload = new FormData();
	req.send(payload);
}

window.onload = function(){
    DISPLAY_SPAN = document.getElementById("current_rate");
    get_config();

}