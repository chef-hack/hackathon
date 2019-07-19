import React, { Component } from 'react';
import AvatarCoach from '../../components/AvatarCoach';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';
import {fetchToDos, addToDo, removeCourse, updateToDo} from "../../actions/todoAction";

import './index.css';

class CourseCard extends Component {

    static defaultProps = {
        name: 'Email Marketing',
        description: 'Foundation works with the tools and services you already use every day. Learn more',
        imgUrl: 'https://b.imge.to/2019/07/19/5qQK6.png',
        advisorImg: 'https://b.imge.to/2019/07/19/5qQK6.png',
        advisorName: 'Viella Malkovich',
        advisorPosition: 'Creative Director at Johnson',
    };


    componentWillMount() {
    }

    render() {
        const { name, imgUrl, description, advisorImg, advisorName, advisorPosition  } = this.props;

        return (
        <div className="course-card">
            <div className="course-img">
                <img className="pref-pic" src={imgUrl || '' } />
            </div>
            <div className="course-detail">
                <div className="avatar">
                    <AvatarCoach />
                </div>
                <div className="course-name">
                    {name}
                </div>
                <div className="course-dedcription">
                    <div className="description">
                        {description}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);
