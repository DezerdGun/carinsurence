import Head from "next/head";
import { CalculatorOsago } from "@/components";
import { BRAND } from "@/consts";
import { useLang } from "@/components/i18n/LangContext";

const OsagoCalc = () => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>{`${t.calcTeaser.calcOsago} — ${BRAND.name}`}</title>
      </Head>
      <CalculatorOsago title={t.products.osago.title} />
    </>
  );
};

export default OsagoCalc;
