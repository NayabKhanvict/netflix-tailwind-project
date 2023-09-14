import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full rounded-[20px] px-10 py-16 flex-1 sm:w-[350px] sm:min-w-[350px] shadow-xl">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words text-lg leading-normal text-slate-gray font-sans">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
