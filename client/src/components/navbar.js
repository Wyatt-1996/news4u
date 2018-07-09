import React from 'react';

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            page: "News4U"
        }
    }

    filtersPage = () => {
        this.setState({
            page: "Filters"
        });
    }

    render() {
        return (
            <div className="navbar">
                <span className="filter-icon" onClick={() => this.filtersPage()} uk-icon="settings"></span>
                <h1 className="pg-title">{this.props.page}</h1>
                <div className="nav-right">
                    <span className="bookmark-icon" uk-icon="bookmark"></span>
                    <span className="search-icon" uk-icon="search"></span>
                </div>
            </div>
        );
    }
}

export default Navbar;