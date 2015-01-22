'use strict';

var React = require( 'react' );

module.exports = React.createClass({

    render: function() {

        return (
            <div>
                <h2>Action</h2>
                <p>{ this.props.item.title }</p>
                <img src={ this.props.item.image } />
            </div>
        );

    }

});
