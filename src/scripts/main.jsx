'use strict';

var React = require( 'react' );
var router = require( 'director' ).Router();

var itemStore = require( './stores/itemStore' );
var Week = require( './components/week.jsx' );

var App = React.createClass({

    getInitialState: function() {
        return {
            title: 'undef'
        };
    },

    componentWillMount: function() {

    },

    componentDidMount: function() {
        router.on( '/', this.home );
        router.on( '/:category', this.filter );

        router.init( '/' );
    },


    home: function() {
        this.setState({
            title: 'home'
        });

        itemStore.filter();
    },

    filter: function( filter ) {
        console.log( itemStore.get( filter ) );

        itemStore.filter( filter );
    },


    render: function() {

        console.log( this.state.title );
        console.log( this.props );

        var weeks = this.props.items.map( function( week ) {
            return (
                <Week items={ week } />
            );
        });

        return (
            <div>
                { weeks }
            </div>
        );
    }


});


function render( category ) {
    React.render(
        <App items={ itemStore.get( category ) }/>,
        document.getElementById( 'main' )
    );
}

itemStore.on( 'update', render );
render();
