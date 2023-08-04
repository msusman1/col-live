import logo from '../images/col_live_logo.png'
import {useState} from "react";
import '../Header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSearch} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleSearch = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#880000"
            }}>
                <img src={logo} width={300} height={120}/>
                <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
                    <input type="text" placeholder="Search..."/>
                    <FontAwesomeIcon onClick={toggleSearch} icon={isExpanded ? faClose : faSearch}/>
                </div>


            </div>
        </>)

}
export {Header}
