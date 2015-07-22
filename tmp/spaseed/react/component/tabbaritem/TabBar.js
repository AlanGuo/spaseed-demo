
var TabBarItem = require('TabBarItem');

module.exports = React.createClass(
{displayName: "exports",
    render: function() {

    	return React.createElement("nav", {className: "bar bar-tab", style: this.props.style}, 
    	
    		this.props.columns.map(function(column){
                return React.createElement(TabBarItem, React.__spread({key: column.id},  column));
    		}.bind(this))
    	
    	);
    }
});

