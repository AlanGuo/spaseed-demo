
module.exports = React.createClass(
{displayName: "exports",
    render: function() {
        return (
            React.createElement("div", {className: "slide"}, 
              React.createElement(Image, React.__spread({},  imageSource)), 
		      React.createElement("span", {className: "slide-text"}, 
		        React.createElement("span", {className: "icon icon-left-nav"}), 
		        this.props.text
		      )
		    )
        );       
    }
});
