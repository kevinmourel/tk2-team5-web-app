import { useState, useEffect } from "react";
import Film from "../components/Film";
import SearchBar from "../components/SearchBar";
import Genre from "../components/Genre";

function Home() {

    const [film, setFilm] = useState([])
    const [genre, setgenre] = useState([])
    
    const [selectedGenre, setSelectedGenre] = useState("")
    const [search, setSearch] = useState(null)
    const [sorting, setSorting] = useState("")
   
    useEffect(() => {
    
        if(selectedGenre)
        {
            fetch(`http://localhost:8000/data?genre=${selectedGenre}`)
            .then((res) => res.json())
            .then((res) => {
                const data = res.filter(item => item.title.toLowerCase())
                            .sort((a,b) => {
                                if(sorting === 'DESC'){
                                    return a.title < b.title ? 1 : -1
                                }  
                                return a.title > b.title ? 1 : -1
                            })
                setFilm(data)
            })
        }else{
            fetch(`http://localhost:8000/data`)
            .then((res) => res.json())
            .then((res) => {
                let newgenre = [...new Set(res.map(item => item.genre))];
                setgenre(newgenre) 
                if(search){
                    const data = res.filter(item => item.title.toLowerCase().includes(search.toLowerCase().trim()))
                            .sort((a,b) => {
                                if(sorting === 'DESC'){
                                    return a.title < b.title ? 1 : -1
                                }  
                                return a.title > b.title ? 1 : -1
                            })
                    setFilm(data)
                }else{
                    const data = res.filter(item => item.title.toLowerCase())
                    .sort((a,b) => {
                        if(sorting === 'DESC'){
                            return a.title < b.title ? 1 : -1
                        }  
                        return a.title > b.title ? 1 : -1
                    })
                    setFilm(data)
                }
               
            })
        }

    }, [search, selectedGenre, sorting]);

    return (
        <div className="container">
            <SearchBar 
                search={search} 
                setSearch={setSearch} 
                setSelectedGenre={setSelectedGenre} 
                setSorting={setSorting}/>
            <Genre genre={genre} setSelectedGenre={setSelectedGenre}/>
            <Film film={film}/>
        </div>
    );
  }
  
  export default Home;