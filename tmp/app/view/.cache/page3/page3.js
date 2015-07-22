/*TMODJS:{"version":2,"md5":"756c9643fbb9c1a6573e0a3e01cd0017"}*/
template('page3/page3',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <ul class="menu submenu"> <li><a data-href="/page3/index" data-click-event="router">/page3/index</a></li> <li><a data-href="/page3/other" data-click-event="router">/page3/other</a></li> </ul> <div id="subcontainer" class="subcontainer"></div> ';
return new String($out);
});