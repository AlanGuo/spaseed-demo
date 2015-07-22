
function http(url,method,params,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		var ret = JSON.parse(xhr.responseText)
		callback(ret);
	}
    xhr.open(method,url,true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);
}


module.exports = {
	get:function (url,callback) {
		http(url,'GET',null,function(ret){
			callback.call(this,ret)
		}.bind(this));
	},
	post:function (url,params,callback) {
		var arr = [];
		for(var p in params){
			arr.push(p+'='+encodeURIComponent(params[p]));
		}
		http(url,'POST',arr.join('&'),function(ret){
			callback.call(this,ret)
		}.bind(this));
	}
}



var SetInterval = require('Mixin.SetInterval')
var Ajax = require('Mixin.Ajax');
module.exports = {
  mixins:[SetInterval,Ajax],
    getInitialState: function() {
        return {
            items:[],
            loading:true
        };
    },
    componentDidMount:function () {
    	this.get(this.props.dataSource,function(ret){
            var list = ret.data.map(function(item){
                item.router = "/trend/thread";
                return item;
            })
    		this.setState({items:ret.data,loading:false})
    	})
    },
    componentDidUpdate:function(){
        ThisApp.emit('nobounce',{update:true});
    }
};
module.exports = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};