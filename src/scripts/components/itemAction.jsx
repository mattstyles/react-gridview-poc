'use strict';

var React = require( 'react/addons' );

module.exports = React.createClass({

    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            item: true,
            action: true,
            hidden: this.props.hidden
        });

        var style = {
            left: this.props.position.left,
            top: this.props.position.top
        };

        return (
            <div className={ classes } style={ style }>
                <h2>Action</h2>
                <p>{ this.props.item.title }</p>
                <img className='fit' src={ this.props.item.image } />
            </div>
        );

    }

});
