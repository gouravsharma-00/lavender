import React from 'react'

import {
  
  Footer, 
  Hero, 
  SocialProof,
  ProblemSolution,
  Features,
  AIInsights,
  ChartsPreview,
  Pricing

} from '@components'

export default function Index() {
  return(
    <div className='min-h-screen'>
      
      <Hero />
      <ProblemSolution />
      <Features />
      <AIInsights />
      <ChartsPreview />
      <SocialProof />
      <Pricing />
      <Footer />

    </div>
  )
}