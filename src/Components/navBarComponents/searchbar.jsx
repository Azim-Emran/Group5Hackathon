import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import UserCard from './usercard'

const searchBar = () => {      
    return (
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id=""><button><BsSearch /></button></span>
                <UserCard />
            </div>
            <input type="text" class="form-control" placeholder='Search for your freelancer...' />
        </div>
    )
}
export default searchBar