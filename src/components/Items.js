import React, {Component} from 'react';

class Items extends Component {
    createTask = item => {
        return(
            <li key = {item.key} >
                {item.text}
            </li>
        );
    }
    render() {
        const toDoEntries = this.props.entries //use props to pass data and event handlers from parent child 
        const listItems = toDoEntries.map(this.createTask)
        return(
            <ul>{listItems}</ul>
        );
    }
}

export default Items;