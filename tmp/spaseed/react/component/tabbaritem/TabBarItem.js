
module.exports = React.createClass(
{displayName: "exports",
    onTouchStart:function(event){
        ThisApp.emit('router',{router:this.props.router});
    },
    render: function() {
		   return (
      		React.createElement("a", {
      			className: "tab-item "+(this.props.active?'active':''), 
      			onTouchStart: this.onTouchStart
      		}, 
  				 React.createElement("span", {className: "icon icon-"+this.props.icon}), 
  				 React.createElement("span", {className: "tab-label"}, this.props.name)
			   )
	     )
    }
});

