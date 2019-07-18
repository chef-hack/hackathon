import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { simpleAction } from '../actions/simpleAction';
import {fetchToDos, addToDo, removeCourse, updateToDo, getCourseById} from "../actions/todoAction";

import '../components/index.css';

class UpdateCourse extends Component {

    state = {
        nameValue: "",
        descriptionValue: "",
        linkValue: "",
    };

    componentDidMount() {
        const {match: { params }} = this.props;
        this.props.getCourseById(params.courseId);
    };

    componentDidUpdate(prevProps) {
        console.log('this.props');
        console.log(this.props);
        console.log('prevProps');
        console.log(prevProps);
        if (!prevProps.courseDetail.id && this.props.courseDetail.id) {
            const { courseDetail } = this.props;
            console.log('--courseDetail--');
            console.log(courseDetail);
            this.setState(
                {
                    nameValue: courseDetail.title,
                    descriptionValue: courseDetail.description,
                    linkValue: courseDetail.link,
                });
        }
    };

    inputChange = (e, indexName) => {
        let formValues = {};
        formValues[indexName] = e.target.value;
        this.setState(formValues);
    };

    formSubmit = () => {
        console.log('formSubmit UPDATE');
        const { nameValue, descriptionValue, linkValue } = this.state;
        const { courseDetail } = this.props;
        const updatedCourse = {
            id: courseDetail.id,
            name: nameValue,
            description: descriptionValue,
            link: linkValue,
        };
        this.props.updateToDo(updatedCourse);
    };

    render() {
        const { courseDetail } = this.props;
        const { nameValue, descriptionValue, linkValue } = this.state;
        return (
            <div>
                <div>Name :
                    <input value={nameValue} onChange={(e)=>this.inputChange(e,'nameValue')} id="name" type="text" placeholder="name"/>
                </div>
                <hr/>
                <div>Description :
                    <input value={descriptionValue} onChange={(e)=>this.inputChange(e,'descriptionValue')} id="description" type="text" placeholder="description"/>
                </div>
                <hr/>
                <div>Link :
                    <input value={linkValue} onChange={(e)=>this.inputChange(e,'linkValue')} id="link" type="text" placeholder="link"/>
                </div>
                <hr/>
                <Button onClick={this.formSubmit}>Submit</Button>
            </div>

        );
    }

}

const mappedData = (data) => {
        return {
            id: data.id,
            title: data.name,
            description: data.description,
            link: data.link,
        }
};

const mapStateToProps = state => {
    return {
        courseDetail: mappedData(state.todos.courseDetail),
    };
};

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    fetchToDos: () => dispatch(fetchToDos()),
    updateToDo: (updatedCourse) => dispatch(updateToDo(updatedCourse)),
    getCourseById: (courseId) => dispatch(getCourseById(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCourse);
