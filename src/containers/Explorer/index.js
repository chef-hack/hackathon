import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import PreferenceCard from '../../components/PreferenceCard';
import CourseCard from '../../components/CourseCard';
import DessertCard from '../../components/DessertCard';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Container, Row, Col} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { simpleAction } from '../../actions/simpleAction';
import {fetchToDos, addToDo, removeCourse, updateToDo, getCourseById} from "../../actions/todoAction";

import './index.css';

const PrefTypes = {
    'DIGITAL' : 'DIGITAL',
    'CULTURE' : 'CULTURE',
    'MANAGEMENT' : 'MANAGEMENT',
    'HELPFUL' : 'HELPFUL',
};

const dessertCards = [
    {
        id: 'ds1',
        name: 'Software development tool used by teams.',
        imgUrl: 'https://a.imge.to/2019/07/19/5EofG.png',
    },{
        id: '2ds',
        name: 'Collaborate on code and manage your Git repositories.',
        imgUrl: 'https://a.imge.to/2019/07/19/5EODt.png',
    },{
        id: '3ggd',
        name: 'Organize your work in one place.',
        imgUrl: 'https://a.imge.to/2019/07/19/5EmTZ.png',
    }];

const prefCardTop = [
    {
        id: 1,
        name: 'Digital',
        imgUrl: 'https://a.imge.to/2019/07/19/5EQPR.png',
        type: PrefTypes.DIGITAL,
    },{
        id: 2,
        name: 'Cultural',
        imgUrl: 'https://a.imge.to/2019/07/19/5EwfV.png',
        type: PrefTypes.CULTURE,
    },{
        id: 3,
        name: 'Management',
        imgUrl: 'https://a.imge.to/2019/07/19/5EzuT.png',
        type: PrefTypes.MANAGEMENT,
    },{
        id: 4,
        name: 'Helpful Skills',
        imgUrl: 'https://a.imge.to/2019/07/19/5Flmr.jpg',
        type: PrefTypes.HELPFUL,
    }
];

const courseCards = [
    {
        id: 1,
        name: 'Digital',
        description: 'What is it about? Building a website for a startup that looks amazing is not a rocket science anymore.',
        imgUrl: 'https://a.imge.to/2019/07/19/5quQT.png',
        advisorImg: 'https://b.imge.to/2019/07/19/5qQK6.png',
        advisorName: 'Viella Malkovich',
        advisorPosition: 'Creative Director at Johnson',
        prefType: PrefTypes.DIGITAL,
    },{
        id: 2,
        name: 'Cultural',
        imgUrl: 'https://b.imge.to/2019/07/19/5qQK6.png',
        prefType: PrefTypes.CULTURE,
    },{
        id: 3,
        name: 'Management',
        imgUrl: 'https://b.imge.to/2019/07/19/5EBT2.png',
        prefType: PrefTypes.CULTURE,
    },{
        id: 4,
        name: 'Helpful Skills',
        imgUrl: 'https://b.imge.to/2019/07/19/5ERMA.png',
        prefType: PrefTypes.MANAGEMENT,
    },{
        id: 5,
        name: 'Helpful Skills',
        imgUrl: 'https://b.imge.to/2019/07/19/5Ep2U.png',
        prefType: PrefTypes.MANAGEMENT,
    },{
        id: 6,
        name: 'Helpful Skills',
        imgUrl: 'https://b.imge.to/2019/07/19/5qQK6.png',
        prefType: PrefTypes.MANAGEMENT,
    },{
        id: 7,
        name: 'Helpful Skills',
        imgUrl: 'https://a.imge.to/2019/07/19/5quQT.png',
        description: 'They\'re out looking for helpful, meaty stuff in many ways. That\'s why I want to help you focus',
        prefType: PrefTypes.HELPFUL,
    },{
        id: 8,
        name: 'Digital Skills',
        description: 'Digital content is any content that exists in the form of digital data. Also known as digital media, digital content is stored on digital or analog storage in specific formats. ',
        imgUrl: 'https://a.imge.to/2019/07/19/5quQT.png',
        prefType: PrefTypes.DIGITAL,
    },
];

class Explorer extends Component {

    state = {
        selectedPrefType: "",
    };

    componentDidMount() {
        const {match: { params }} = this.props;
        this.props.getCourseById(params.courseId);
    };

    onChangePrefType = (prefType) => {
        this.setState({selectedPrefType: prefType});
    };

    filterCourseByPreference = () => {
        const { selectedPrefType } = this.state;
        if (!selectedPrefType) {
            return courseCards;
        }
        return courseCards.filter(course => course.prefType === selectedPrefType);
    };

    render() {
        const { courseDetail, preferencesCards } = this.props;
        const { nameValue, descriptionValue, linkValue } = this.state;
        const filteredCourse = this.filterCourseByPreference();


        return (
                <div className="filter-part">
                    <Row>
                        {
                            prefCardTop.map((card, i) =>
                                <Col md="3"
                                     onClick={() => this.onChangePrefType(card.type)}
                                     className={this.state.selectedPrefType === card.type ? 'selected-pref' : ''}
                                >
                                <PreferenceCard
                                    name={card.name}
                                    imgUrl={card.imgUrl}
                                />
                            </Col>)
                        }
                    </Row>
                    <div className="result-lower">
                        <Row>
                            <div className="header-lower-part">
                                Cultural Trusted by the world’s most innovative businesses – big and small
                            </div>
                        </Row>
                        <Row>
                            {
                                filteredCourse.map((card, i) => <Col md="6"><CourseCard imgUrl={card.imgUrl}/></Col>)
                            }
                        </Row>
                        <Row>
                            <div className="header-dessert">
                                The best course dessert
                            </div>
                            <div className="dessert-detail">
                                A beautifully simple system for tracking, prioritizing, and solving customer support tickets.
                            </div>
                        </Row>
                        <Row>
                            {
                                dessertCards.map((card, i) => <Col md="4">
                                    <DessertCard imgUrl={card.imgUrl} name={card.name} />
                                </Col>)
                            }
                        </Row>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
