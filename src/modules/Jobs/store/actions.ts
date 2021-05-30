import * as actions from './actionTypes'


export const getAllJobs = (jobs: any) => {
    return {
        type: actions.GET_JOBS,
        payload: jobs
    }
}

export const setJobsLoading = (loading: any) => {
    return {
        type: actions.SET_JOBS_LOADING,
        payload: loading
    }
}

export const setSearchHistory = (searchHistory: any) => {
    return {
        type: actions.SET_SEARCH_HISTORY,
        payload: searchHistory
    }
}

export const setJobsError = (error: any) => {
    return {
        type: actions.SET_JOBS_ERORR,
        payload: error
    }
}

export const setAutoCompeleteLoading = (loading: any) => {
    return {
        type: actions.SET_AUTO_COMPELETE_LOADING,
        payload: loading
    }
}

export const setAutoCompeleteError = (error: any) => {
    return {
        type: actions.SET_AUTO_COMPELETE_ERROR,
        payload: error
    }
}



export const getRelatedJobs = (relatedJobs: any) => {
    return {
        type: actions.GET_RELATED_JOBS,
        payload: relatedJobs
    }
}

export const getRelatedSkills = (relatedSkills: any) => {
    return {
        type: actions.GET_RELATED_SKILLS,
        payload: relatedSkills
    }
}

export const getRelatedSkillsForSkill = (skillRelatedSkills: any) => {
    return {
        type: actions.GET_SKILL_RELATED_SKILLS,
        payload: skillRelatedSkills
    }
}

export const getRelatedJobsForSkill = (skillRelatedJobs: any) => {
    return {
        type: actions.GET_SKILL_RELATED_JOBS,
        payload: skillRelatedJobs
    }
}

export const getAutoCompeleteList = (autoCompeleteList: any) => {
    return {
        type: actions.GET_AUTO_COMPELETE,
        payload: autoCompeleteList
    }
}

export const setSearchText = (searchText: string) => {
    return {
        type: actions.SET_SEARCH_TEXT,
        payload: searchText
    }
}

export const getCurrentSkillDetails=(skillDetails:any)=>{
    return {
        type: actions.GET_SKILL_DETAILS,
        payload: skillDetails
    }
}

export const assignRelatedSkillsToJobs=(jobs:any)=>{
    return {
        type: actions.ASSIGN_RELATED_SKILLS_TO_JOBS,
        payload: jobs
    }
}

