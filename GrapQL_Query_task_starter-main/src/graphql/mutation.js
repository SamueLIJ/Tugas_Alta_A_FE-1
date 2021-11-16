import {gql} from "@apollo/client"

export const deleteAnggotaQuery=gql `
    mutation MyMutation ($id:Int!){
        delete_anggota_by_pk(id: $id) {
        id
        }
    }
`;

export const insertAnggotaQuery=gql`
    mutation MyMutation ($object:anggota_insert_input) {
        insert_anggota_one(object: $object) {
        id
        }
    }
`;