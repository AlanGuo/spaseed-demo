
module.exports = React.createClass(
{displayName: "exports",
    render: function() {

    	return (
    		React.createElement("div", {className: "slider"}, 
			  React.createElement("div", {className: "slide-group"}, 
			  	
			  		this.props.items.map(function(item){
		                return React.createElement(SliderItem, React.__spread({},  item));
		    		}.bind(this))
			  	
			  )
			)
    	);
    }
});

