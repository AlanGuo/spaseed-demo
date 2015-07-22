'use strict';

define(function (require, exports, module) {
	var DialogButton = require('DialogButton');
	module.exports = React.createClass({displayName: "exports",
		hide:function(){
			React.findDOMNode(this.refs.dialog).style.display = 'none';
		},
		show:function(){
			React.findDOMNode(this.refs.dialog).style.display = '';
		},
	    render: function(){
        	return (
        		React.createElement("div", {className: "dialog", ref: "dialog"}, 
		            React.createElement("div", {className: "cont-title"}, 
		            	this.props.title
					), 
					React.createElement("div", {className: "cont-wrapper"}, 
						React.createElement("div", {className: "text-content"}, this.props.text)
					), 
					React.createElement("div", {className: "buttonpannel"}, 
						
							this.props.buttons.map(function(child,i){
								if(this.props.buttons.length>1 && i==0){
									return React.createElement(DialogButton, {primary: true, onClick: this.hide}, child);
								}
								else{
									return React.createElement(DialogButton, {onClick: this.hide}, child);
								}
							}.bind(this))
						
					)
				)
            );
	    }
	});

});

