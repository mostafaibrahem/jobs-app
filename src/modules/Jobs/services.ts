import { getResource } from "../../network"

export function getJobs(query: { offset: number, limit: number }, onSuccess: any, onError: any) {
    getResource(`jobs?offset=${query.offset}&limit=${query.limit}`, (res: object) => {
        onSuccess(res)
    }, (fail: any) => {
        onError(fail.errors)
    })
}

//GET /jobs/{id}/related_skills
export function getJobRelatedSkills(id: string, onSuccess: any, onError: any) {
    getResource(`jobs/${id}/related_skills`, (res: object) => {
        onSuccess(res)
    }, (fail: any) => {
        onError(fail.errors)
    })
}

//GET /jobs/{id}/related_jobs
export function getJobRelatedJobs(id: string, onSuccess: any, onError: any) {
    getResource(`jobs/${id}/related_jobs`, (res: object) => {
        onSuccess(res)
    }, (fail: any) => {
        onError(fail.errors)
    })
}

//GET /jobs/autocomplete
export function getAutoCompeleteJobs(keyWord: string, onSuccess: any, onError: any) {
    getResource(`jobs/autocomplete?contains=${keyWord}`, (res: object) => {
        onSuccess(res)
    }, (fail: any) => {
        onError(fail.errors)
    })
}

//GET /skillsS/{id}/related_skills
export function getSkillRelatedSkills(id: string, onSuccess: any, onError: any) {
    getResource(`skills/${id}/related_skills`, (res: object) => {
        onSuccess(res)
    }, (fail: any) => {
        onError(fail.errors)
    })
}

//GET /skills/{id}/related_jobs
export function getSkillRelatedJobs(id: string, onSuccess: any, onError: any) {
    getResource(`skills/${id}/related_jobs`, (res: object) => {
        onSuccess(res)
    }, (fail: any) => {
        onError(fail.errors)
    })
}

//GET /skills/{id}
export function getSkillDetails(id: string, onSuccess: any, onError: any) {
    getResource(`skills/${id}`, (res: object) => {
        onSuccess(res)
    }, (fail: any) => {
        onError(fail.errors)
    })
}