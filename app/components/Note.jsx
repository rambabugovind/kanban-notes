import React, { Component } from 'react';


class Note extends Component {
    render() {
        return(
            <div>
                <span>{this.props.note.task}</span>
                <button onClick={this.props.deleteNote(this.props.note.id)}>x</button>
            </div>
        );
    }
}

export default Note;