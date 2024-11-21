'use client'

import { Navbar } from './navbar'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, TwitterIcon, GithubIcon, BookOpenIcon } from 'lucide-react'
import labMembers_ from "@/data/members.json"

function MemberCard({ member }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Image
            src={member.image}
            alt={member.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <CardTitle>{member.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{member.degree}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{member.company}</p>
        <div className="flex space-x-2">
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <LinkedinIcon size={20} />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <TwitterIcon size={20} />
            </a>
          )}
          {member.social.github && (
            <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <GithubIcon size={20} />
            </a>
          )}
          {member.social.scholar && (
            <a href={member.social.scholar} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary mt-0.5">
              <BookOpenIcon size={20} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container py-12 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-center">About Our Lab</h1>
        {Object.entries(labMembers_).map(([category, members], index) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">{category}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {members.map((member, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
            {index < Object.entries(labMembers_).length - 1 && (
              <hr className="my-12 border-t border-gray-200" />
            )}
          </section>
        ))}
      </main>
    </div>
  )
}