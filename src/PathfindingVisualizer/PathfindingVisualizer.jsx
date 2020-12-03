import React, {Component} from 'react'; //Creating a simple React Component
import Node from './Node/Node';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {
        const nodes = [];
        for (let row = 0; row < 20; row++) {
            const currentRow = [];
            for(let col = 0; col < 50; col++){
                //set the start node and the finish node
                const currentNode = {
                    col,
                    row,
                    isStart: row === 10 && col === 5,
                    isFinish: row === 10 && col === 45,
                };
                currentRow.push(currentRow);
            }   
            nodes.push(currentRow);
        }
        this.setState({nodes});
    }

    //Iterate through every node and every column then create a node
    //Must add a key property because this is an iterable

    render() {
        const {nodes} = this.state;
        console.log(nodes)

        return (
            <div className = "grid">
                {nodes.map((row, rowIndex) => {
                    return (
                        <div key= {rowIndex}>
                            {row.map((node, nodeIndex) => {
                                const {isStart, isFinish} = node;
                                return (
                                    <Node>
                                        key={nodeIndex}
                                        isStart= {isStart};
                                        isFinish={isFinish};
                                        test= {'Hello'}
                                        test= {'palindrome'}</Node>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            );
        }
    }
                
