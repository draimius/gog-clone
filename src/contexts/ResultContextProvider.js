import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('flowers');

  const getData = async (type) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY,
      },
    });
    const data = await res.json();

    if (type.includes('/news')) {
      setResult(data.entries);
    } else {
      setResult(data);
    }

    console.log(data);
    setIsLoading(false);
    //shouldnt we have type of try and catch here
  };
  return (
    <ResultContext.Provider
      value={{ getData, result, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
//se we created a context  via const and creatContext(ran as funciton) we then created component
//of the provideer  set our api call async and awaits fetch ect.. then we return the component at the end
//with value={props we want to pass into it and access in other files where we may inport this component}
//and the {children} in between (display) - prop not completely sure what that does/is  learn more about that ???
//then we export the new const of useResultContext the the useContext the was react imported
//--with ResultContext passed in (which we const set to createContext(function call))

//learn and understand better the context here all componenets setting ect...
