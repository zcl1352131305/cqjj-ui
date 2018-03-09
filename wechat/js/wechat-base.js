$(".weui-tabbar__item").on("click",function(){
	$(".weui-tabbar__label").css("color","#999");
	var color = "";
	if($(this).attr("id") == "main") color = "#1296db"
	if($(this).attr("id") == "recycle") color = "#17e124"
	if($(this).attr("id") == "merchant") color = "#e65d25"
	$(this).find("p").first().css("color",color)
	
	$("#main img").first().attr("src", $("#main img").first().attr("src").replace("-o",""))
	$("#recycle img").first().attr("src", $("#recycle img").first().attr("src").replace("-o",""))
	$("#merchant img").first().attr("src", $("#merchant img").first().attr("src").replace("-o",""))
	
	$("#main img").first().attr("src", $("#main img").first().attr("src").replace(".png","-o.png"))
	$("#recycle img").first().attr("src", $("#recycle img").first().attr("src").replace(".png","-o.png"))
	$("#merchant img").first().attr("src", $("#merchant img").first().attr("src").replace(".png","-o.png"))
	
	
	$(this).find("img").first().attr("src",$(this).find("img").first().attr("src").replace("-o","") )
	
})