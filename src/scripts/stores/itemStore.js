'use strict';

var EventEmitter = require( 'events' ).EventEmitter;
var dispatcher = require( '../dispatchers/dispatcher' );


class ItemStore extends EventEmitter {

    constructor() {
        this.items = [];

        this.mockItems();
    }

    get( category ) {
        if ( !category ) {
            return this.items;
        }

        // filter by week - returns an array of week objects, filtered by category
        return this.items.map( function( week ) {
            var items = [];
            items = items.concat( week.items.reduce( function( arr, item ) {
                if ( item.category === category ) {
                    arr.push( item );
                }

                return arr;
            }, [] ));
            return items;
        });
    }

    filter( category ) {
        console.log( 'get', category );
        this.emit( 'update', category );
    }


    mockItems() {
        this.items = [
            {
                week: 1,
                items: [
                    {
                        category: 'tale',
                        author: 'Deborah Carre',
                        role: 'Shoemaker',
                        image: 'http://fillmurray.com/g/220/220'
                    },
                    {
                        category: 'tale',
                        author: 'Elmric Johnson',
                        role: 'Glassblower',
                        image: 'http://fillmurray.com/430/215'
                    },
                    {
                        category: 'action',
                        title: 'This is a headline',
                        summary: 'In today’s fast moving, technological world, there is still an incredibly important place for craftsmanship and attention to detail',
                        image: 'http://placekitten.com/g/520/520'
                    },
                    {
                        category: 'news',
                        title: '5 - 12 January 2015',
                        summary: 'Every week we’re putting together a list of our favourite crafts people',
                        items: [
                            {
                                source: 'Miss Whiskey',
                                title: 'WWW: Whiskey With Water'
                            },
                            {
                                source: 'The Malt Enthusiast',
                                title: 'We are feeling very enthusiastic about single malt'
                            },
                            {
                                source: 'The Whiskey Forum',
                                title: 'All the latest from Scotland and Ireland'
                            },
                            {
                                source: 'The Malt Master',
                                title: 'It’s all in blend'
                            }
                        ]
                    }
                ]
            },
            {
                week: 2,
                items: [
                    {
                        category: 'tale',
                        author: 'Gary Dean',
                        role: 'Cooper',
                        image: 'http://fillmurray.com/230/230'
                    },
                    {
                        category: 'tale',
                        author: 'Wayne Arthur Welchuck',
                        role: 'Silversmith',
                        image: 'http://fillmurray.com/350/175'
                    },
                    {
                        category: 'action',
                        title: 'This is a headline',
                        summary: 'In today’s fast moving, technological world, there is still an incredibly important place for craftsmanship and attention to detail',
                        image: 'http://lorempixel.com/500/500'
                    },
                    {
                        category: 'news',
                        title: '29 December 2014 - 4 January 2015',
                        summary: 'Every week we’re putting together a list of our favourite crafts people',
                        items: [
                            {
                                source: 'Miss Whiskey',
                                title: 'WWW: Whiskey With Water'
                            },
                            {
                                source: 'The Malt Enthusiast',
                                title: 'We are feeling very enthusiastic about single malt'
                            },
                            {
                                source: 'The Whiskey Forum',
                                title: 'All the latest from Scotland and Ireland'
                            },
                            {
                                source: 'The Malt Master',
                                title: 'It’s all in blend'
                            }
                        ]
                    }
                ]
            }

        ];
    }


}

module.exports = new ItemStore();
