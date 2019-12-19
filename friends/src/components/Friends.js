import React, {useState,useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Friends = () => {
     const [data,setData] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(resp => 
            setData(
                ...data,
                resp.data
            )    
        )
        .catch(err => console.log(err));

    },[]);
    return (<>
        <div>
            <h1>Friends!</h1>
            {console.log(data)}
            {data.map((item,index) => 
                <div key={Date.now() + index}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>Email: {item.email}</p>

                </div>

            )}
            
        </div>
    </>);

}
export default Friends;