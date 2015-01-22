'use strict';

var React = require( 'react' );

module.exports = React.createClass({

    render: function() {

        return (
            <div>
                <h2>Tale</h2>
                <p>{ this.props.item.author }</p>
                <img src={ this.props.item.image } />
            </div>
        );

    }

});
