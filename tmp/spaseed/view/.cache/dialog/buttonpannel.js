/*TMODJS:{"version":1,"md5":"380a474c93dac81c425331e95fab236d"}*/
template('dialog/buttonpannel',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,buttons=$data.buttons,$each=$utils.$each,item=$data.item,index=$data.index,$index=$data.$index,$escape=$utils.$escape,$out='';if(buttons.length==2){
$out+=' ';
$each(buttons,function(item,index,$index){
$out+=' <a data-click-event="';
$out+=$escape(item.event);
$out+='" class="btn btn-';
$out+=$escape(index);
$out+='">';
$out+=$escape(item.text);
$out+='</a> ';
});
$out+=' ';
}else{
$out+=' <a data-click-event="';
$out+=$escape(buttons[0].event);
$out+='" class="btn btn-1">';
$out+=$escape(buttons[0].text||'确定');
$out+='</a> ';
}
return new String($out);
});