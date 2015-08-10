/*TMODJS:{"version":5,"md5":"c47256f66329b5b8a64b26252cae294e"}*/
template('dialog/buttonpannel',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,buttons=$data.buttons,$each=$utils.$each,item=$data.item,index=$data.index,$index=$data.$index,$escape=$utils.$escape,$out='';if(buttons.length==2){
$out+=' ';
$each(buttons,function(item,index,$index){
$out+=' <a data-click-event="';
$out+=$escape(item.event||'hide');
$out+='" class="btn btn-';
$out+=$escape(index);
$out+='">';
$out+=$escape(item.text);
$out+='</a> ';
});
$out+=' ';
}else{
$out+=' <a data-click-event="';
$out+=$escape(buttons[0].event||'hide');
$out+='" class="btn btn-1">';
$out+=$escape(buttons[0].text||'确定');
$out+='</a> ';
}
return new String($out);
});