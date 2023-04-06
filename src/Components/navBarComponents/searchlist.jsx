import { useEffect, useState } from 'react'
import Endpoints from '../../api/endpoint'
import UserCard from './usercard'

const List = () => {
    const [searchFree, isSearchFree] = useState([])
    useEffect = () => {
        fetchData()
    }

    fetchData = () => {
        axios.get(Endpoints.USER)
            .then(response => {
                console.log(response.data);
                this.isSearchFree(
                    { data: response.data }
                )
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <>
        {
            searchFree.map((searchFree, index) => <UserCard data={searchFree} key={index} />)
        }
        </>
    )
}

export default List