function SearchBar({search, setSearch, setSelectedGenre, setSorting}) {    


    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        setSelectedGenre('')
    }

    return (
        <div className="row">
            <div className="col-8">
                <input className='form-control mb-3' 
                placeholder='search...'
                value={search}
                onChange={handleChange}/>
            </div>
            <div className="col-4">
            <select className="form-select" onChange={(e) => setSorting(e.target.value)}>
                    <option selected disabled>Sort by</option>
                    <option value="ASC">A-Z</option>
                    <option value="DESC">Z-A</option>
            </select>
            </div>
        </div>
    )
}

export default SearchBar