import { TopBar }      from '@/components/layout/TopBar';
import { Header }      from '@/components/layout/Header';
import { Footer }      from '@/components/layout/Footer';
import { Hero }        from '@/components/sections/Hero';
import { FeatureStrip } from '@/components/sections/FeatureStrip';
import { About }       from '@/components/sections/About';
import { Services }    from '@/components/sections/Services';
import { Flow }        from '@/components/sections/Flow';
import { Voice }       from '@/components/sections/Voice';
import { FinalCTA }    from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* スキップリンク（スクリーンリーダー対応） */}
      <a href="#main-content" className="skip-link">
        メインコンテンツへスキップ
      </a>

      {/* TopBar */}
      <TopBar />

      {/* Header（固定） */}
      <Header />

      <main id="main-content">
        {/* Hero（TopBar分 + Headerの高さを考慮） */}
        <div style={{ paddingTop: '36px' }}>
          <Hero />
        </div>

        {/* FeatureStrip（-80px overlap） */}
        <FeatureStrip />

        {/* About */}
        <About />

        {/* Services */}
        <Services />

        {/* Flow */}
        <Flow />

        {/* Voice / Testimonials */}
        <Voice />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
