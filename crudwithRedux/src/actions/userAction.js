import {FETCH_USERS} from './actionTypes';


 export function fetchUsers() {
    return dispatch => {
         fetch("http://localhost:4000/", {
         method: "GET"})
       .then(response => response.json())
         .then(response => {
            if(response !== undefined && response.status ==="success") {
              this.props.dispatch({type:USER_ATTACHMENT,data:response.payload})   
           }
      })
    }
}
