import React, { useState, useEffect } from "react";

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

    const [todo, setTodo] = useState([]);
    const [formData, setFormData] = useState({
        id: 0,
        title: ""
    })

    const handleDelete = (id) => {
        setTodo((oldTodo) => oldTodo.filter((item) => item.id !== id))
    }

    const handleChange = (e) => {
        setFormData({ ...todo, title: e.target.value })
    }

    const onChangeCheck = (id) => {
        let mapped = todo.map((x) => {
            return x.id === id ? {...x, completed: ! x.completed} : x;
        })
        setTodo(mapped)
    }

    useEffect(() => {
        setFormData({
            id: 0,
            title: ""
        })
    }, [todo])

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            title: formData.title,
            id: Math.floor(Math.random() * 999) + 1,
            completed: false
        };
        if (newTodo.title === "") {
            alert("Inputan tidak boleh kosong")
        } else {
            setTodo((oldTodo) => [...oldTodo, newTodo])
        }
    }

    return (
        <div className="container">
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
            {todo.map((todo) => (
                <div key={todo.id} className="row">
                    <div className="col-1 d-flex align-items-center">
                        <div className="form-check">
                            <input className="form-check-input" checked={todo.completed} name="completed" type="checkbox" id="flexCheckDefault" onChange={() => onChangeCheck(todo.id)} />
                        </div>
                    </div>
                    <div className="col-10">
                        <p className="d-block" style={todo.completed === true ? { ...styling.list, ...styling.listStrike } : styling.list}>
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