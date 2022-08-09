import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import emojis from "./emoji";

function createEntry(emojisTerm){
    return(
        <Entry 
        key={emojisTerm.id}
        emoji={emojisTerm.emoji}
        name={emojisTerm.name}
        />
    );
}

function Header(){
    const [val , finalVal] = useState("");
    const [filteredArray,setFilteredArray] = useState([])

    function handleChange(e){
    const value = e.target.value;
    finalVal(value);
    }

    useEffect(() => {
        if(!val){
            setFilteredArray(emojis);
        }
        else{

        let abc =  emojis.filter((emoji) => {
            const emojiName = emoji.name.toLowerCase();
        return  emojiName.includes(val);
        })
        console.log(abc);
        setFilteredArray(abc);
    }

    }, [val])
    


    return(
        <div>
            <div>
                <h1 className="header-text">
                    Emoji Search
                </h1>
                <input onChange={handleChange} value={val} className="input-search" type="text" />
            </div>
            {/* <p className="emojis">{emojis.map(createEntry)}</p> */}
            <p className="emojis"> {filteredArray.map(createEntry)} </p>
        </div>
    )
}

export default Header;