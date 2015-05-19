/*TMODJS:{"version":1,"md5":"75f60833a1a67d9f77b0952b90e1fb6b"}*/
template('page1/page1',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1 data-event="tt_click">';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> ';
return new String($out);
});