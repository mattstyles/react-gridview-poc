'use strict';


var React = require( 'react' );

var ItemTale = require( './itemTale.jsx' );
var ItemNews = require( './itemNews.jsx' );
var ItemAction = require( './itemAction.jsx' );


module.exports = React.createClass({


    render: function() {

        var layout = [];

        // @TODO: this is a terrible way to do this

        // If the props items contain multiple items then map them
        if ( this.props.items.items ) {
            layout = this.props.items.items.map( function( item ) {
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



        return (
            <div className='week'>
                <h1>{ this.props.items.week }</h1>
                { layout }
            </div>
        );
    }


});
