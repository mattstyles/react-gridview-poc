'use strict';

var React = require( 'react/addons' );

module.exports = React.createClass({


    render: function() {

        var style = {
            height: window.innerHeight
        };

        return (
            <nav style={ style }>
                <ul>
                    <li><a href='#/shuffle'>Shuffle</a></li>
                    <li><a href='#/organise'>Organise</a></li>
                    <li><a href='#/move'>Move</a></li>
                    <li><a href='#/option'>Option</a></li>
                    <li><a href='#/random'>Random</a></li>
                    <li><a href='#/fold'>Fold</a></li>
                    <li><a href='#/origin'>Origin</a></li>
                    <li><a href='#/foo'>Foo</a></li>
                    <li><a href='#/bar'>Bar</a></li>
                </ul>
            </nav>
        );

    }

});
