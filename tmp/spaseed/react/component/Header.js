

module.exports = React.createClass(
{displayName: "exports",
    //title leftButton  rightButton navBar
    render: function() {
    	return (	
        	React.createElement("header", {className: "bar bar-nav"}, 
        		React.createElement("button", {className: "btn btn-link btn-nav pull-left", "data-click": "back"}, 
			    	React.createElement("span", {className: "icon icon-"+this.props.button.left})	
			 	), 
				React.createElement("button", {className: "btn btn-link btn-nav pull-right"}, 
					React.createElement("span", {className: "icon icon-"+this.props.button.right})
			 	), 
				this.props.navBar?this.props.navBar:(React.createElement("h1", {className: "title"}, this.props.title))
			)
		);
    }
});

