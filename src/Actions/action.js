import axios from 'axios'

export const GetJobByEmpId = (id) =>{
    console.log("at job",id);
    
        return async function(dispatch, getState) {
            await axios.get("http://localhost:8080/student/getall")
            .then(data => {
                console.log(data);
                return{
                    type: "GETALL",
                    data: data
                }
            });
    };
}
