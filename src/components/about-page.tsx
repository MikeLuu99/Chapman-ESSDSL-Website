'use client'

import { Navbar } from './navbar'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react'

// This would typically be imported from a JSON file
const labMembers = {
  "Lab President": [
    {
      name: "Dr. Hesham El-Askary",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/hesham_elaskary.png",
      degree: "Ph.D.",
      company: "Professor, Computational and Data Science Graduate Programs, Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/heshamelaskary"
      }
    }
  ],
  "Senior Research Associates": [
    {
      name: "Dr. Wenzhao Li",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/wenzhao_li.png",
      degree: "Ph.D.",
      company: "Senior Research Associate, Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/wenzhaoli"
      }
    },
    {
      name: "Dr. Rejoice Thomas",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/rejoice_thomas.png",
      degree: "Ph.D.",
      company: "Postdoctoral Fellow & Lecturer in Mathematics, Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/rejoicethomas"
      }
    }
  ],
  "Graduate Students": [
    {
      name: "Nikolay Grisel-Todorov",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/nikolay_grisel_todorov.jpg",
      degree: "Ph.D. Candidate",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/nikolaygriseltodorov"
      }
    },
    {
      name: "Surendra Maharjan",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/surrendra_maharjan.jpg",
      degree: "Ph.D. Student",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/surendramaharjan"
      }
    },
    {
      name: "Susan Mikhail",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/susan_mikhail.png",
      degree: "Ph.D. Student",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/susanmikhail"
      }
    },
    {
      name: "Hesham Morgan",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/hesham_morgan.png",
      degree: "Ph.D. Student",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/heshammorgan"
      }
    },
    {
      name: "Shahryar Fazli",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/sharyar_fazli.png",
      degree: "Ph.D. Student",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/shahryarfazli"
      }
    }
  ],
  "Undergraduate Students": [
    {
      name: "Eli Duran",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/eli_duran.png",
      degree: "B.S. in Electrical Engineering (In Progress)",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/eliduran"
      }
    },
    {
      name: "Brandon Tran",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/brandon_tran.png",
      degree: "B.S. in Computer Science (In Progress)",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/brandontran"
      }
    },
    {
      name: "Mike Luu",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/mike_luu.png",
      degree: "B.S. in Computer Science (In Progress)",
      company: "Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/mikeluu"
      }
    }
  ],
  "Former Lab Members": [
    {
      name: "Dr. Sachi Perera",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/sachi_perera.png",
      degree: "Ph.D.",
      company: "2024 Graduate, Chapman University",
      social: {
        linkedin: "https://linkedin.com/in/sachiperera"
      }
    },
    {
      name: "Dr. Nicholas LaHaye",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/nicholas_lahaye.jpg",
      degree: "Ph.D.",
      company: "Data Scientist, Jet Propulsion Laboratory, California Institute of Technology",
      social: {
        linkedin: "https://linkedin.com/in/nicholaslahaye"
      }
    },
    {
      name: "Dr. Justin Le",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/justin_le.png",
      degree: "Ph.D.",
      company: "Principal Software Engineer, Anduril Industries",
      social: {
        linkedin: "https://linkedin.com/in/justinle"
      }
    },
    {
      name: "Dr. Justin Gapper",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/justin_gapper.png",
      degree: "Ph.D.",
      company: "Head of FinTech Science and Engineering, Amazon",
      social: {
        linkedin: "https://linkedin.com/in/justingapper"
      }
    },
    {
      name: "Dr. Luciano Rodriguez",
      image: "https://pub-c851c075f4cb465ab1ad2234f44959b2.r2.dev/luciano_rodriguez.jpg",
      degree: "Ph.D.",
      company: "Professor, Mathematics and Computer Science, Fullerton College",
      social: {
        linkedin: "https://linkedin.com/in/lucianorodriguez"
      }
    }
  ]
}

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
        {Object.entries(labMembers).map(([category, members], index) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">{category}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {members.map((member, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
            {index < Object.entries(labMembers).length - 1 && (
              <hr className="my-12 border-t border-gray-200" />
            )}
          </section>
        ))}
      </main>
    </div>
  )
}