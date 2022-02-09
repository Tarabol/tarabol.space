import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import TechnologySection from '@/components/technolgies-section';
import HiringSection from '@/components/hiring-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import VideoSection from '@/components/video-section';
import ServicesSection from '@/components/service-section';
import Footer from '@/components/footer';
import TarabolSection from '@/components/tarabol-section';
import Leaderships from '@/components/leaderships-section';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Tarabol" description="Tarabol" />
      <Header />
      <main>
        <ServicesSection />
        <FeatureSection />
        <Leaderships />
        <ListSection />
        {/* <TechnologySection /> */}
        {/* <CasesSection /> */}
        {/* <SocialProof /> */}
        {/* <PricingTable /> */}
        {/* <HiringSection /> */}
        {/* <VideoSection /> */}
        {/* <TarabolSection /> */}
      </main>
      <Footer />
    </Page>
  );
}
