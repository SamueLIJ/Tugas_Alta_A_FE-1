import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";

import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Loading from "./loading";

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
mutation MyMutation($id: Int!, $id1: Int = 10, $jenis_kelamin: String = "", $nama: String = "", $umur: Int = 10) {
  update_kampus_merdeka_anggota_by_pk(_set: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}, pk_columns: {id: $id}) {
    id
  }
}
`;
export default function Home() {
  const [input, setInput] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_Pengunjung, {
    variables: { _eq: {} },
    notifyOnNetworkStatusChange: true,
  });
  const [
    insertPengunjung,
    { data: dataInsert, loading: loadingInsert, error: errorInsert },
  ] = useMutation(INSERT_Pengunjung);

  const [
    deletePengunjung,
    { data: dataDelete, loading: loadingDelete, error: errorDelete },
  ] = useMutation(DELETE_Pengunjung);

  const hapusPengunjung = (id) => {
    deletePengunjung({
      variables: {
        id: id,
      },
      refetchQueries: [
        {
          query: GET_Pengunjung,
        },
      ],
    });
  };

  const editPengunjung = (newEditUser) => {
    alert(newEditUser);
  };

  const tambahPengunjung = (newUser) => {
    insertPengunjung({
      variables: {
        object: {
          nama: newUser.nama,
          umur: newUser.umur,
          jenis_kelamin: newUser.jenis_kelamin,
        },
      },
      refetchQueries: [
        {
          query: GET_Pengunjung,
        },
      ],
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input.length > 0) {
      refetch({
        _eq: {
          _eq: input,
        },
      });
    } else {
      refetch({
        _eq: {},
      });
    }
  }, [input]);

  return (
    <div>
      <div>
        <Header />
        <input
          type="text"
          placeholder="Search By Id"
          value={input}
          onChange={handleChange}
        />
        {loading || loadingInsert || loadingDelete ? <Loading /> : ""}
        {error ? error : ""}
        <ListPassenger
          data={data?.kampus_merdeka_anggota}
          hapusPengunjung={hapusPengunjung}
          editPengunjung={editPengunjung}
        />
        {data?.kampus_merdeka_anggota.length == 0 ? "Data Tidak Ditemukan" : ""}
        <PassengerInput tambahPengunjung={tambahPengunjung} />
      </div>
    </div>
  );
}