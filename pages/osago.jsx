import Head from "next/head";
import { Banner, AdvantagesIngos } from "@/components";
import { LINKS, BRAND } from "@/consts";
import { useLang } from "@/components/i18n/LangContext";

const advImgs = ["/osago-i-order-online.svg", "/osago-i-support.svg", "/osago-i-incident-online.svg"];

const Osago = () => {
  const { t } = useLang();
  const p = t.osagoPage;
  const data = p.adv.map((a, i) => ({ ...a, img: advImgs[i] }));

  return (
    <>
      <Head>
        <title>{`${p.title} — ${BRAND.name}`}</title>
      </Head>
      <Banner
        title={p.title}
        description={p.description}
        link={LINKS.OSAGO_CALC}
        linkTitle={p.cta}
        img="/auto-osago__hero-banner-new-3.svg"
        points={p.points}
      />
      <AdvantagesIngos title={p.advTitle} data={data} />
    </>
  );
};

export default Osago;
