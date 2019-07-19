import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { simpleAction } from '../../actions/simpleAction';
import {fetchToDos, addToDo, removeCourse, updateToDo} from "../../actions/todoAction";

import './index.css';

class AvatarCoach extends Component {
    static defaultProps = {
        name: 'Viella Malkovich',
        position: 'Creative Director at Johnson',
        imgUrl: 'https://b.imge.to/2019/07/19/5EW5H.png',
    };

    render() {
        const { name, imgUrl, position  } = this.props;

        return (
        <div className="avatar-card">
            <div className="avatar-img">
                <img className="avatar-pic" src={imgUrl || '' } />
            </div>
            <div className="avatar-detail">
                <div className="avatar-name">
                    {name}
                </div>
                <div className="avatar-description">
                    {position}
                </div>
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

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    fetchToDos: () => dispatch(fetchToDos()),
    addToDo: (item) => dispatch(addToDo(item)),
    removeCourse: (id) => dispatch(removeCourse(id)),
    updateToDo: (updatedCourse) => dispatch(updateToDo(updatedCourse)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarCoach);
