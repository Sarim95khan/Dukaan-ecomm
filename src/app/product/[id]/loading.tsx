import React from 'react';

const Loading = () => {
  return (
    <div>
      {' '}
      <div className="max-w-7xl min-h-screen mx-auto p-10">
        {Array.from({ length: 1 }, (_, i) => i + 1).map((item) => {
          return (
            <div key={item} className="grid md:grid-cols-4 md:gap-x-4">
              <div className="col-span-4 md:col-span-2 "></div>
              <div className="mt-4 md:mt-0 col-span-2 md:col-span-1 ">
                <h1></h1>

                <p></p>
                <p></p>
              </div>
              <div className="mt-4 md:mt-0 w-full col-span-2 md:col-span-1">
                <div className="shadow-xl p-4  ">
                  <p></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
