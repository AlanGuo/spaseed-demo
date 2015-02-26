/*TMODJS:{"version":2,"md5":"67f61474e4abc9bdb83f68f7b3055bf9"}*/
template('page3/page3',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <ul class="menu submenu"> <li><a href="/page3/index" data-event="nav">/page3/index</a></li> <li><a href="/page3/other" data-event="nav">/page3/other</a></li> </ul> <div id="subcontainer" class="subcontainer"></div> ';
return new String($out);
});