import Advantages from "@/components/advantages";
import InsuranceBlock from "@/components/insuranceBlock";
import UsefulInfos from "@/components/usefulInfos";
import UsefulServices from "@/components/usefulServices";

export default function Home() {
  return (
    <main>
      <InsuranceBlock />
      <UsefulServices />
      <Advantages />
      <UsefulInfos />
    </main>
  );
}
