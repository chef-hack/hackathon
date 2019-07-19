import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Avatar from 'react-avatar';
import defaultAvatar from '../images/avatar.png';
import goalTracker from '../images/goaltracker.png';
import PrefList from '../components/PreferenceList';
import PieChart from '../components/PieChart';

class Profile extends Component {
  state = {
    prefList: [
      {"id":1, "name":"Design UX/UI"},
      {"id":2, "name":"Digital"},
      {"id":3, "name":"Culture"},
      {"id":4, "name":"Management"},
      {"id":5, "name":"Helpful"}
    ],
  };
  renderGeneralInfo() {
    return (
      <React.Fragment>
      <Row>
        <Col md={2}>
          <div className="user-profile-avatar">
            <Avatar name="profile" src={defaultAvatar} size={100} round/>
          </div>
        </Col>
        <Col md={10}>
          <div className="details">
            <h2 className="name">Jason Danlop</h2>
            <div className="title">General Manager</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pharetra diam sit amet. Magna fermentum iaculis eu non. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Quis varius quam quisque id diam vel quam. Massa placerat duis ultricies lacus sed turpis tincidunt id. </div>
          </div>
          <div className="achievements">
            <h3>Achievements</h3>
            <div className="flex-grid">
              <div className="col">
                <span className="label">Badges</span>
                <span className="value">100</span>
              </div>
              <div className="col">
                <span className="label">Points</span>
                <span className="value">1000</span>
              </div>
              <div className="col">
                <span className="label">Course completed</span>
                <span className="value">20</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="profile-page">
        <div className="profile-inner-top">
          <div className="container-wrap">
            <Row>
              <Col md={7}>
                <div className="col-left">
                  <div className="box">
                  { this.renderGeneralInfo() }
                  </div>
                  <div className="box">
                    <h3>Goal Tracker</h3>
                    <div className="goal-tracker-img"><img src={goalTracker}/></div>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <div className="col-right">
                  <div className="box">
                    <PrefList list={this.state.prefList}/>
                  </div>
                  <div className="box">
                    <div className="skill">
                      <h3>Skill</h3>
                      <PieChart />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="profile-inner-bottom"></div>
      </div>
    );
  }
}

export default Profile; // Don’t forget to use export default!