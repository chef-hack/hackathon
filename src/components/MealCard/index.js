import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';
import {fetchToDos, addToDo, removeCourse, updateToDo} from "../../actions/todoAction";

import './index.css';

class MealCard extends Component {

    static defaultProps = {
        name: 'Digital Better',
        title: 'Millions of Wi-Fi hotspots',
        description: 'Three products that can be used independently or combined together for your company’s needs.',
        imgUrl: 'https://a.imge.to/2019/07/19/51PCf.png',
    };

    render() {
        const { name, imgUrl, description, title  } = this.props;

        return (
        <div className="meal-card">
            <div className="meal-detail">
                <div className="meal-name">
                    {name}
                </div>
                <div className="meal-title">
                    {title}
                </div>
                <div className="meal-dedcription">
                    {description}
                </div>
            </div>
            <div className="meal-img">
                <img className="meal-pic" src={imgUrl} />
            </div>
        </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        isFetching: state.todos.isFetching,
    };
};

export default connect(mapStateToProps, null)(MealCard);
