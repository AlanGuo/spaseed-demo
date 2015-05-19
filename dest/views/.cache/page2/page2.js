/*TMODJS:{"version":1,"md5":"7e1e8eb511cb13c621041647331b4398"}*/
template('page2/page2',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> ';
return new String($out);
});