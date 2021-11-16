import {useMutation} from "@apollo/client"
import { getAnggotaQuery } from "../graphql/query"
import { deleteAnggotaQuery } from "../graphql/mutation"

export default function useTableDelete() {
    const [deleteAnggota]=useMutation(deleteAnggotaQuery,{
        refetchQueries:[getAnggotaQuery],
    })

    return {
        deleteAnggota,
    };
}
