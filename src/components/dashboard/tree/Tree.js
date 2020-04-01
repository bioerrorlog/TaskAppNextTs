import React, { Component } from 'react';
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import TreeButton from './TreeButton';
import { addNode } from '../../../actions'


const useStyles = makeStyles((theme) => ({
}));

class Tree extends Component {

  render(){
    return (
      <div>
          <h2>Tree</h2>
          <p>{this.props.ctr}</p>
          <TreeButton onClick={this.props.addTreeNode}>Add</TreeButton>
      </div>
    );    
  }
}

const mapStateToProps = state => ({
  ctr: state.nodeCounter
});

const mapDispatchToProps = dispatch => {
  return{
    addTreeNode: () => dispatch(addNode())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tree)