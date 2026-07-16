import "@/styles/globals.scss";
import { Layout } from "@/components/layout";
import { LangProvider } from "@/components/i18n/LangContext";
import { EntityProvider } from "@/components/context/EntityContext";

export default function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <EntityProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EntityProvider>
    </LangProvider>
  );
}
