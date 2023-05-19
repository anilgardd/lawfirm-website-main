import React from "react";

const Appointment = () => {
  return (
    <div className="bg-black w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
        Başvuru Oluşturun
      </h3>
      {/* bar */}
      <div className="w-[54px] h-[3px] bg-white my-6 mx-auto"></div>
      {/* input group */}
      <div className="space-y-[24px]">
        <input
          className="form-control"
          placeholder="Adınız Soyadınız"
          type="text"
        />
        <input
          className="form-control"
          placeholder="Telefon Numaranız"
          type="text"
        />
        <input
          className="form-control"
          placeholder="Email Adresiniz"
          type="email"
        />
        <textarea
          className="resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary"
          placeholder="Mesajınızı Yazınız"
        ></textarea>
        {/* Button */}
        <button className="btn bg-primary hover:bg-primary-hover transition-all">
          Başvuru Oluştur
        </button>
      </div>
    </div>
  );
};

export default Appointment;
