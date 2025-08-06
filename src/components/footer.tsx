import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { subscriptions } from "@/server/db/schema";
import { ArrowRight, Mail, Github } from "lucide-react";
import { Check } from "lucide-react";
import Image from "next/image";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
  icon?: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Product",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/tools/twitter-roast", label: "Twitter Profile Roaster" },
      { href: "/tools/create-character", label: "Create Character" },
    ],
  },
  {
    title: "Community",
    links: [

      { 
        href: "https://github.com/chara-research", 
        label: "GitHub", 
        external: true,
        icon: <Github size={20} className="text-white dark:text-white" />
      },
      { 
        href: "https://x.com/chara-research", 
        label: "Twitter", 
        external: true,
        icon: <div className="w-5 h-5 text-black dark:text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M13.79 9.32L20.27 2h-1.85l-5.61 6.32L8.09 2H2.72l7.11 9.61L2.98 19h1.85l5.98-6.75L15.96 19h5.37l-7.54-9.68zm-2.84 3.2l-.7-.95L4.75 3.51H6.9l4.34 5.93.7.94 5.76 7.86h-2.15l-4.6-6.27z"/>
                </svg>
              </div>
      },
      { 
        href: "mailto:hi@chara-research.com", 
        label: "Email", 
        external: true,
        icon: <Mail size={20} className="text-[#D44638] dark:text-[#D44638]" />
      }
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
];

export async function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl lg:py-12">

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12 p-4">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group text-sm text-muted-foreground transition-colors hover:text-foreground flex items-center gap-3"
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Chara Research Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 

export async function CTACard() {
    const session = await auth();
  
    if (!session?.user?.id) {
        return <CTACardContent />; // Show CTA for non-authenticated users
    }

    // Check for active subscription
    const subscription = await db.query.subscriptions.findFirst({
        where: eq(subscriptions.userId, session.user.id as string),
    });

    // Show CTA if no subscription or if subscription is not active
    if (!subscription || subscription.status !== 'active') {
        return <CTACardContent />;
    }

    return null;
}

function CTACardContent() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 px-4 sm:px-6 lg:px-8 rounded-2xl border border-neutral-800 mb-6 m-2">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
            <div className="h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
            <div className="h-32 w-32 rounded-full bg-purple-500/20 blur-3xl"></div>
        </div>

        
                </div>
            </div>
        </div>
    </div>
    )
}
