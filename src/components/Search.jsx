import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../contexts/ResultContextProvider';
import Link from './Link';

const Search = () => {
  const [text, setText] = useState('flowers');
  const { setSearchTerm } = useResultContext();
  //setting the time int where will listen for change in text
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }

    // only run overytime value in debounce changes aka text only every 300ms
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-small outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search The Gog"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button
          type="button"
          className="absolute top-1.5 right-5 text-2xl text-gray.500"
          onClick={() => setText('')}
        >
          x
        </button>
      )}
      <Link />
    </div>
  );
};

export default Search;

//what is de bounce?????? (related to inputs??)
//limitint req to api only one req per hawoever time frame
