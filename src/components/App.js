import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1>Books N' Roses: Appetite for Instruction</h1>
                        <BookList/>
                        <BookDetail/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
