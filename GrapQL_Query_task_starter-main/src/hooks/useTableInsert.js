import {useMutation} from "@apollo/client"
import { getAnggotaQuery } from "../graphql/query"
import { insertAnggotaQuery } from "../graphql/mutation"

export default function useTableInsert() {
    const [insertAnggota]=useMutation(insertAnggotaQuery,{
        refetchQueries:[getAnggotaQuery],
    })

    return {
        insertAnggota,
    };
};
