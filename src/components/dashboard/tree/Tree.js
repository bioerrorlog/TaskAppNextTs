import React, { Component } from 'react';
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import TreeButton from './TreeButton';
import TreeNode from './TreeNode';
import TreeView from './TreeView';
import { addNode } from '../../../actions'


const useStyles = makeStyles((theme) => ({
}));

class Tree extends Component {

  nodeMapping(listNodes){
    const mapNodes = listNodes.map((node) =>
      <TreeNode title={node.title} description={node.description}>
        {this.nodeMapping(node.nodes)}
      </TreeNode>
    );
    return mapNodes;
  }

  render(){
    const mapNodes = this.nodeMapping(this.props.nodes);

    return (
      <div>
          <h2>Tree</h2>
            {mapNodes}
          <TreeButton onClick={this.props.addTreeNode}>Add</TreeButton>
          <TreeView />
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