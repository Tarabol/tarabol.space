import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import TechnologySection from '@/components/technolgies-section'
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Tarabol"
        description="Tarabol"
      />
      <Header />
      <main>
        <ListSection />
        <FeatureSection />
        <TechnologySection />
        {/* <CasesSection /> */}
        {/* <SocialProof /> */}
      </main>
      <Footer />
    </Page>
  );
}
