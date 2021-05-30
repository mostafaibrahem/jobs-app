export const baseURL = 'http://api.dataatwork.org/v1'
export function getResource(route:string, onSuccess:any, onFailure:any) {
    fetch(`${baseURL}/${route}`)
        .then((response) => response.json())
        .then((data) => onSuccess(data))
        .catch((error) => onFailure(error))

}