import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, toggleTodo } from "../store/todoSlice"

var styling = {
    list: {
        border: "1px solid black",
        padding: "5px 25px 5px 25px",
        borderRadius: "10px",
        display: "inline",
        marginTop: "15px",
    },
    listStrike: {
        textDecoration: "line-through"
    }
}

const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)

    const [todo, setTodo] = useState([]);
    const [formData, setFormData] = useState({
        id: 0,
        title: ""
    })

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleChange = (e) => {
        setFormData({ ...todo, title: e.target.value })
    }

    const onChangeCheck = (id) => {
        dispatch(toggleTodo(id))
    }

    useEffect(() => {
        setFormData({
            id: 0,
            title: ""
        })
    }, [todo])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title == "") {
            alert("Inputan tidak boleh kosong")
        } else {
            dispatch(createTodo(formData.title))
        }
    }

    return (
        <div className="container">
            <h1 className="text-center mb-4">Todo List</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-8">
                        <input type="text" name="todo" value={formData.title} className="form-control" placeholder="Todo List" onChange={handleChange} />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary col-12">Submit</button>
                    </div>
                </div>
            </form>
            {todos.map((todo) => (
                <div key={todo.id} className="row">
                    <div className="col-1 d-flex align-items-center">
                        <div className="form-check">
                            <input className="form-check-input" checked={todo.completed} name="completed" type="checkbox" id="flexCheckDefault" onChange={() => onChangeCheck(todo.id)} />
                        </div>
                    </div>
                    <div className="col-10">
                        <p className="d-block" style={todo.completed == true ? { ...styling.list, ...styling.listStrike } : styling.list}>
                            {todo.title}
                        </p>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                        <button className="btn btn-danger col-12" onClick={() => handleDelete(todo.id)}>Hapus</button>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Todo;