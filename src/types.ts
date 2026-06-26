/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  size?: string; // e.g. "12m x 1.8m"
  location?: string; // e.g. "Anlaby, Hull"
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  projectType: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  details: string;
  budget?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
