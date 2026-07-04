import HeroSection from '@/components/home/HeroSection';
import PipelineConsole from '@/components/home/PipelineConsole';
import FeatureHighlight from '@/components/home/FeatureHighlight';
import CallToAction from '@/components/home/CallToAction';

export default function LandingPage() {
  return (
    <div className="animate-fade-in space-y-16 py-12">
      <HeroSection />
      <PipelineConsole />
      <FeatureHighlight />
      <CallToAction />
    </div>
  );
}
