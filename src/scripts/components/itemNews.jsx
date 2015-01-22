'use strict';

var React = require( 'react/addons' );

module.exports = React.createClass({

    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            item: true,
            news: true,
            double: this.props.position.double,
            hidden: this.props.hidden
        });

        var style = {
            left: this.props.position.left,
            top: this.props.position.top
        };

        return (
            <div className={ classes } style={ style }>
                <h2>News</h2>
            </div>
        );

    }

});
