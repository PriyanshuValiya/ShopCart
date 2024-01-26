import "./Search.scss";
import { IoExitOutline } from "react-icons/io5"
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import prod from "../../../assets/products/speaker-prod-1.webp"
import { useRef, useState } from "react";
import { Popular } from "../../data";
import { useNavigate } from "react-router-dom";

const Search = ({setShowSearch}) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState();
    const searchedItem = useRef();

    const handleOnClick = () => {
        setSearch(searchedItem.current.value);
        searchedItem.current.value = "";
    }

    return(
        <>
         <div className="search-model">
            <div className="form-feild">
                <div className="searchbar">
                 <input type="text" placeholder="Search Products..." ref={searchedItem}/>
                 <Button variant="contained" onClick={handleOnClick}><IoMdSearch /></Button>
                </div>
                <IoExitOutline className="closebtn" onClick={() => setShowSearch(false)}/>
            </div>
            
        {Popular.map((item) => (
            (search === item.category) ? 
            <div className="search-result-content" onClick={() => navigate(`/product/${item.id2}`, setShowSearch(false))}>
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                         <img src={item.img} alt=""/>
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.name}</span><br/>
                            <span className="desc">{item.category}</span><br/><br/>
                            <span className="name">&#8377; {item.price}</span>
                        </div>
                    </div>
                </div>
            </div> : ""
        ))}
         </div>
        </>
    );
};

export default Search;
