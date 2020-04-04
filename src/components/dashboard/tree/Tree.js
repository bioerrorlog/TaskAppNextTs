import React, { Component } from 'react';
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import TreeButton from './TreeButton';
import TreeNode from './TreeNode';
import { addNode } from '../../../actions'


const useStyles = makeStyles((theme) => ({
}));

class Tree extends Component {

  render(){
    const listNodes = this.props.nodes;
    const mapNodes = listNodes.map((node) =>
      <TreeNode description='this is description'>{node}</TreeNode>
    );

    return (
      <div>
          <h2>Tree</h2>
            {mapNodes}
          <TreeButton onClick={this.props.addTreeNode}>Add</TreeButton>
      </div>
    );    
  }
}

const mapStateToProps = state => ({
  nodes: state.nodes
});

const mapDispatchToProps = dispatch => {
  return{
    addTreeNode: () => dispatch(addNode())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tree)