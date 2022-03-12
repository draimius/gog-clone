import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
//we can pass in as const and set value from context (as var's and note as props) - interesting //from its Hook
import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  // pulling value from Hook context
  //the result value will be dif data dependent on the type of request/search made
  const { getData, result, searchTerm, isLoading } = useResultContext();
  const location = useLocation(); //provides the current path/url

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getData(`/search/q=${searchTerm} videos`);
      } else {
        getData(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return 'Loading...';

  switch (location.pathname) {
    case '/search':
      return (
        //TEXT
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {result?.results?.map(({ link, title }, i) => (
            <div key={i} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferre">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    // IMAGES
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {result?.image_results?.map(({ image, link: { href, title } }, i) => (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={i}
              target="_blank"
              useref="noreferre"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 word-break text-sm mt-2">{title} </p>
            </a>
          ))}
        </div>
      );
    //NEWS
    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {Array.isArray(result) &&
            result?.map(({ links, id, source, title }) => (
              <div key={id} className="md:w-2/5 w-full">
                <a
                  href={links?.[0].href}
                  target="_blank"
                  useRef="noreferre"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferre">
                    {source?.href}
                  </a>
                </div>
              </div>
            ))}
        </div>
      );
    //VIDEOS
    case '/videos':
      return (
        <div className="flex flex-wrap">
          {result?.results?.map((vid, i) => (
            <div key={i} className="p-2">
              {vid.additional_links?.[0].href && (
                <ReactPlayer
                  url={vid.additional_links?.[0].href}
                  controls
                  width="355px"
                  height="200px"
                  useref="noreferre"
                />
              )}
            </div>
          ))}
        </div>
      );
  }

  return <div>Results</div>;
};

export default Results;
