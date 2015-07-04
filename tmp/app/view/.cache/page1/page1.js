/*TMODJS:{"version":1,"md5":"bcd5ee356cda8aea0f8ef51a2339feb9"}*/
template('page1/page1',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1 data-click-event="tt_click">';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <div bind-content="detail"></div> ';
return new String($out);
});