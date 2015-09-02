/*TMODJS:{"version":20,"md5":"14329feac5cf721c76e25930306c2d75"}*/
template('page1/page1',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h1>';
$out+=$escape(data.title);
$out+='</h1> <div>';
$out+=$escape(data.description);
$out+='</div> <br> <div data-click-event="tt_click">点我+1: <span bind-content="{detail.num.c}+{detail.num.d}"></span></div> <br> <div data-click-event="opendialog">弹出对话框</div> <br> <div data-click-event="openerrortips">弹出轻量错误提示</div> <br> <div data-click-event="showloading">显示loading</div> <br> ';
return new String($out);
});