export default function PublicFooter() {
    return (
      <footer className="bg-[#0d0d0d] text-gray-300 pt-16 pb-10 border-t border-gray-800">
        
        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
  
          {/* Column 1 – Logo & description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">ProofVault</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cryptographic, tamper-proof verification for law enforcement,
              enterprises, land registry, legal compliance, and individuals.
            </p>
          </div>
  
          {/* Column 2 – Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Evidence Upload</li>
              <li className="hover:text-white cursor-pointer">Instant Verification</li>
              <li className="hover:text-white cursor-pointer">Ledger Explorer</li>
              <li className="hover:text-white cursor-pointer">IPFS Storage</li>
              <li className="hover:text-white cursor-pointer">Proof Reports</li>
            </ul>
          </div>
  
          {/* Column 3 – Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Partners</li>
              <li className="hover:text-white cursor-pointer">Security</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
  
          {/* Column 4 – Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">API Reference</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ProofVault. All Rights Reserved.</p>
  
          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Terms of Service</p>
            <p className="hover:text-white cursor-pointer">Trust & Security</p>
          </div>
        </div>
  
      </footer>
    );
  }

  