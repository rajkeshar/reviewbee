
import Header from "@/components/home/home-v1/Header";
import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";
// import "../../public/scss/new_style.scss"

export const metadata = {
  title: "ReviewBee",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V1 />
    </Wrapper>
  );
}
