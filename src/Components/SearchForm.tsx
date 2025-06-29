import React,{useState} from "react";

import {SearchData} from "../services/api";

type SearchFormProps = {
  onData: (data: any[],filters:string) => void;
};
 
export const SearchForm :React.FC<SearchFormProps> =({onData}: SearchFormProps)=>{
const[selectedArtist,setselectedArtist]= useState ("01jxz1n9nqpxgf6xgnkdtt427c")

    const handleSearch= async()=>{
        const filters = {

            "artists": [selectedArtist],
            "lineages": null,
            "regions": null,
            "categories": null,
            "techniques": null, 
            "years": null
}
       try{ 
        const data=await SearchData(filters);
        onData(data.items || [],selectedArtist);
       }
    
    catch(error){
        console.error("search failed:", error);
    }
};
return (
    <div className="mb-4">
     <label htmlFor="artistSelect" className="form-label">
        Select Artist:
     </label>
     <select
        id="artistSelect"
        className="form-select mb-2"
        value= {selectedArtist}
        onChange={(e)=>setselectedArtist(e.target.value)}
        >
        <option value="01jxz1n9nqpxgf6xgnkdtt427c">Artist 1</option>
        <option value="01jxz1p8hhrf8bp1whmrayk38x">Artist 2</option>   
        </select>
    <button onClick={handleSearch} className="btn btn-dark custom-hover">
        Search ArtWorks
    </button>
    </div>
)
}