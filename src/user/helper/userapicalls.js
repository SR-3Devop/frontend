import {API} from "../../backend"


export const getUser = (userId,token,user) => {
    return fetch(`${API}/user/${userId}`,{
        method:"GET.",
        headers:{
            Accept:"application/json",
              "Content-Type":"application/json", 
            Authorization:`Bearer ${token}`
        },
        body:user
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
    }



export const updateUser = (userId,token,user) => {
return fetch(`${API}/user/${userId}`,{
    method:"PUT",
    headers:{
        Accept:"application/json",
          "Content-Type":"application/json", 
        Authorization:`Bearer ${token}`
    },
    body:user
})
.then(response => {
    return response.json();
})
.catch(err => console.log(err))
}