
var List = require('Mixin.List')
module.exports = React.createClass(
{displayName: "exports",
    mixins:[List],
    render: function() {

        var ListViewRow = this.props.ListViewRow;

    	return (
            React.createElement("ul", {className: "table-view"}, 
            
                this.state.loading?
                React.createElement("h3", {className: "title"}, 
                    React.createElement("span", {className: "icon-refresh"})
                ) :
                false, 
            
            
                
                this.state.items.map(function(row){
                    return React.createElement(ListViewRow, React.__spread({key: row.id},  row))
                }.bind(this))
               
            
            ) 
        );
    }
});

