import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';


Meteor.startup(() => {

    let title = 'Did ths work?!';

    let jsx = (

        <div>
            <form>
                <input type='text' name='movieTitle' placeholder='Search for Movie'/>
                <button>Search Movie</button>
            </form>
        </div>

    );

    ReactDOM.render(jsx, document.getElementById('app'));

});