import { HeroSection } from '@/components/HeroSection/HeroSection';
import { PageKey } from '@/services/api/getSectionData';
import { Section } from '@/components/Section/Section';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <Section page={PageKey.HOME} />
        </main>
    );
};

export default Home;
