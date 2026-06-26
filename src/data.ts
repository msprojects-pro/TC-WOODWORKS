/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial } from "./types";

export const BUSINESS_INFO = {
  name: "TC Woodwork",
  tagline: "Bespoke Fences & Gates Specialists",
  description: "Expert installation & quality workmanship. Tailored premium designs to suit your property in Kingston upon Hull and surrounding areas.",
  location: "Kingston upon Hull, East Yorkshire, United Kingdom",
  phone: "+44 7944 040707",
  phoneFormatted: "07944 040707",
  email: "Tcwoodwork@hotmail.com",
  website: "tcwoodwork.com",
  workingHours: [
    { days: "Monday - Friday", hours: "08:00 - 18:00" },
    { days: "Saturday", hours: "09:00 - 16:00" },
    { days: "Sunday", hours: "Closed" }
  ],
  facebook: "https://facebook.com",
  instagram: "https://instagram.com"
};

export const SERVICES: Service[] = [
  {
    id: "bespoke-fences",
    title: "Bespoke Wooden Fences",
    description: "Tailor-made, heavy-duty fencing designed to withstand the British weather while offering superb security and architectural visual appeal.",
    iconName: "FenceIcon",
    features: [
      "Premium pressure-treated timber",
      "Modern horizontal and vertical slatted styles",
      "Traditional closeboard and feather-edge designs",
      "Custom height, post options, and acoustic sound dampening"
    ]
  },
  {
    id: "driveway-gates",
    title: "Custom Driveway Gates",
    description: "Grand entrance gates built from premium timber and heavy-duty steel frames, providing unmatched security and curb appeal for your property.",
    iconName: "GateIcon",
    features: [
      "Solid Scandinavian Redwood or Iroko hardwoods",
      "Heavy-duty galvanized, powder-coated steel structural frames",
      "Manual or automation-ready configurations",
      "Bespoke sizing matching perfectly with surrounding walls"
    ]
  },
  {
    id: "garden-gates",
    title: "Garden Gates",
    description: "Elegant, secure, and handmade pedestrian gates crafted to complement your existing fencing and garden landscapes seamlessly.",
    iconName: "DoorOpenIcon",
    features: [
      "Heavy-duty mortise and tenon joinery",
      "Premium black ring latches and adjustable band-and-hook hinges",
      "Arched, flat-top, or trellis-topped options",
      "Robust key-lockable setups available"
    ]
  },
  {
    id: "pergolas-decking",
    title: "Timber Pergolas & Decking",
    description: "Transform your outdoor living area with precision-built pergolas, gazebos, and luxury timber or composite decking solutions.",
    iconName: "TreePineIcon",
    features: [
      "Bespoke timber frames and heavy overhead rafters",
      "Premium anti-slip hardwood and premium composite decking",
      "Integrated step-downs, handrails, and ambient seating",
      "Custom shade-dappling profiles"
    ]
  },
  {
    id: "side-rear-gates",
    title: "Side & Rear Gates",
    description: "Secure secondary access gates built with durability and strength in mind to keep your family and backyard fully private.",
    iconName: "ShieldCheckIcon",
    features: [
      "Heavy braced and ledged construction",
      "Anti-climb design features",
      "High-security padbolt or Gatemate lock integrations",
      "Built with matching fence materials for seamless flow"
    ]
  },
  {
    id: "timber-structures",
    title: "Bespoke Timber Structures",
    description: "Unique timber buildings, custom carports, luxury bin stores, and timber boundaries tailored precisely to your property requirements.",
    iconName: "HammerIcon",
    features: [
      "Heavy timber framing constructions",
      "Custom bin screens and bike shelters",
      "Hand-crafted outdoor feature panels",
      "Acoustic and breeze-buffering boundary installations"
    ]
  },
  {
    id: "repairs-maintenance",
    title: "Fence Repairs & Maintenance",
    description: "Professional storm damage repair, structural timber reinforcement, post replacement, and wood preservation services.",
    iconName: "WrenchIcon",
    features: [
      "Concrete spur reinforcement for rotting wooden posts",
      "Individual broken panel and wind-damaged timber replacement",
      "Premium oil-based staining and UV-protective coatings",
      "Prompt emergency wind-damage assistance in the Hull region"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Modern Cedar Horizontal Slatted Boundary",
    category: "Bespoke Wooden Fences",
    description: "A complete perimeter overhaul utilizing beautiful premium cedar wood slats with narrow shadow lines, offering modern visual aesthetics and absolute security.",
    imageUrl: "/images/tc_woodwork_hero_1782448556547.jpg",
    size: "34 meters x 1.8 meters",
    location: "Beverley, East Yorkshire"
  },
  {
    id: "project-2",
    title: "Bespoke Steel-Framed Driveway Double Gate",
    category: "Custom Driveway Gates",
    description: "A gorgeous luxury double entrance gate, crafted using heavy-duty black steel framework and premium oiled vertical oak timber panels. Fitted with bespoke architectural ironmongery.",
    imageUrl: "/images/tc_woodwork_gate_1782448576037.jpg",
    size: "4.2m width x 2.0m height",
    location: "Anlaby, Hull"
  },
  {
    id: "project-3",
    title: "Backyard Pergola & Luxury Timber Decking",
    category: "Timber Pergolas & Decking",
    description: "Created a gorgeous outdoor entertaining sanctuary featuring a custom-cut timber pergola over a multi-tiered anti-slip redwood deck with integrated soft steps.",
    imageUrl: "/images/tc_woodwork_pergola_1782448596078.jpg",
    size: "6m x 4.5m entertainment area",
    location: "Hessle, Hull"
  },
  {
    id: "project-4",
    title: "Contemporary Garden Privacy Fence",
    category: "Bespoke Wooden Fences",
    description: "Premium close-board fencing with hand-milled Siberian Larch capping rails and thick timber posts, completely elevating this gorgeous modern garden.",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    size: "18 meters x 2.1 meters",
    location: "Cottingham, East Yorkshire"
  },
  {
    id: "project-5",
    title: "Handcrafted Solid Pedestrian Arch Gate",
    category: "Garden Gates",
    description: "A traditional arched Scandinavian Pine garden gate featuring a heavy mortise-and-tenon frame and a professional Gatemate secure lock.",
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    size: "1.0m width x 1.8m height",
    location: "Kingswood, Hull"
  },
  {
    id: "project-6",
    title: "Architectural Screen and Boundary Wall",
    category: "Bespoke Timber Structures",
    description: "A tailored timber louvered cladding wall to shield service machinery and utilities, constructed from custom-cut pressure-treated timber slats.",
    imageUrl: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800",
    size: "8m screen boundary",
    location: "Swanland, East Yorkshire"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "James Harrington",
    location: "Beverley, Hull",
    rating: 5,
    text: "TC Woodwork did an outstanding job installing our new cedar slatted fencing. Tom's attention to detail was exceptional - every single line is laser-straight. Highly recommend their bespoke carpentry services!",
    projectType: "Bespoke Slatted Fencing"
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    location: "Cottingham, East Yorkshire",
    rating: 5,
    text: "Absolutely thrilled with our custom driveway gates. They are solid, secure, and look incredibly premium. The metal framing is heavy-duty and the timber finish is gorgeous. Tom was professional, tidy, and finished right on time.",
    projectType: "Custom Driveway Gates"
  },
  {
    id: "test-3",
    name: "David & Karen Miller",
    location: "Anlaby, Hull",
    rating: 5,
    text: "We wanted a bespoke pergola and a multi-level deck for our summerhouse. Tom took our basic sketch and turned it into a gorgeous reality. His joinery work is flawless. Truly a master craftsman in the Hull region.",
    projectType: "Bespoke Pergola & Deck"
  },
  {
    id: "test-4",
    name: "Mark Thompson",
    location: "Hessle, East Yorkshire",
    rating: 5,
    text: "Our side gate was blown off in the winter storms. Tom arrived promptly, gave a very fair quote, and installed a heavy-duty lockable gate that is much sturdier than the original. Exceptional customer service.",
    projectType: "Side Gate Repair & Upgrade"
  }
];

export const FAQ = [
  {
    question: "Do you offer free estimates and site surveys?",
    answer: "Yes, absolutely. We provide 100% free, no-obligation site surveys and written quotes for all properties across Kingston upon Hull, Beverley, Hessle, and the surrounding East Yorkshire villages."
  },
  {
    question: "What types of wood do you use for your fencing and gates?",
    answer: "We primarily work with high-quality, pressure-treated Scandinavian Redwood and Siberian Larch for standard durable fences, and premium Canadian Western Red Cedar or Iroko hardwoods for our premium bespoke gates and slatted boundaries."
  },
  {
    question: "Are your timbers treated to withstand British weather?",
    answer: "Yes, all our timbers are pressure-treated (tanalised) with preservative chemicals to guard against fungal decay and insect attack, ensuring a long life expectancy of 15 to 20+ years."
  },
  {
    question: "Can you automate the driveway gates you install?",
    answer: "Yes. While we focus on building the premium steel-framed timber gates and mounting them to secure stone pillars or timber posts, we engineer them specifically to be automation-ready for underground or articulated arm motor systems."
  }
];
