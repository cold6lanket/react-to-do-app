/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        const {label, 
               onDelete, 
               onToggleLike, 
               onToggleImportant, 
               important, 
               like
            } = this.props;
        
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-check"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}



