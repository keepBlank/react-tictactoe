import React, { useState } from "react";
import ReactDOM  from "react-dom/client";

const Header = (
    <header>
        header部分
    </header>
)
const Header2 = function(props){
    return (
        <header>
            header2 {props.name}
        </header>
    )
}
const Bottom = (
    <div>
        bottom部分
    </div>
)
const Bottom2 = function(){
    const [n,setN] = useState(0);    // 析构赋值
    return (
        <div>
            {n}
            <button onClick={function(){
               setN(n+1)
            }}>加1</button>
        </div>
    )
}
// 类组件
class Bottom3 extends React.Component{
    render(){
        return (
            <div>bottm3</div>
        )
    }
}
const div = (
    <div>
        {Header}
        {Header2({name:'Reagen'})}
        <Header2 name="Tom and Jerry"/>
        <p>
            <span>
                Hello React!!
            </span>
        </p>
        {Bottom}
        <Bottom2/>
        <Bottom3/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);





