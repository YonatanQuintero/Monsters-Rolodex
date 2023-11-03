import { Component } from "react";
import "./search-box.style.css"

class SearchBox extends Component {
    render() {  
        return (
            <input
                type="search"
                className="search-box"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
                autoFocus={true}
            />
        );  
    }
}

export default SearchBox;