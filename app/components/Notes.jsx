import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {

    render(){
        return(
            <ul>
                {console.log(this.props.notes)}
                <input
                    placeholder='Type Your Name'
                />
                {this.props.notes.map(note => <li key={note.id}><Note note={note} deleteNote={this.props.deleteNote} />
                {/* <button onClick={this.props.deleteNote(note.id)}>x</button> */}
                </li>)}
            </ul>
        );
    }
}

export default Notes;