
module.exports = React.createClass(
{displayName: "exports",
    render: function() {
        return (
            React.createElement("div", {className: "card"}, this.props.children)
        );       
    }
});
