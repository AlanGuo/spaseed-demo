
module.exports = React.createClass(
{displayName: "exports",
    render: function() {
        return (  	
            React.createElement("li", {className: "table-view-cell", onClick: this.onClickItem, "data-effect": "left", "data-click": "router", "data-router": this.props.router}, 
                React.createElement("a", {className: "navigate-right translate3d", "data-scroll": "left,right"}, 
			      this.props.text, 
			      React.createElement("div", {className: "drawer"}, 
			        "删除"
			      )
			    )
            )
        )       
    }
});
