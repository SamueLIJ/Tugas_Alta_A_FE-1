var styling = {
    list: {
        border: "1px solid black",
        padding: "5px 25px 5px 25px",
        borderRadius: "25px",
        display: "inline",
        marginTop: "15px",
    },
    listStrike: {
        textDecoration: "line-through"
    }
}

const TodoList = (props) =>
(
    <p className="d-block" style={props.isDone == true ? { ...styling.list, ...styling.listStrike } : styling.list}>
        {props.value}
    </p>
);


export default TodoList;