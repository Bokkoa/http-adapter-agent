import axios, { AxiosResponse } from 'axios';


const baseUrl = 'https://reqres.in/api';
axios.defaults.baseURL = baseUrl;

// axios mapping
const responseBody = ( response: AxiosResponse ) => response.data

export const requestMapAxios = {
    get: ( url: string )            => axios.get( url ).then( responseBody ),

    post: (url: string, body: {} )  => axios.post( url, body ).then( responseBody ),

    put: ( url: string, body: {})   => axios.put( url, body ).then( responseBody ),

    delete: ( url: string )         => axios.delete( url ).then( responseBody ),

}

// Fetch mapping
const responseBodyFetch = ( response:any ) => response.json();

export const requestMapFetch = {
    get:(url: string)              => fetch( baseUrl + url ).then( responseBodyFetch ),

    post:(url: string, body: {} )  => fetch( baseUrl + url, { method:'POST', body: {...body} as BodyInit} ).then( responseBodyFetch ),

    put:(url: string, body: {} )   => fetch( baseUrl + url, { method:'PUT', body: {...body} as BodyInit} ).then( responseBodyFetch ),

    delete:(url: string )          => fetch( baseUrl + url, { method:'DELETE'} ).then( () => '' as any )
}

