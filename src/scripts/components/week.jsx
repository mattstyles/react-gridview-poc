'use strict';


var React = require( 'react' );
var random = require( 'lodash.random' );

var ItemTale = require( './itemTale.jsx' );
var ItemNews = require( './itemNews.jsx' );
var ItemAction = require( './itemAction.jsx' );


module.exports = React.createClass({

    getPos: function( index, choice ) {
        var positions = [
            [
                {
                    left: 0,
                    top: 0
                },
                {
                    left: '33.333%',
                    top: 0,
                    double: true
                },
                {
                    left: 0,
                    top: '33.333%',
                },
                {
                    left: '66.666%',
                    top: '33.333%',
                    double: true
                }
            ],
            [
                {
                    left: '66.666%',
                    top: '66.666%'
                },
                {
                    left: 0,
                    top: '66.666%',
                    double: true
                },
                {
                    left: 0,
                    top: 0,
                },
                {
                    left: '66.666%',
                    top: 0,
                    double: true
                }
            ],
            [
                {
                    left: 0,
                    top: 0
                },
                {
                    left: '33.333%',
                    top: '66.666%',
                    double: true
                },
                {
                    left: '33.333%',
                    top: 0,
                },
                {
                    left: 0,
                    top: '33.333%',
                    double: true
                }
            ]
        ];

        return positions[ choice ][ index ];
    },


    render: function() {

        var layout = [];
        var choice = random( 0, 2 );

        // @TODO: this is a terrible way to do this

        // If the props items contain multiple items then map them
        if ( this.props.items.items ) {
            layout = this.props.items.items.map( function( item, index ) {
                switch( item.category ) {
                    case 'tale':
                        return ( <ItemTale item={ item } position={ this.getPos( index, choice ) } /> );

                    case 'action':
                        return ( <ItemAction item={ item } position={ this.getPos( index, choice ) } /> );

                    case 'news':
                        return ( <ItemNews item={ item } position={ this.getPos( index, choice ) } /> );

                    default:
                        return ( <div>No Category</div> );
                }
            }, this );
        } else {
            // Otherwise the items array will contain a category of items
            layout = this.props.items.map( function( item ) {
                switch( item.category ) {
                    case 'tale':
                        return ( <ItemTale item={ item } /> );

                    case 'action':
                        return ( <ItemAction item={ item } /> );

                    case 'news':
                        return ( <ItemNews item={ item } /> );

                    default:
                        return ( <div>No Category</div> );
                }
            });
        }

        // Make it square, the size of the screen
        var style = {
            width: window.innerHeight,
            height: window.innerHeight,
            left: ( window.innerHeight * this.props.index ) + 200
        };



        return (
            <div className='week' style={ style }>
                { layout }
            </div>
        );
    }


});
