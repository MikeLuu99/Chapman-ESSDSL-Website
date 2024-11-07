'use client'

import { useState } from 'react'
import { Navbar } from './navbar'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

// This would typically be imported from a JSON file
const researchProjects = [
  {
    title: "Quantum Entanglement in Multi-Qubit Systems",
    description: "Investigating the properties and applications of quantum entanglement in systems with multiple qubits.",
    detailedDescription: "This research explores the intricate phenomena of quantum entanglement in multi-qubit systems. We're developing new theoretical frameworks and experimental techniques to harness entanglement for quantum computing and communication applications. Our findings could lead to breakthroughs in quantum cryptography and ultra-secure data transmission.",
    area: "Quantum Computing",
    paperLink: "https://example.com/quantum-entanglement-paper",
    publishDate: "2023-05-15",
    year: 2023
  },
  {
    title: "Machine Learning for Drug Discovery",
    description: "Applying advanced machine learning algorithms to accelerate the drug discovery process.",
    detailedDescription: "Our team is leveraging state-of-the-art machine learning techniques to revolutionize drug discovery. By analyzing vast datasets of molecular structures and biological interactions, we're able to predict potential drug candidates with unprecedented accuracy. This research has the potential to significantly reduce the time and cost associated with bringing new medications to market.",
    area: "Artificial Intelligence",
    paperLink: "https://example.com/ml-drug-discovery-paper",
    publishDate: "2023-08-22",
    year: 2023
  },
  {
    title: "Nanoscale Sensors for Environmental Monitoring",
    description: "Developing highly sensitive nanoscale sensors for real-time environmental pollutant detection.",
    detailedDescription: "This project focuses on creating cutting-edge nanoscale sensors capable of detecting minute quantities of environmental pollutants. Our sensors utilize novel materials and quantum effects to achieve unprecedented sensitivity. The technology we're developing could lead to more effective environmental monitoring systems, enabling faster responses to pollution events and improving overall ecological management.",
    area: "Nanotechnology",
    paperLink: "https://example.com/nanoscale-sensors-paper",
    publishDate: "2023-03-10",
    year: 2023
  },
  {
    title: "Sustainable Biofuel Production from Algae",
    description: "Optimizing algae strains and cultivation methods for efficient, large-scale biofuel production.",
    detailedDescription: "Our research aims to overcome the challenges in large-scale algal biofuel production. We're working on genetically optimizing algae strains to increase lipid yield and developing innovative cultivation and harvesting techniques. This work could pave the way for a new generation of sustainable, carbon-neutral fuels that don't compete with food crops for agricultural resources.",
    area: "Renewable Energy",
    paperLink: "https://example.com/algae-biofuel-paper",
    publishDate: "2023-06-30",
    year: 2023
  },
  {
    title: "Neuroplasticity in Adult Learning",
    description: "Studying the mechanisms of neuroplasticity to enhance adult learning and memory formation.",
    detailedDescription: "This research delves into the fascinating field of neuroplasticity, particularly in adult brains. We're investigating the molecular and cellular mechanisms that allow the brain to form new neural connections throughout life. Our findings could lead to novel therapies for cognitive disorders and new strategies to enhance learning and memory in healthy adults.",
    area: "Neuroscience",
    paperLink: "https://example.com/neuroplasticity-paper",
    publishDate: "2023-09-05",
    year: 2023
  }
]

function ResearchCard({ project, onClick }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex justify-between items-center mb-4">
          <Badge className='bg-[#a40033]'>{project.area}</Badge>
          <span className="text-sm text-muted-foreground">Published: {project.year}</span>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={() => onClick(project)}>
            More Details
          </Button>
          <Link href={project.paperLink} className="text-sm text-primary hover:underline">
            View Paper
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export function ResearchPageComponent() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [areaFilter, setAreaFilter] = useState("all")
  const [sortOption, setSortOption] = useState("newest")

  const areas = [...new Set(researchProjects.map(project => project.area))]

  const filteredAndSortedProjects = researchProjects
  .filter(project => {
    if (areaFilter === "all") return true;
    return project.area === areaFilter;
  })
  .sort((a, b) => {
    if (sortOption === "newest") {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    } else {
      return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Research</h1>
        
        <div className="flex justify-between mb-8">
          <Select value={areaFilter} onValueChange={setAreaFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Research Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Areas</SelectItem>
              {areas.map(area => (
                <SelectItem key={area} value={area}>{area}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProjects.map((project) => (
            <ResearchCard key={project.title} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </main>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p className="my-4">{selectedProject.detailedDescription}</p>
              <div className="flex justify-between items-center mt-6">
                <Badge>{selectedProject.area}</Badge>
                <Link href={selectedProject.paperLink} className="text-primary hover:underline">
                  View Full Paper
                </Link>
              </div>
            </DialogDescription>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}