import Head from "next/head";
import { CalculatorOsago } from "@/components";
import { BRAND } from "@/consts";
import { useLang } from "@/components/i18n/LangContext";

const KaskoCalc = () => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>{`${t.calcTeaser.calcKasko} — ${BRAND.name}`}</title>
      </Head>
      <CalculatorOsago title={t.products.kasko.title} />
    </>
  );
};

export default KaskoCalc;
