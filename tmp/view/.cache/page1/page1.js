/*TMODJS:{"version":1,"md5":"2956dc0aabe9a52f5ee16d653c93ec2f"}*/
template('page1/page1',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1 data-click-event="tt_click">';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <div bind-content="detail"></div> ';
return new String($out);
});