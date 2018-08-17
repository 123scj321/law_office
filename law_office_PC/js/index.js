

// 法律问题免费咨询
$('#legal_l_list li').hover(function(){
    $(this).find('.legal_bottom h6').css('background','#ef3333');
    $(this).find('.legal_bottom h6').css('border','1px solid #ef3333');
    $(this).find('.legal_bottom h6').css('color','#fff');
    $(this).css('box-shadow','0px 0px 10px #ef3333');
    $(this).animate({top:-25},200);
},function(){
    $(this).find('.legal_bottom h6').css('border','1px solid #ef3333');
    $(this).find('.legal_bottom h6').css('background','#ef3333');
    $(this).find('.legal_bottom h6').css('color','#fff');
    $(this).css('box-shadow','');
    $(this).animate({top:0},200);
})

$('#field_tr_list li').hover(function(){
    $(this).css('box-shadow','0px 0px 20px #000');
    $(this).css('color','#fff');
    $(this).animate({top:200},200);
},function(){
    $(this).css('box-shadow','');
    $(this).css('color','#333');
    $(this).animate({top:0},200);
})