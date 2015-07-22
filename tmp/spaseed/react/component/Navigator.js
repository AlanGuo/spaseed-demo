
var TabBar = require('TabBar');
var Header = require("Header");
var ScrollView = require('ScrollView');

module.exports = React.createClass(
{displayName: "exports",
    render: function() {
    	return (
    		React.createElement("div", null, 
    			React.createElement(Header, React.__spread({},  this.props.header)), 
                
                    this.props.scrollView.defaultScroll? React.createElement(ScrollView, React.__spread({},  this.props.scrollView), this.props.$):this.props.$, 
                
		        
				React.createElement(TabBar, React.__spread({},  this.props.tabBar))
			)
		);
    }
});

