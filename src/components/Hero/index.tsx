import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 padding-x  pt-36 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>
        <p className="text-gray-200 hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile Taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CustomButton title="Arabaları Keşfet" designs="mt-10" />
      </div>
      <div className="w-100 flex justify-center">
        <img
          src="./../../../public/hero.png"
          alt=""
          width={700}
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
