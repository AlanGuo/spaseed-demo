

module.exports = React.createClass(
{displayName: "exports",
    getInitialState: function() {
        return {};
    },
    componentDidMount:function(){
        ThisApp.emit('nobounce',{Node:React.findDOMNode(this)});
    },
    render: function() {
        return (
            React.createElement("div", {className: "content", style: this.props.style, "data-scroll": "down,up"}, 
                
        		this.props.children
                
        	)
        );
    }
});

