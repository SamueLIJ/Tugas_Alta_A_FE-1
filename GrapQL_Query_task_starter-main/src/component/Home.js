import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";

import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Loading from "./loading";

const GET_Pengunjung = gql`
query MyQuery($id: Int_comparison_exp = {_eq: 1}) {
    kampus_merdeka_anggota(where: {id: $id}) {
      id
      jenis_kelamin
      nama
      umur
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

export default function Home() {
  const [input, setInput] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_Pengunjung, {
    variables: { _eq: {} },
    notifyOnNetworkStatusChange: true,
  });
  const [
    insertPasList,
    { data: dataInsert, loading: loadingInsert, error: errorInsert },
  ] = useMutation(INSERT_Pengunjung);

  const [
    deletePasList,
    { data: dataDelete, loading: loadingDelete, error: errorDelete },
  ] = useMutation(DELETE_Pengunjung);

  const hapusPengunjung = (id) => {
    deletePasList({
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
    insertPasList({
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
          data={data?.paslist_visitors}
          hapusPengunjung={hapusPengunjung}
          editPengunjung={editPengunjung}
        />
        {data?.paslist_visitors.length == 0 ? "Data Tidak Ditemukan" : ""}
        <PassengerInput tambahPengunjung={tambahPengunjung} />
      </div>
    </div>
  );
}