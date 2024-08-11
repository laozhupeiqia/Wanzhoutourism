 
 // 介绍部分
 $(".jss2").hide(1)
$(".jss3").hide(1)
$("#js1").hover(function(){
			$(".jss1").show(1)
			$(".jss2,.jss3").hide(1)
				})
$("#js2").hover(function(){
			$(".jss2").show(1)
			$(".jss1,.jss3").hide(1)
				})
$("#js3").hover(function(){
			$(".jss3").show(1)
			$(".jss1,.jss2").hide(1)
				})	
