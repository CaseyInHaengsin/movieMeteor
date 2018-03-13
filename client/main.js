import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';


const getData = (e) => {
  let movieTitle = e.target.movieTitle.value;
  console.log(movieTitle);
};

Meteor.startup(() => {

    let title = 'Did ths work?!';

    let jsx = (

        <div>
            <form onSubmit={getData}>
                <input type='text' name='movieTitle' placeholder='Search for Movie'/>
                <button>Search Movie</button>
            </form>
        </div>

    );

    ReactDOM.render(jsx, document.getElementById('app'));

});