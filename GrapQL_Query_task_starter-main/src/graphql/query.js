import {gql} from "@apollo/client"

export const getAnggotaQuery = gql`
    query MyQuery {
        kampus_merdeka_anggota {
        id
        jenis_kelamin
        nama
        umur
        }
    }
`;