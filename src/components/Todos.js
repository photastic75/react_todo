import React, {Component} from 'react';

class Todos extends Component {
    componentDidUpdate () {
        this.props.inputElement.current.focus(); //Refs access DOM from components 
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Task" 
                        ref={this.props.inputElement} 
                        value={this.props.currentItem.text} 
                        onChange={this.props.userInput}
                        />
                        <button type="submit"> Add To Do </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Todos;