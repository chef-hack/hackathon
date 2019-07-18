import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { simpleAction } from '../actions/simpleAction';
import {fetchToDos, addToDo, removeCourse, updateToDo} from "../actions/todoAction";

import './index.css';

class MyList extends Component {
    state = {
        showForm: false,
        formValue: "",
        descriptionValue: "",
        linkValue: "",
    };

    inputChange = (e , indexName) => {
        let formValues = {};
        formValues[indexName] = e.target.value;
        this.setState(formValues);
    };

    formSubmit = e => {
        console.log('submit!!');
        const { formValue, descriptionValue, linkValue } = this.state;
        const {addToDo} = this.props;
        e.preventDefault();
        const savedCourse = {
            name: formValue,
            title: formValue,
            description: descriptionValue,
            link: linkValue,
        };
        addToDo(savedCourse);
        this.setState({formValue: ""});
    };

    componentWillMount() {
        this.props.fetchToDos();
    }

    updateToDo = (course) => {
        console.log('UPDATE : ');
        console.log(course);
        this.props.updateToDo(course);
    };

    removeCourse = (courseId) => {
        this.props.updateToDo(courseId);
        console.log('REMOVE : ' + courseId);
    };

    renderForm = () => {
        const { formValue, descriptionValue, linkValue } = this.state;

        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <i>add</i>
                        <input value={formValue} onChange={(e)=>this.inputChange(e,'formValue')} id="toDoNext" type="text" placeholder="name"/><hr/>
                        <i>desc</i>
                        <input value={descriptionValue} onChange={(e)=>this.inputChange(e,'descriptionValue')} id="description" type="text" placeholder="description"/><hr/>
                        <i>link</i>
                        <input value={linkValue} onChange={(e)=>this.inputChange(e,'linkValue')} id="link" type="text" placeholder="link"/><hr/>
                        <Button onClick={this.formSubmit}>Submit</Button>
                        <label htmlFor="toDoNext">What Next?</label>
                    </div>
                </form>
            </div>
        );
    };

    rowClassNameFormat = (row, rowIdx) => {
        return rowIdx % 1 === 0 ? 'row-even' : 'row-odd';
    };

    renderRow = () => {
        const { todos } = this.props;
        return todos.map((item,i) =>
            (<div className="row" key={item.id}>
                    <div className="column id">{item.id}</div>
                    <div className="column title">{item.title}</div>
                    <div className="column description">{item.description}</div>
                    <div className="column link"><Link to={'/course/' + item.id}>Detail</Link></div>
                    <div className="column action">
                        <Button onClick={()=> this.removeCourse(item.id)}>Remove</Button>
                        <Button onClick={()=> this.updateToDo(item)}>Update</Button>
                    </div>
            </div>
            )
        );
    }

    renderToDo() {
        const { todos, isFetching } = this.props;
        console.log('---todos--');
        console.log(todos);
        return (
            <div className="todo-list">
                {
                    isFetching ?
                        <div className="loading">
                            <Loader type="TailSpin" color="#00BFFF" height="30" width="30"/>
                        </div>:
                        <div className="table-display">
                        <div className="header-display">
                            <div className="header">ID</div>
                            <div className="header">Name</div>
                            <div className="header">Description</div>
                            <div className="header">Link</div>
                            <div className="header">Action</div>
                        </div>
                            <div className="content">
                                {this.renderRow()}
                            </div>
                        </div>
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>{this.renderForm()}</div>
                <div>{this.renderToDo()}</div>
            </div>

        );
    }

}

const mappedData = (data) => {
    return _.map(data, (value, key) => {
        return {
            id: key,
            title: value.title,
            description: value.description,
            link: value.link,
        }
    })
};

const mapStateToProps = state => {
    return {
        todos: mappedData(state.todos.data),
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

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
