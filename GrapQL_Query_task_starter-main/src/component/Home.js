import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation, useQuery,useSubscription } from "@apollo/client";

import React from "react";
import { useState } from "react/cjs/react.development";
import DataById from "./dataById";
import DetailPengunjung from "./detailPengunjung";

const GET_Pengunjung = gql`
query MyQuery($_eq: Int_comparison_exp = {}) {
    kampus_merdeka_anggota(where: {id: $_eq}) {
      nama
      jenis_kelamin
      umur
      id
    }
  }
`;

const DELETE_Pengunjung = gql`
mutation MyMutation($id: Int!) {
    delete_kampus_merdeka_anggota_by_pk(id: $id) {
      id
    }
  }
`;

const INSERT_Pengunjung = gql`
mutation MyMutation($object: kampus_merdeka_anggota_insert_input = {}) {
    insert_kampus_merdeka_anggota_one(object: $object) {
      id
    }
  }
`;

const UPDATE_Pengunjung = gql`
mutation MyMutation($_eq: Int!, $nama: String = "", $umur: Int = "", $jenis_kelamin: String = "") {
  update_kampus_merdeka_anggota(where: {id: {_eq: $_eq}}, _set: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
    returning {
      id
    }
  }
}
`;

const GET_Pengunjung_By_Id=gql`
query MyQuery($_eq: Int!) {
  kampus_merdeka_anggota(where: {id: {_eq: $_eq}}) {
    nama
    jenis_kelamin
    umur
  }
}
`;

const GET_Pengunjung_By_Gender = gql`
query MyQuery($_eq: String!) {
    kampus_merdeka_anggota(where: {jenis_kelamin: {_eq: $_eq}}) {
      nama
      umur
      jenis_kelamin
      id
    }
  }
`;
const query_Subs = gql `
subscription MySubscription {
  kampus_merdeka_anggota {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;

const query_Subs_By_Gender=gql`
subscription MySubscription($_eq: String = "") {
  kampus_merdeka_anggota(where: {jenis_kelamin: {_eq: $_eq}}) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;
const Home=()=> {
  const {data,loading,refetch}=useQuery(GET_Pengunjung);
  const [getDataById,{data:dataById,loading:wait}]=useLazyQuery(GET_Pengunjung_By_Id);
  const [getDataGender,{data:dataByGender,loading:load}]=useLazyQuery(GET_Pengunjung_By_Gender);
  const [insertNewData,{data:newData}]=useMutation(INSERT_Pengunjung);
  const [deleteDataById,{data:deleteData}]=useMutation(DELETE_Pengunjung);
  const [dataPengunjung, setDataPengunjung] = useState({
    id: 0,
    nama: "",
    jenis_kelamin: "",
    umur: ""
});
const [updateById,{data:updateData}]=useMutation(UPDATE_Pengunjung);
const {data:dataSubs,loading:looading}=useSubscription(query_Subs);
const [gender,setGender]=useState('Laki-laki');
const {data:dataSubsByGender,loading:loooading}=useSubscription(query_Subs_By_Gender,{
  variables:{
    "_eq":gender
  }
});
const detailPengunjung=async(id)=>{
  await getDataById({
    variables:{
      "_eq":id
    }
  });
  refetch();
}

const hapusPengunjung=async(id)=>{
  await deleteDataById({
    variables:{
      "_eq":id
    }
  });
  refetch();
}

const editPengunjung=(data)=>{
  setDataPengunjung(data)
}

const handleChangeForm = (event) => {
  setDataPengunjung({
      ...dataPengunjung,
      [event.target.name]: event.target.value
  });
}

const pushEditData = async (event) => {
  event.preventDefault();
  await updateById({
      variables: {
          "_eq": event.target.id.value,
          "nama": event.target.nama.value,
          "umur": event.target.umur.value,
          "jenis_kelamin": event.target.jenis_kelamin.value
      }
  });
  refetch();
}

const handleChange = (event) => {
  setGender(event.target.value);
}
const tambahPengunjung = async (newUser) => {
  await insertNewData({
      variables: {
          "nama": newUser.nama,
          "umur": newUser.umur,
          "jenis_kelamin": newUser.jenis_kelamin
      }
  })
  refetch()
};

  return (
    <div>
    <Header />
    {looading ? <p>Loading...</p> : <ListPassenger key={dataSubs?.kampus_merdeka_anggota.id} 
    data={dataSubs?.kampus_merdeka_anggota} detailPengunjung={detailPengunjung} 
    hapusPengunjung={hapusPengunjung} editPengunjung={editPengunjung} />}
    {<PassengerInput
        tambahPengunjung={tambahPengunjung}
    />}
    {
        <form onSubmit={pushEditData}>
            <h3>Update Data</h3>
            <input type="hidden" name="id" value={dataPengunjung.id} /><br />
            <input type="text" name="nama" value={dataPengunjung.nama} onChange={handleChangeForm} /><br />
            <select name="jenis_kelamin" id="jenis_kelamin" onChange={handleChangeForm} value={dataPengunjung.jenis_kelamin}>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
            </select><br />
            <input type="text" name="umur" onChange={handleChangeForm} value={dataPengunjung.umur} /><br />
            <button type="submit">Update Data</button>
        </form>
    }
    {wait ? <p>Loading...</p> : <DetailPengunjung {...dataById?.kampus_merdeka_anggota} />}
    {
        <div>
            <br />
            <select name="dataByGender" id="dataByGender" onChange={handleChange}>
                <option value="Laki-Laki" selected>Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
            <h3>Data by Jenis Kelamin</h3>
            <ul>
                {loooading ? <p>Loading...</p> : dataSubsByGender?.kampus_merdeka_anggota.map(item => (
                    <DataById key={item.id} {...item} />
                ))}
            </ul>
        </div>
    }
    </div>
  );
}
export default Home;