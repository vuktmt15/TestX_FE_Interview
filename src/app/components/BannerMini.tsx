import Image from "next/image";

export default function BannerMini() {
  return (
    <div>
      <div className="hidden md:flex md:flex-col md:relative md:justify-center md:items-center w-[225px] h-[121px] bg-white rounded-[20px]">
        <Image src="/logo.svg" alt="TestX" width={104} height={0}></Image>
        <span className="absolute top-[calc(50%+24px)] text-xs text-[#8795AF] font-normal leading-6 tracking-normal text-center">
          test Front end interview 1
        </span>
      </div>
    </div>
  );
}
