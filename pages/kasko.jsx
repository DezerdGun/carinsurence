import Head from "next/head";
import { Banner, AdvantagesIngos } from "@/components";
import { LINKS, BRAND } from "@/consts";
import { useLang } from "@/components/i18n/LangContext";

const advImgs = ["/kasko-adv-osmotr.svg", "/kasko-adv-monthly.svg", "/kasko-adv-repair.svg"];

const Kasko = () => {
  const { t } = useLang();
  const p = t.kaskoPage;
  const data = p.adv.map((a, i) => ({ ...a, img: advImgs[i] }));

  return (
    <>
      <Head>
        <title>{`${p.title} — ${BRAND.name}`}</title>
      </Head>
      <Banner
        title={p.title}
        description={p.description}
        link={LINKS.KASKO_CALC}
        linkTitle={p.cta}
        img="/kasko-key-visual.svg"
        points={p.points}
      />
      <AdvantagesIngos title={p.advTitle} data={data} />
    </>
  );
};

export default Kasko;
