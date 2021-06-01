import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn react', important: true, id: 1},
                {label: 'Thats cool', important: false, id: 2},
                {label: 'I want to be successful', important: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const newArr = data.filter(elem => elem.id !== id);

            return {
                data: newArr
            }
        });
    }

    onAdd(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost(items, filter) {
        if (filter === 'all') {
            return items
        } else {
            return items.filter(item => item.important);
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }
    
    render() {

        const liked = this.state.data.filter(item => item.important).length;
        const allPosts = this.state.data.length;

        const visiblePosts = this.filterPost(this.searchPost(this.state.data, this.state.term), this.state.filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={this.state.filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList 
                    onDelete={this.deleteItem} 
                    posts={visiblePosts}
                    onToggleImportant={this.onToggleImportant}
                />
                <PostAddForm
                    onAdd={this.onAdd} />
            </div>
        )
    }

}

