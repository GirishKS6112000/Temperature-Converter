function convert(){
		var num = document.getElementById("num").value;
		var myselect= document.getElementById("myselect");
		var val = myselect.options[myselect.selectedIndex].value;
		
		function celtofah(n){
			let fah = (n*9/5) +32
			return fah
		}

		function fahtocel(n){
			let cel = 5/9*(n-32)
			return cel
		}



		var result;

		if(val==="cel"){
		result=celtofah(num);
		document.getElementById("info").innerText= "Fahraneit"+"="+result;
		}else{
			result=fahtocel(num);
		document.getElementById("info").innerText= "Celcius"+"="+result;
		}

	}

