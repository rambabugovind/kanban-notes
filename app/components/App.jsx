import React, { Component } from 'react';
import Notes from './Notes';
import uuid from 'uuid';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do Laundry'
                },
                {
                    id: uuid.v4(),
                    task: 'Complete React'
                }
            ]
        };
    }

    handleChange = event => {
        this.setState({
          name: event.target.value
        });
    };

    render() {
        return (
            <div onChange={this.handleChange} onClick={this.deleteNote}>
                <h2>Hello {this.state.name}</h2>
                <button onClick={this.addNote}>+</button>
                {/* Normally addNote fun should be "bound" but since we declare addNote as an arrow fun, 
            explicit binding is not required*/}
                <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
            </div>
        );
    }
    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New Task'
            }])
        })
    }
    deleteNote = (id) => (e) => {
        // Avoid bubbling to edit
        e.stopPropagation();   
        this.setState({
          notes: this.state.notes.filter(note => note.id !== id)
        });
    }
}

export default App;