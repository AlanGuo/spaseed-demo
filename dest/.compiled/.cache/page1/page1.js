/*TMODJS:{"version":2,"md5":"618bb5e2a7ac0f12fe73993be6b4fa35"}*/
template('page1/page1',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1 data-event="tt_click">';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> ';
return new String($out);
});