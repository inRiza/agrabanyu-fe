import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="mt-40 mb-10 p-5 flex flex-col">
        <div className="separator"/>
        <div className="flex justify-between flex-wrap gap-8">
            <div className="flex flex-col gap-4 capitalize min-w-[150px]">
                <p className="text-2xl font-bold">About</p>
                <div className="space-y-2 text-grey-secondary">
                    <p>About Us</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 capitalize min-w-[150px]">
                <p className="text-2xl font-bold">Support</p>
                <div className="space-y-2 text-grey-secondary">
                    <p>Help Center</p>
                    <p>Contact</p>
                    <p>FAQs</p>
                    <p>Documentation</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 capitalize min-w-[150px]">
                <p className="text-2xl font-bold">Legal</p>
                <div className="space-y-2 text-grey-secondary">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                    <p>Security</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 capitalize min-w-[150px]">
                <p className="text-2xl font-bold">Contact</p>
                <div className="space-y-2 text-grey-secondary">
                    <p>Email</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                    <p>Twitter/X</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-14 gap-4">
            <p className="text-grey-secondary text-sm">
                © 2025 Agrabanyu. All rights reserved.
            </p>
            <div className="flex gap-4 items-center">
                {/* GitHub */}
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="w-6 h-6 text-grey-secondary hover:text-green-main transition-colors" />
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="w-6 h-6 text-grey-secondary hover:text-green-main transition-colors" />
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <FaXTwitter className="w-6 h-6 text-grey-secondary hover:text-green-main transition-colors" />
                </a>
                {/* Instagram */}
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="w-6 h-6 text-grey-secondary hover:text-green-main transition-colors" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer