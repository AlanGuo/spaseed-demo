/*TMODJS:{"version":2,"md5":"cb52b6f568799dcafb63ad656466e0b8"}*/
template('page2/page2',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> ';
return new String($out);
});