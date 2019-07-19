import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import PreferenceCard from '../../components/PreferenceCard';
import CourseCard from '../../components/CourseCard';
import DessertCard from '../../components/DessertCard';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './index.css';

import Search from "../../search.png";

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
        description: 'Human resource management (HRM or HR) is the strategic approach to the effective management of people in a company or organization such that they help their business gain a competitive advantage.'
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
        description: 'Design and style aren’t an exact science, as tastes differ and change as time goes on, but there are a few principles you can pick up that’ll make your work, home, or whatever needs an aesthetic boost looking better than average. If we’re talking traditional design, you’ll first want to learn the basics of type and layout. These are skills you can employ in your everyday work to make it look a lot more attractive. This may seem like a nearly-useless skill, because spreadsheets aren’t getting entered in any beauty contests,',
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
        searchWord: "",
    };


    onChangePrefType = (prefType) => {
        const updatedPrefType = (prefType === this.state.selectedPrefType)? '' : prefType;
        this.setState({selectedPrefType: updatedPrefType});
    };

    filterCourseByPreference = () => {
        const { selectedPrefType, searchWord } = this.state;
        let filteredCourse = courseCards;
        if (!selectedPrefType && !searchWord) {
            return courseCards;
        }
        if (selectedPrefType) {
            filteredCourse = filteredCourse.filter(course => course.prefType === selectedPrefType);
        }

        if (searchWord) {
            filteredCourse = filteredCourse.filter(course => course.name.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0 );
        }

        return filteredCourse;
    };

    inputChange = (e , indexName) => {
        let formValues = {};
        formValues[indexName] = e.target.value;
        this.setState(formValues);
    };

    render() {
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
                                <Form inline className="search-name">
                                    <FormControl value={this.state.searchWord}  onChange={(e)=>this.inputChange(e,'searchWord')} type="text" placeholder="Search" className="mr-sm-2 search-box" />
                                    <div className="search-icon" variant="outline-info"><img src={Search} width="19px"/> </div>
                                </Form>
                            </div>
                        </Row>
                        <Row>
                            {
                                _.size(filteredCourse) === 0 ?
                                <div className="no-result">No Result Found!</div> :
                                filteredCourse.map((card, i) => <Col md="6" key={i}><CourseCard description={card.description} name={card.name} imgUrl={card.imgUrl}/></Col>)
                            }
                        </Row>
                        <Row>
                            <div className="header-dessert">
                                The best course dessert
                            </div>
                            <div className="dessert-detail">
                                An L&D program that’s customized to the preferences of each individual employee. This means that employees can access the L&D content
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

export default connect(null, null)(Explorer);
