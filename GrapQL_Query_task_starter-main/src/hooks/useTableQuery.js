import {useQuery} from "@apollo/client"
import { getAnggotaQuery } from "../graphql/query"

export default function useTableQuery() {
    const {data: anggota}=useQuery(getAnggotaQuery);
    return{
        anggota,
    };
};
