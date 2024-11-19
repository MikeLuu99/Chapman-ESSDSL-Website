'use client'

import { useState } from 'react'
import { Navbar } from './navbar'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import researchProjects from '@/data/essdsl_papers.json'

function ResearchCard({ project, onClick }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">
          By: {project.authors.join(", ")}
        </p>
        <div className="flex justify-between items-center mb-4">
          <Badge className='bg-[#a40033]'>{project.area}</Badge>
          <span className="text-sm text-muted-foreground">Published: {project.year}</span>
          </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={() => onClick(project)}>
            More Details
          </Button>
          {project.link && (
            <Link href={project.link} className="text-sm text-primary hover:underline">
              View Paper
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function ResearchPageComponent() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [areaFilter, setAreaFilter] = useState("all")
  const [sortOption, setSortOption] = useState("newest")
  const [searchTerm, setSearchTerm] = useState("")

  // Get unique areas from the JSON data
  const areas = [...new Set(researchProjects.map(project => project.area))]

  const filteredAndSortedProjects = researchProjects
    .filter(project => {
      const matchesArea = areaFilter === "all" || project.area === areaFilter;
      const matchesSearch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.authors.some(author => 
          author.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.area.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesArea && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOption === "newest") {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Research</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex h-9 w-full md:w-[280px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
          <div className="flex gap-4 flex-1 justify-end">
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
              <p className="my-4">
                <strong>Authors: </strong>
                {selectedProject.authors.join(", ")}
              </p>
              <div className="flex justify-between items-center mt-6">
                <Badge>{selectedProject.area}</Badge>
                {selectedProject.links && (
                  <Link href={selectedProject.links} className="text-primary hover:underline">
                    View Full Paper
                  </Link>
                )}
              </div>
            </DialogDescription>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}