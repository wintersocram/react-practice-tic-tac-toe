import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        let selectedList = this.props.selectedList;
        let thisIndex = this.props.index;
        let currentValue = this.props.currentValue;
        let hasChanged = false;

        let checkSelected = () => {
            if(selectedList[thisIndex])
                return selectedList[thisIndex];
            return '';
        }

        let updateSelectedList = () => {
            console.log(`\tselectedList[${this.props.index}] (1): %o\n\tvalue: ${selectedList[this.props.index]}`, selectedList);
            if (!selectedList[this.props.index]) {
                selectedList[this.props.index] = currentValue.value;
                hasChanged = true;
            } else {
                hasChanged = false;
            }
            console.log(`\tselectedList[${this.props.index}] (2): %o\n\tvalue: ${selectedList[this.props.index]}`, selectedList);
        }
        let updateNextValue = () => {
            console.log(`currentValue (1): ${currentValue.value}`);
            if(hasChanged)
                currentValue.value = currentValue.value === 'x' ? 'o' : 'x';
            console.log(`currentValue (2): ${currentValue.value}`);
        };

        let clickSquare = () => {
            updateSelectedList();
            updateNextValue();
            console.log(`currentValue (3): ${currentValue.value}`);
            this.forceUpdate();
            console.log(`currentValue (4): ${currentValue.value}`);
        };
        return (
            <button className="square" onClick={ () => clickSquare() }>
                {checkSelected()}
            </button>
        );
    }
}
class Board extends React.Component {
    renderSquare(i, selectedList, currentValue) {
        return <Square index={i} selectedList={selectedList} currentValue={currentValue}/>;
    }
  
    render() {
        let selectedList = {};
        let currentValue = {'value': 'x'};
        let status = `Next player: ${currentValue.value}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0, selectedList, currentValue)}
                    {this.renderSquare(1, selectedList, currentValue)}
                    {this.renderSquare(2, selectedList, currentValue)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, selectedList, currentValue)}
                    {this.renderSquare(4, selectedList, currentValue)}
                    {this.renderSquare(5, selectedList, currentValue)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, selectedList, currentValue)}
                    {this.renderSquare(7, selectedList, currentValue)}
                    {this.renderSquare(8, selectedList, currentValue)}
                </div>
            </div>
        );
    }
}
  
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
  
// ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  