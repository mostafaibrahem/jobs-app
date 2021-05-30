import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Card from '../Card/Card';
import SearchInput from '../SearchInput/SearchInput';
import SideList from '../SideList/SideList';

const JobSearchWrapper = () => {
    let jobsModule = useSelector((state: RootStateOrAny) => state.jobs)
    let autoCompleteList = jobsModule.autoCompleteList
    let searchHistory = jobsModule.searchHistory
    let autoCompleteError = jobsModule.autoCompleteError
    let searchText = jobsModule.searchText
    let textToDisplay = searchText.length === 0 ? "please enter text to search for example : frontend" : (searchText.length > 2 && autoCompleteList.length > 0) ? `“${searchText}” jobs (${autoCompleteList.length})` : `No Data to dispaly for “${searchText}” `
    if (autoCompleteError) return <p>Error</p>
    return (
        <div className='container '>
            <SearchInput />
            <>
                <div className='bg-light-gray'>
                    <h3>{textToDisplay}</h3>
                </div>
                <div className='job__search--wrapper'>

                    <div className='jobs__list--wrapper'>

                        {autoCompleteList.length > 0 && autoCompleteList.map((item: any) => {
                            return (<Card key={item.uuid} item={item} />)
                        })}
                    </div>
                    <SideList header={"Search History"} >
                        {searchHistory.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    • {item}
                                </div>
                            )
                        })}
                    </SideList>
                </div>
            </>
        </div>

    );
}

export default JobSearchWrapper;
