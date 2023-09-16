import React, { useRef } from 'react';
import '../App.css';
import circleIcon from '../Assets/circle.png';
import crossIcon from '../Assets/cross.png';
import { useState } from 'react';

let data = ["","","","","","","","",""];

const TicTacToa = (props) => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let player1_name = props.firstPlayer;
    let player2_name = props.secondPlayer;

    const toggle = (e, num) => {
        if(lock){
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML = `<img src='${crossIcon}' />`;
            data[num] = "x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circleIcon}' />`;
            data[num] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
    }

    const won =(winner) => {
        setLock(true);
        if(winner==="x"){
            if(player1_name)
            {
                titleRef.current.innerHTML =  `Congrats: ${player1_name} <img src=${crossIcon} /> won`;
            }
            else{
                titleRef.current.innerHTML =  `Congrats: <img src=${crossIcon} /> won`;
            }
        }
        else{
            if(player2_name){
                titleRef.current.innerHTML = `Congrats: ${player2_name} <img src=${circleIcon} /> won `;
            }
            else{
                titleRef.current.innerHTML = `Congrats: <img src=${circleIcon} /> won `;
            }
        }
    }

    const gameReset = () => {
        window.location.reload(true)
    }

    return (
        <div className='container'>
            <h1 className="title" ref={titleRef}>Tic Tac Toe board</h1>
            {
                player1_name ? <h4 className='players-name'>{player1_name} : <img src={crossIcon} /></h4> : <></>
            }
            {
                player2_name ? <h4 className='players-name'>{player2_name} : <img src={circleIcon} /></h4> : <></>
            }
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <button className="reset" onClick={gameReset}>Reset</button>
        </div>
    )
}

export default TicTacToa
