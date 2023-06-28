import React from "react";
import ReactDOM  from "react-dom/client";
import './style.css'

// 棋盘格子
const Cell = function(props){
    return (
        <div className="cell" onClick={props.onClick}>
            {props.text}
        </div>
    )
}

// 棋盘
const Chessboard = function(){
    const [cells,setCells] = React.useState([
        // 使用某种匹配机制去优化
        [null,null,null],  // [1,2,3]
        [null,null,null],  // [10,20,30]
        [null,null,null],  // [100,200,300]
    ])
    // 点击的序号
    const [n,setN] = React.useState(0)
    // 游戏是否结束？
    const [finished,setFinished] = React.useState(false)
    // 判断谁赢了
    const tell = (cells)=>{
        // 横着3个X或3个O
        for(let i=0;i< 3;i++){
            if(cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2] && cells[i][0] !== null){
                console.log(cells[i][0] + "赢了");
                setFinished(true)
                break;
            }
        }
        // 竖着3个X或3个O
        for(let i=0;i< 3;i++){
            if(cells[0][i] === cells[1][i] && cells[1][i] === cells[2][i] && cells[0][i] !== null){
                console.log(cells[0][i] + "赢了");
                setFinished(true)
                break;
            }
        }
        // 左斜3个X或3个O
        if(cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2] && cells[0][0] !== null){
            console.log(cells[0][0] + "赢了");
            setFinished(true)
        }
        // 右斜3个X或3个O
        if(cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0] && cells[0][2] !== null){
            console.log(cells[0][2] + "赢了");
            setFinished(true)
        }
    }
    // 点击棋格
    const onClickCell = (row,col)=>{
        // n + 1
        setN(n + 1);
        // 改变cells
        const copy = JSON.parse(JSON.stringify(cells)) 
        // 点击序号为偶数的打"X"，奇数打"O""
        copy[row][col] =  n % 2 === 0?'X': 'O'
        // 更新cells
        setCells(copy)
        // 判断谁赢
        tell(copy)
    }
    return (
        <div>
            {cells.map((items,row) => <div className="row">
                {items.map((item,col) => <div className="col">
                    <Cell text={item} onClick={()=>onClickCell(row,col)}/>
                </div>                  
                )}
            </div>)}
            {finished &&<div className="gameOver">游戏结束！</div>}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
    <Chessboard />
</div>);