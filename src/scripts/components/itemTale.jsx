'use strict';

var React = require( 'react/addons' );

module.exports = React.createClass({

    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            item: true,
            tale: true,
            double: this.props.position.double,
            hidden: this.props.hidden
        });

        var style = {
            left: this.props.position.left,
            top: this.props.position.top
        };

        return (
            <div className={ classes } style={ style }>
                <img className='fit' src={ this.props.item.image } />
                <div className='content'>
                    <h2>{ this.props.item.author }</h2>
                    <p>{ this.props.item.role }</p>
                </div>
            </div>
        );

    }

});
