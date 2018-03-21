import React from 'react';

const Search = (props) => {
    return (<form>
        <div className="input-field">
            <input id="search" type="search" required onKeyUp={props.handleSearch} />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
        </div>
    </form>)
}

export default Search;