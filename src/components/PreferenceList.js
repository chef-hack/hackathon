import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';
import _ from 'lodash';
import { fetchToDos, fetchPref } from "../actions/todoAction";

import './index.css';

class PreferenceList extends Component {
  static propTypes = {
    list: PropTypes.array,
  };

  componentWillMount() {
    // this.props.fetchPref();
    this.props.fetchtodos();
  }

  renderList = () => {
    const { list } = this.props;
    return list.map((item) =>
      (
        <h5 className=""><Badge variant="info">{item.name}</Badge></h5>
      )
    );
  };

  render() {
    const { isFetching } = this.props;
    return (
      <div className="interesting">
        <h3>Interesting area</h3>
          <div className="pref-list">
          {
            isFetching ?
              <div className="loading">
                <Loader type="TailSpin" color="#00BFFF" height="30" width="30"/>
              </div>:
              this.renderList()
          }
          </div>
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
    isFetching: state.todos.isFetchingPref,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPref: () => dispatch(fetchPref()),
  fetchtodos: () => dispatch(fetchToDos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreferenceList);
