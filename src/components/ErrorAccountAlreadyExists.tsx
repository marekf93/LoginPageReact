import React from "react";

const ErrorNotification: React.FC = () => {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="w-[272px] h-8 pl-1 pr-2.5 py-1 bg-red-50 rounded-full justify-start items-center gap-3 inline-flex">
        <div className="px-2.5 py-0.5 bg-white rounded-full shadow justify-start items-center flex">
          <div className="text-center text-red-800 text-sm font-medium font-['Noto Sans'] leading-tight">
            Error
          </div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="text-red-600 text-sm font-medium font-['Noto Sans'] leading-tight">
            Account already exists.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotification;
