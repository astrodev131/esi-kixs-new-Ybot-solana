import CyanButton from "../Components/Custom/Button";
import { BrownLargeText, BrownText } from "../Components/Custom/Text";

export default function EarnPage() {
  return (
    <div className="page">
      <main className="main">
        <div
          className="w-[95%] py-10 px-5 h-screen mx-auto"
          style={{
            backgroundImage: "url('/images/earn/brownbg.png')",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <BrownText>Congratulations!</BrownText>
            <BrownLargeText>You won the bet!</BrownLargeText>
          </div>
          <CyanButton>+124.77 USDT</CyanButton>
        </div>
      </main>
    </div>
  );
}
