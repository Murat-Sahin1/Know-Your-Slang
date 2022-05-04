import {useState, useCallback} from 'react';
import axios from 'axios';
import {API_HOST, API_KEY} from '../../assets/Config/Config'


export default ()=>{
    const [errorMessage, seterrorMessage] = useState('');
    const [response, setResponse] = useState([]);


    const apiSearch = useCallback((term) =>{
      //const t = Date.now()
      var options = {
        method: 'get',
        baseURL: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: {term: term},
        headers: {
          'x-rapidapi-host': API_HOST,
          'x-rapidapi-key': API_KEY,
        }
      };
      
      axios.request(options).then(function (response) {
          //console.log(Date.now() - t);
          setResponse(response.data);
      }).catch(function (error) {
          console.error(error);
      });
  },[]);

    return [apiSearch, errorMessage, response];
};