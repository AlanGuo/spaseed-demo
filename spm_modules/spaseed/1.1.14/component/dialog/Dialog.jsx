'use strict';

define(function (require, exports, module) {
	var DialogButton = require('DialogButton');
	module.exports = React.createClass({
		hide:function(options){
		},
	    render: function(){
        	return (
        		<div className="dialog">
		            <div className='cont-title'>
		            	{this.props.title}
					</div>
					<div className='cont-wrapper'>
						<div className='text-content'>{this.props.text}</div>
					</div>
					<div className='buttonpannel'>
						{
							this.props.buttons.map(function(child){
								return <DialogButton onClick={this.hide}>child</DialogButton>;
							})
						}
					</div>
				</div>
            );
	    }
	});

});

