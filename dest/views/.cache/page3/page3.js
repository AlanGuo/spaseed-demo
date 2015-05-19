/*TMODJS:{"version":1,"md5":"7bba2f0af8d95901f1cba307db323438"}*/
template('page3/page3',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <ul class="menu submenu"> <li><a data-href="/page3/index" data-event="router">/page3/index</a></li> <li><a data-href="/page3/other" data-event="router">/page3/other</a></li> </ul> <div id="subcontainer" class="subcontainer"></div> ';
return new String($out);
});