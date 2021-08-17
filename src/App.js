import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/TwoColumnWithInput" 
import FAQ from "components/faqs/SingleCol"
import Feature from "components/features/TwoColWithSteps"
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder"
import FrontLoading from "components/steps/FrontLoading"
import CodeDemo from "components/steps/CodeDemo"
import Footer from "components/footers/MiniCenteredFooter"
import SelfStudy from "components/steps/SelfStudy"

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Feature />
      <FrontLoading />
      <CodeDemo />
      <Blog />
      <Footer />
      <SelfStudy />
      <FAQ />
    </AnimationRevealPage>
  );
}

export default App;
