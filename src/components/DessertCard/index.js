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
import AvatarCoach from "../../components/AvatarCoach";

class DessertCard extends Component {
    state = {
        showForm: false,
        formValue: "",
        descriptionValue: "",
        linkValue: "",
    };

    static defaultProps = {
        name: 'Software development tool used by teams.',
        imgUrl: 'https://a.imge.to/2019/07/19/5EQPR.png',
    };

    componentWillMount() {
    }

    render() {
        const { name, imgUrl } = this.props;

        return (
        <div className="dessert-card">
            <div className="avatar">
                <AvatarCoach />
            </div>
            <div className="dessert-img">
                <img className="dessert-pic" src={imgUrl} />
            </div>
            <div className="dessert-name">{name}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DessertCard);
