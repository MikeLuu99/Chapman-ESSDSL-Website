'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './navbar'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// This would typically be imported from a JSON file
const galleryItems = [
  {
    id: 1,
    image: "https://placehold.co/600x400?text=Project+1",
    title: "Quantum Computing Research",
    description: "Our team is pushing the boundaries of quantum computing, exploring new algorithms that could revolutionize data processing and cryptography.",
    link: "/research/quantum-computing"
  },
  {
    id: 2,
    image: "https://placehold.co/600x400?text=Project+2",
    title: "Nanotechnology Innovations",
    description: "Developing cutting-edge nanotechnology applications for medicine, electronics, and environmental science.",
    link: "/research/nanotechnology"
  },
  {
    id: 3,
    image: "https://placehold.co/600x400?text=Project+3",
    title: "AI in Healthcare",
    description: "Applying artificial intelligence to improve diagnostic accuracy and treatment planning in healthcare settings.",
    link: "/research/ai-healthcare"
  },
  {
    id: 4,
    image: "https://placehold.co/600x400?text=Project+4",
    title: "Sustainable Energy Solutions",
    description: "Researching and developing new sustainable energy technologies to combat climate change and reduce carbon emissions.",
    link: "/research/sustainable-energy"
  },
  {
    id: 5,
    image: "https://placehold.co/600x400?text=Project+5",
    title: "Bioinformatics Breakthroughs",
    description: "Leveraging big data and machine learning to unlock new insights in genetics and molecular biology.",
    link: "/research/bioinformatics"
  },
  {
    id: 6,
    image: "https://placehold.co/600x400?text=Project+6",
    title: "Robotics and Automation",
    description: "Advancing the field of robotics with new AI-driven control systems and human-robot interaction paradigms.",
    link: "/research/robotics"
  }
]

function GalleryItem({ item, onClick }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => onClick(item)}
        />
        <div className="p-4">
          <h3 className="font-semibold text-center">{item.title}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

export function GalleryPageComponent() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-center">Research Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} onClick={setSelectedItem} />
          ))}
        </div>
      </main>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
            </DialogHeader>
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-md"
            />
            <DialogDescription>
              <p className="my-4">{selectedItem.description}</p>
              <Link href={selectedItem.link} className="text-primary hover:underline">
                Learn More
              </Link>
            </DialogDescription>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}