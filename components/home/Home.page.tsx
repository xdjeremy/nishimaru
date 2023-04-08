import React, {FC} from 'react';
import HeroSection from "@/components/home/Hero.section";

const HomePage: FC = () => {
  return (
    <div className={'w-screen'}>
      <HeroSection />
    </div>
  );
};

export { HomePage };
