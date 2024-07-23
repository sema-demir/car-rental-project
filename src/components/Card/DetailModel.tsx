type DetailProps = {
  isOpen: boolean;
  closeModel: () => void;
};
const DetailModel = ({ isOpen, closeModel }: DetailProps) => {
  return (
    <div>
      {isOpen && (
        <div className=" bg-black flex items-center justify-center z-20 bg-opacity-25">
          <div className="bg-white w-full relative max-h[90vh]">
            {/* Kpatma Butonu */}
            <button onClick={closeModel}>
              <img src="/public/close.svg" alt="" />
            </button>
            <div>
              <div>
                <img src="/public/hero.png" alt="" />
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
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailModel;
