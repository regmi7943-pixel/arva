import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image src="/logo.png" alt="Arva Logo" fill className="object-contain" />
              </div>
              <span className="font-display font-medium text-xl tracking-wide text-text">Arva</span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed">
              Advanced AI-powered agricultural monitoring and optimization. 
              Built for modern farming, ensuring sustainable growth and maximal yields.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-sm font-medium mb-6 text-text">Features</h4>
            <ul className="space-y-4">
              <li><Link href="/assistant" className="text-sm text-text-muted hover:text-text transition-colors">Crop Assistant</Link></li>
              <li><Link href="/mapping" className="text-sm text-text-muted hover:text-text transition-colors">Land Mapping</Link></li>
              <li><Link href="#" className="text-sm text-text-muted hover:text-text transition-colors">Weather Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium mb-6 text-text">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-text-muted hover:text-text transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-text-muted hover:text-text transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-text-muted hover:text-text transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 hidden-lines mt-16">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Arva. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p className="text-xs text-text-muted">Designed in Nepal.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
