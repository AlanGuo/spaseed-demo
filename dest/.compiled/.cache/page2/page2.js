/*TMODJS:{"version":2,"md5":"465b405bb54c610031f213aa80661be9"}*/
template('page2/page2',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+=' <template name="TEMPLATE.MAIN"> <h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> </template> ';
return new String($out);
});