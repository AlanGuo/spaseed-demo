/*TMODJS:{"version":2,"md5":"e1770c3907f7f7e32bf02e521d0e5fb5"}*/
template('page3/page3',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+=' <template name="TEMPLATE.MAIN"> <h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <ul class="menu submenu"> <li><a href="/page3" data-event="nav">/page3/index</a></li> <li><a href="/page3/other" data-event="nav">/page3/other</a></li> </ul> <div id="subcontainer" class="subcontainer"></div> </template> ';
return new String($out);
});