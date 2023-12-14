import Statistical from "./components/Statistical";
import BannerMini from "./components/BannerMini";
import AuthUI from "./components/AuthUI";
import Header from "./components/Header";

export default function Main() {
  return (
    <>
      <Header />
      <div className="bg-[url('/background.png')] min-h-screen bg-cover pt-[168px] pb-[70px]">
        <div className="flex md:flex-wrap justify-center md:justify-between mx-auto max-w-[calc(100%-32px)] w-[1084px] pt-[80px] pb-[90px]">
          <AuthUI />
          <BannerMini />
        </div>
        <Statistical />
      </div>
    </>
  );
}
