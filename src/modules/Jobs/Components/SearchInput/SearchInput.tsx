import React, { useEffect, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { changeSearchText, emptyAutoCompelete, fetchAutoCompeleteList } from '../../store/actionCreators';
import { setSearchHistory } from '../../store/actions';

const SearchInput = () => {
    const dispatch = useDispatch()
    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const paramField: any = query.get('query');
    const history = useHistory()
    const inputRef = useRef(null);
    let jobsModule = useSelector((state: RootStateOrAny) => state.jobs)
    let autoCompleteList = jobsModule.autoCompleteList
    let searchText = jobsModule.searchText
    let searchHistory = jobsModule.searchHistory

    const handelSearch = (event: any) => {
        let value = event.target.value
        console.log(value)
        dispatch(changeSearchText(value))
        if (value.length === 0) {
            history.push('/')
            dispatch(emptyAutoCompelete())
        }
        if (value.length > 2) {
            history.push('/search')
        }
        console.log(autoCompleteList)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchText)
            if (searchText.length > 2) {
                dispatch(fetchAutoCompeleteList(searchText))
                dispatch(setSearchHistory(searchText))
            }
        }, 2000)
        return () => clearTimeout(delayDebounceFn)
    }, [searchText])

    useEffect(() => {
        console.log(paramField)
        if (paramField) {
            dispatch(setSearchHistory(paramField))
            dispatch(fetchAutoCompeleteList(paramField))
        }
    }, [paramField]);

    useEffect(() => {
        //@ts-ignore
        inputRef.current.focus();
    }, [])
    return (
        <section className='search__input--wrapper'>
            <input ref={inputRef} placeholder="Search keyword" list="jobs" id="myjobs" name="myjobs" onChange={(event) => { handelSearch(event) }} value={searchText} />
            <datalist id="jobs">
                {autoCompleteList.map((item: any) => {
                    return (
                        <option key={item.uuid} value={item.suggestion} />
                    )
                })}
            </datalist>
            <div>
            </div>
        </section>

    );
}

export default SearchInput;
