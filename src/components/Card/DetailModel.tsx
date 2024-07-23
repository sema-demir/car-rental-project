type DetailProps = {
  isOpen: boolean;
  closeModel: () => void;
};
const DetailModel = ({ isOpen, closeModel }: DetailProps) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-20 p-4 bg-opacity-25">
          <div className="p-6  bg-white max-w-lg w-full rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto relative max-h-[90vh]">
            {/* Kpatma Butonu */}
            <button
              onClick={closeModel}
              className="absolute top-1 end-1 rounded-full bg-white cursor-pointer p-1 z-10"
            >
              <img src="/public/close.svg" alt="" />
            </button>
            {/* Resimler */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="w-full relative h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img src="/public/hero.png" alt="" className="h-full mx-auto" />
              </div>
              {/* küçük resimler  */}
              <div className="flex gap-3">
                <div className="flex-1 flex relative w-full h-24 bg-primary-100">
                  <img
                    src="/public/hero.png"
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-100">
                  <img
                    src="/public/hero.png"
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-100">
                  <img
                    src="/public/hero.png"
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
            {/* Araba Bilgileri */}
            <div className=" flex justify-between">
              <h4 className="capitalize text-gray">City Mpg</h4>
              <p className="text-black-100 font-semibold ">14</p>
            </div>
            <div className=" flex justify-between">
              <h4 className="capitalize text-gray">City Mpg</h4>
              <p className="text-black-100 font-semibold ">14</p>
            </div>
            <div className=" flex justify-between">
              <h4 className="capitalize text-gray">City Mpg</h4>
              <p className="text-black-100 font-semibold ">14</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailModel;
