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

class PreferenceCard extends Component {
    state = {
        showForm: false,
        formValue: "",
        descriptionValue: "",
        linkValue: "",
    };

    static defaultProps = {
        name: 'stranger',
        imgUrl: '',
    };


    componentWillMount() {
    }

    render() {
        const { name, imgUrl } = this.props;

        return (
        <div className="pref-card">
            <div className="pref-img"><img className="pref-pic" src={imgUrl || '' } /></div>
            <div className="pref-name">{name || 'Digital'}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PreferenceCard);
