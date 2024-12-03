"use client";

import Image from "next/image";
import { Navbar } from "./navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Globe from "@/components/ui/globe";
import KeckImage from "../../public/keck.png";

function GlobeDemo() {
	return (
		<div className="relative flex size-full w-full h-full items-center justify-center px-40 py-64 md:pb-96 mx-auto overflow-visible my-12">
			<div className="z-20 -mt-72 text-center">
				<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-700 to-gray-500 bg-clip-text text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
					Earth Systems Science and Data Solutions Lab
				</span>
			</div>
			<Globe className="top-72 scale-150 mt-12" />
		</div>
	);
}

// This would typically be imported from a JSON file
const pageConfig = {
	carousel: {
		images: [
			{
				src: "https://sites.chapman.edu/essds/files/2024/05/Background1-a014c26b1cc59d5d.jpeg",
				alt: "Project 1",
			},
			{
				src: "https://chapmanearthsystemlab.netlify.app/static/media/image2.a54b3a066255e12f2192.jpg",
				alt: "Image 2",
			},
			{
				src: "https://news.chapman.edu/wp-content/uploads/2023/04/22-985700-SMC-Congressman-Correa-Donation-152-768x512.jpg",
				alt: "Image 3",
			},
			{
				src: "https://pbs.twimg.com/media/FQ0K9p9VcAAlsgo?format=jpg&name=large",
				alt: "Image 4",
			},
		],
	},
	biography: {
		name: "Dr. Hesham El-Askary",
		image:
			"https://chapmanearthsystemlab.netlify.app/static/media/profile.213271462b09b8b67a0c.jpg",
		bio: "Professor El-Askary is contributing uniquely to world-class research by combining his knowledge of computational sciences and remote sensing technologies together with his keen interest in applying these technologies to address the environmental challenges facing citizens, governments, natural resources managers, and decision-makers.",
	},
	researchAreas: [...new Set(researchProjects.map(project => project.area))],
	contact: {
		email: "contact@chapman.edu",
		phone: "+1 (123) 456-7890",
		address: "Keck 368, 1 University Dr, Orange, CA 92866",
	},
};
function CarouselSpacing({ images }) {
	return (
		<Carousel className="w-full max-w-6xl mx-auto -mt-64">
			<CarouselContent className="-ml-1">
				{images.map((image, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Image
								src={image.src}
								alt={image.alt}
								width={1600}
								height={400}
								className="w-full h-[400px] object-cover rounded-lg border-2 border-[#a40033]"
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

function BiographySection({ name, image, bio }) {
	return (
		<Card className="flex flex-col md:flex-row items-center gap-8 py-12 mt-72 px-12 border-2">
			<Image
				src={image}
				alt={name}
				width={300}
				height={300}
				className="rounded-full"
			/>
			<div>
				<h2 className="text-4xl font-semibold mb-4 text-black">{name}</h2>
				<p className="text-lg font-medium mb-2 text-black">
					Overview of scholarly research creative activity:
				</p>
				<p className="text-black/90">{bio}</p>
				<p className="text-lg font-medium mb-2 text-black">
					Specific projects working on:
				</p>
				<p className="text-black/80">
					The best way to describe Professor El-Askary is to see him as an Earth
					System Scientist with a major interest in studying natural hazards,
					atmospheric events, and climate change related issues with special
					emphasis on problems related to the study of desertification and
					aerosols’ impact on renewable energy, and marine environment. He
					carries out his work by combining his physical and earth systems
					knowledge with new breakthroughs in machine learning and data mining;
					the outcome is ideas and proposals to address sustainable development
					goals. His work coordinates and integrates state-of-the-art Earth
					Observation activities in the MENA region to develop links and
					initiatives toward achieving sustainable development goals (SDGs). His
					research interests include dust storms and air quality monitoring and
					detection using different remote sensing technologies and studying
					other extreme events, The impact of the changing climate on sea level
					and marine habits is a priority for him. His research also included
					using earth observations in studying the impact of severe dust storms,
					anomalous chlorophyll outbreaks in the marine environment, hurricane
					intensification, and transport of microbes causing Kawasaki disease
					outbreaks.
				</p>
			</div>
		</Card>
	);
}

function ResearchAreas({ areas }) {
	return (
		<div className="py-12 my-24">
			<h2 className="text-4xl font-bold mb-6 text-center">Research Areas</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{areas.map((area, index) => (
					<Link href={`/research?area=${encodeURIComponent(area)}`} key={index}>
						<Card className="transition-transform hover:scale-105">
							<CardContent className="flex items-center justify-center h-24 bg-[#a40033] rounded-md">
								<h3 className="text-2xl text-white font-semibold">{area}</h3>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}

function ProspectiveMembers({ contact }) {
	return (
		<div className="py-12 bg-muted">
			<div className="container">
				<h2 className="text-4xl font-bold mb-6 text-center">
					Prospective Group Members
				</h2>
				<div className="flex flex-col md:flex-row justify-around items-center gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-2">Contact Us</h3>
						<p>Email: {contact.email}</p>
						<p>Phone: {contact.phone}</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2">Location</h3>
						<p>{contact.address}</p>
					</div>
				</div>
				<div className="mt-8 text-center">
					<Button className="bg-[#a40033] hover:bg-gray-500">
						Join Our Team
					</Button>
				</div>
			</div>
		</div>
	);
}

export function HomePageComponent() {
	return (
		<div className="mx-auto my-auto">
			<Navbar />
			<div className="container mx-auto">
				<GlobeDemo />
				{/* <ImageCarousel images={pageConfig.carousel.images} /> */}
				<CarouselSpacing images={pageConfig.carousel.images} />
				<BiographySection
					name={pageConfig.biography.name}
					image={pageConfig.biography.image}
					bio={pageConfig.biography.bio}
				/>
				<ResearchAreas areas={pageConfig.researchAreas} />
				<ProspectiveMembers contact={pageConfig.contact} />
			</div>
			<Footer />
		</div>
	);
}

import { Footer } from "./footer";
import Link from "next/dist/client/link";
import researchProjects from '@/data/essdsl_papers.json';

