import axios from 'axios'

const fetcher = async (target) =>{
   const response = await fetch(target)
   .then(response => response.json())
   .then(data =>  {return data})
   return response;
}


export const ProductFetcher = async () =>{
   const response = await axios.get('/api/Product').then((response) => { return response.data})
   return response
}

export const ProductFetcherById = async (target) =>{
   return (fetcher(`/api/Product/${target}`))
}