import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/TwoColumnWithInput" 
import FAQ from "components/faqs/SingleCol"
import Card from "components/cards/TwoTrendingPreviewCardsWithImage"
import Feature from "components/features/TwoColWithSteps"

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Feature />
      <Card />
      <FAQ />
    </AnimationRevealPage>
  );
}

export default App;
