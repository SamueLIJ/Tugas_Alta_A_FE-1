import "./Home.css"
const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data

    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
            <tr>
            <td onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
            <td onClick={() => props.editPengunjung(id)}><button>Edit</button></td>
            <td onClick={() => props.detailPengunjung(id)}><button>Detail</button></td>
            </tr>
        </tr>
    )
}

export default ListItem;