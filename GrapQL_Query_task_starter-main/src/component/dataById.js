import React from "react";

const DataById = (props) => {
    const { nama, jenis_kelamin, umur } = props;

    return (
        <ul style={{ listStyleType: 'none' }}>
            <li>Nama : {nama}<br />Jenis Kelamin : {jenis_kelamin}<br />Umur : {umur}<br /></li>
        </ul>
    );
}

export default DataById;