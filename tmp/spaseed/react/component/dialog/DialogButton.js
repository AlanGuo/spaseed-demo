'use strict';


module.exports = React.createClass({displayName: "exports",
    render: function(){
    	return (
        	React.createElement("a", {className: this.props.primary?'btn btn-0':'btn'}, this.props.children||'确定')
        );
    }
});

