$(function(){
	$(".pics_l img").click(function(){
		var picsrc=$(this)[0].src;
		// console.log(picsrc);
		$(".tanpic").show();
        $(".changepic img").attr("src",picsrc);
	});
	$(".pics_c img").click(function(){
		var picsrc=$(this)[0].src;
		// console.log(picsrc);
		$(".tanpic").show();
        $(".changepic img").attr("src",picsrc);
	});
	$(".pics_r img").click(function(){
		var picsrc=$(this)[0].src;
		// console.log(picsrc);
		$(".tanpic").show();
        $(".changepic img").attr("src",picsrc);
	});
	$(".tanpic_close").click(function(){
		$(".tanpic").hide();
	});
});