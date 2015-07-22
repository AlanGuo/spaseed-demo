
module.exports = React.createClass(
{displayName: "exports",
    render: function() {
        return (
            React.createElement("img", {src: this.props.src})
        );       
    }
});
