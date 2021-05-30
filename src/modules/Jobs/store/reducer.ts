import * as actions from './actionTypes'

let initialState = {
    jobsLoading: true,
    jobsError: false,
    jobs: [],
    relatedJobs: [],
    relatedSkills: [],
    autoCompleteLoading: false,
    autoCompleteError: false,
    autoCompleteList: [],
    skillRelatedJobs: [],
    skillRelatedSkills: [],
    skillDetails: {},
    searchText: '',
    searchHistory: []
}
export const jobs = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.GET_JOBS:
            console.log('action payload', action.payload)
            return { ...state, jobs: state.jobs.concat(action.payload) /* action.payload */ };
        case actions.GET_RELATED_JOBS:
            return { ...state, relatedJobs: action.payload }
        case actions.GET_RELATED_SKILLS:
            return { ...state, relatedSkills: action.payload }
        case actions.GET_AUTO_COMPELETE:
            return { ...state, autoCompleteList: action.payload }
        case actions.SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload }
        case actions.GET_SKILL_RELATED_SKILLS:
            return { ...state, skillRelatedSkills: action.payload }
        case actions.GET_SKILL_RELATED_JOBS:
            return { ...state, skillRelatedJobs: action.payload }
        case actions.GET_SKILL_DETAILS:
            return { ...state, skillDetails: action.payload }
        case actions.ASSIGN_RELATED_SKILLS_TO_JOBS:
            return { ...state, jobs: action.payload }
        case actions.SET_JOBS_ERORR:
            return { ...state, jobsError: action.payload }
        case actions.SET_JOBS_LOADING:
            return { ...state, jobsLoading: action.payload }
        case actions.SET_AUTO_COMPELETE_LOADING:
            return { ...state, autoCompleteLoading: action.payload }
        case actions.SET_AUTO_COMPELETE_ERROR:
            return { ...state, autoCompleteError: action.payload }
        case actions.SET_SEARCH_HISTORY:
            localStorage.setItem('searchHistory',JSON.stringify(state.searchHistory.concat(action.payload)))
            return { ...state, searchHistory: state.searchHistory.concat(action.payload) }
        default:
            return state
    }
}
