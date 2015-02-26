/*TMODJS:{"version":2,"md5":"a3683b175a182cc8b21c5539a2a00e1a"}*/
template('page2/page2',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> ';
return new String($out);
});