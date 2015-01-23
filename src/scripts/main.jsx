'use strict';

var React = require( 'react' );
var router = require( 'director' ).Router();

var itemStore = require( './stores/itemStore' );
var Week = require( './components/week.jsx' );
var Nav = require( './components/nav.jsx' );

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
        router.on( '/:category', this.home );
        // router.on( '/:category', this.filter );

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

    say: function( something ) {
        console.log( this.state.title, 'says', something );
    },


    render: function() {

        console.log( this.state.title );
        console.log( this.props );



        var weeks = this.props.items.map( ( week, index ) => {
            this.say( 'week' );
            return (
                <Week items={ week } index={ index } />
            );
        });

        return (
            <div>
                <Nav />
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
