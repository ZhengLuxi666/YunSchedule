var tasks = {
	"tasks": [
		{
			"name": "吴芷妍",
			"password": "13579"
		},
		{
			"name": "郑禄曦",
			"password": "1357924680"
		}
	]
}

document.querySelector("#start").onclick = function(){
	document.querySelector("#message").innerHTML = "";
	document.querySelector("#taskname").style.border = "3px solid #FFF";
	document.querySelector("#taskpassword").style.border = "3px solid #FFF";
	if( !document.querySelector("#taskname").value || !document.querySelector("#taskpassword").value ){
		document.querySelector("#message").innerHTML = "信息未填写完整";
	}
	if( !document.querySelector("#taskname").value ) document.querySelector("#taskname").style.border = "3px solid red";
	if( !document.querySelector("#taskpassword").value ) document.querySelector("#taskpassword").style.border = "3px solid red";

	if( document.querySelector("#taskname").value && document.querySelector("#taskpassword").value ){
		for( let i = 0 ; i < tasks["tasks"].length ; i ++ ){
			if( tasks.tasks[i].name != document.querySelector("#taskname").value ){
				document.querySelector("#message").innerHTML = "用户名或密码错误";
			}else{
				if( tasks.tasks[i].password != document.querySelector("#taskpassword").value ){
					document.querySelector("#message").innerHTML = "用户名或密码错误";
				}else{
					document.querySelector("#message").innerHTML = "";
					window.open("./static/" + document.querySelector("#taskname").value + "/main.html",target="_self");
					sessionStorage.setItem( document.querySelector("#taskname").value, document.querySelector("#taskpassword").value );
				}
			}
		}
	}
}