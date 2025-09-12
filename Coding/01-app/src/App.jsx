import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItems";
import Button from "./components/Button";

const todoList = ["Eat", "Code", "Study", "Play"];
const App = () => {
    return (
        <div className="w-[300px] p-[20px] bg-white rounded space-y-3">
            <Header />
            {
                todoList.map((item,index) => (
                    <TodoItem text={item}/>
                ))
            }

            <Button />
        </div>
    )
}

export default App;