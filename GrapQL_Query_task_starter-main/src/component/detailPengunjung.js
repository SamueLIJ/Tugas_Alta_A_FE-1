import React, { Fragment } from "react";

const DetailPengunjung = (props) => {

    return (
        <Fragment>
            <h3>Nama: {props?.[0] ? props?.[0].nama : null}</h3>
            <p>Jenis Kelamin : {props?.[0] ? props?.[0].jenis_kelamin : null}</p>
            <span>Umur : {props?.[0] ? props?.[0].umur : null}</span>
        </Fragment>
    );
}

export default DetailPengunjung;