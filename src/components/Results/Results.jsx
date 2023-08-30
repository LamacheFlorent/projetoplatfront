import './Results.scss';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import MainResults from './MainResults/MainResults';
import PaginationResults from './Pagination/Pagination';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

const Results = () => {
    const resultName = useSelector((state) => state.recipes.inputSearch);
    const searchResults = useSelector((state) => state.recipes.searchResults);
    const isRecipesLoaded = useSelector((state) => state.recipes.isRecipesLoaded);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleResults = searchResults.slice(startIndex, endIndex);

    return (
        <div className='results'>
            <h1>{`Résultats correspondant à la recherche ${resultName} :`}</h1>
            {!isRecipesLoaded && <Loader />}
            {searchResults.length === 0 && <NotFound />}
            <MainResults results={visibleResults}/>
            <PaginationResults
                totalItems={searchResults.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    )
};

export default Results;