import { baseURL } from "../../../network"
import { getAutoCompeleteJobs, getJobRelatedJobs, getJobRelatedSkills, getJobs, getSkillDetails, getSkillRelatedJobs, getSkillRelatedSkills } from "../services"
import { assignRelatedSkillsToJobs, getAllJobs, getAutoCompeleteList, getCurrentSkillDetails, getRelatedJobs, getRelatedJobsForSkill, getRelatedSkills, getRelatedSkillsForSkill, setAutoCompeleteLoading, setJobsLoading, setSearchText, setAutoCompeleteError } from "./actions"

const assignSkills = async (res: any) => {
    //res.pop()
    let updatedJobs = await Promise.all(
        res.map(async (element: any) => {
            let response = await fetch(`${baseURL}/jobs/${element.uuid}/related_skills`)
                .then((response) => response.json())
                .then((data) => element.related_skills = data)
            return element
        })
    )

    return updatedJobs
}


export const fetchJobs = (object: any) => {
    return (dispatch: any) => {
        dispatch(setJobsLoading(true))
        getJobs(object,
            (res: any) => {
                res.pop()
                assignSkills(res)
                    .then((jobs) => {
                        console.log('rrrr', jobs)
                        return jobs

                    })
                    .then((jobs) => {
                        dispatch(getAllJobs(jobs))
                        dispatch(setJobsLoading(false))
                    })

            }, (error: any) => {
                //dispatch(getAllJobs([]))
                console.log({ error })
            })
    }
}

export const fetchRelatedJobs = (id: string) => {
    return (dispatch: any) => {
        getJobRelatedJobs(id,
            (res: any) => {
                dispatch(getRelatedJobs(res))
            },
            (error: any) => {
                dispatch(getRelatedJobs([]))
                console.log({ error })
            })
    }
}

export const fetchRelatedSkills = (id: string) => {
    return (dispatch: any) => {
        getJobRelatedSkills(id,
            (res: any) => {
                dispatch(getRelatedSkills(res))
            },
            (error: any) => {
                dispatch(getRelatedSkills([]))
                console.log({ error })
            })
    }
}

export const fetchAutoCompeleteList = (keyWord: string) => {
    return (dispatch: any) => {
        getAutoCompeleteJobs(keyWord,
            (res: any) => {
                res.forEach((element: any) => {
                    fetch(`${baseURL}/jobs/${element.uuid}/related_skills`)
                        .then((response) => response.json())
                        .then((data) => element.related_skills = data)
                        .then(() => {
                            dispatch(getAutoCompeleteList(res))
                        })
                        .catch((error) => {
                            console.log(error)
                           
                        })

                })

                //dispatch(getAutoCompeleteList(res))
            },
            (error: any) => {
                dispatch(getAutoCompeleteList([]))
                console.log({ error })
            })
    }
}

export const emptyAutoCompelete = () => {
    return (dispatch: any) => {
        dispatch(getAutoCompeleteList([]))
    }
}

export const changeSearchText = (searchText: string) => {
    return (dispatch: any) => {
        dispatch(setSearchText(searchText))
    }
}

export const fetchSkillRelatedJobs = (id: string) => {
    return (dispatch: any) => {
        getSkillRelatedJobs(id,
            (res: any) => {
                dispatch(getRelatedJobsForSkill(res))
            },
            (error: any) => {
                dispatch(getRelatedJobsForSkill([]))
                console.log({ error })
            })
    }
}

export const fetchSkillRelatedSkills = (id: string) => {
    return (dispatch: any) => {
        getSkillRelatedSkills(id,
            (res: any) => {
                dispatch(getRelatedSkillsForSkill(res))
            },
            (error: any) => {
                dispatch(getRelatedSkillsForSkill([]))
                console.log({ error })
            })
    }
}

export const fetchSkillDetails = (id: string) => {
    return (dispatch: any) => {
        getSkillDetails(id,
            (res: any) => {
                dispatch(getCurrentSkillDetails(res))
            },
            (error: any) => {
                dispatch(getCurrentSkillDetails({}))
                console.log({ error })
            })
    }
}

export const addRelatedSkills = (related_skills: any) => {
    return (dispatch: any) => {
        dispatch(assignRelatedSkillsToJobs(related_skills))
    }
}
