export default function Statistical() {
  return (
    <div className="flex flex-wrap flex-col gap-y-10 md:gap-y-0 md:flex-row justify-around mx-auto max-w-[calc(100%-32px)] w-[1168px] border-solid border-[1px] border-white rounded-[20px] py-[43px] bg-[rgba(255,255,255,0.5)]">
      <div className="flex flex-col text-center">
        <p className="text-[49px] font-normal leading-[64px] text-[#17344F]">
          $1.80B
        </p>
        <p className="text-[#8795AF] font-normal leading-6 tracking-normal mt-[13px]">
          30 Day Volume
        </p>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-[49px] font-normal leading-[64px] text-[#17344F]">
          $0.84B
        </p>
        <p className="text-[#8795AF] font-normal leading-6 tracking-normal mt-[13px]">
          Managed on testX.fi
        </p>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-[49px] font-normal leading-[64px] text-[#17344F]">
          $21.43M
        </p>
        <p className="text-[#8795AF] font-normal leading-6 tracking-normal mt-[13px]">
          Total Collateral Automated
        </p>
      </div>
    </div>
  );
}
