/*TMODJS:{"version":4,"md5":"4288d2d0c5d757b69e84b2b752d1d34b"}*/
template('page3/page3',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <ul class="menu submenu"> <li><a href="/page3/index" data-event="nav">/page3/index</a></li> <li><a href="/page3/other" data-event="nav">/page3/other</a></li> </ul> <div id="subcontainer" class="subcontainer"></div> ';
return new String($out);
});