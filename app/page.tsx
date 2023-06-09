"use client"

import { Card, Divider, Subtitle, Text } from '@tremor/react';
import CityPicker from 'cuddlytribble/components/CityPicker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a0879] to-[#7036b3] p-10 flex flex-col justify-center">
      <Card className='max-w-4xl mx-auto'>
    <Text className='text-6xl font-bold text-center mb-10'>Cuddly Tribble Weather AI</Text>
    <Subtitle className='text-xl text-center mb-10'>Powered by OpenAI, Next.js, Taiwind CSS, Tremor 2.0 and more</Subtitle>

    <Divider className='my-10' />

    <Card className='bg-gradient-to-br from-[#2a0879] to-[#7036b3]'><CityPicker /></Card>
    </Card>
    </div>
  )
}
