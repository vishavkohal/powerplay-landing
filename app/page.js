import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen bg-gray-900 text-white flex items-center justify-center px-2 py-4">
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl max-w-md w-full max-h-full flex flex-col">
        
        {/* Banner Image - Bigger with top padding */}
        <div className="pt-4 px-5">
          <div className="relative w-full h-40 sm:h-48 flex-shrink-0">
            <Image
              src="/1win-india.webp"
              alt="Landing Banner"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <div className="p-4 sm:p-6 text-center space-y-3 flex-1 flex flex-col justify-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm mx-auto w-fit shadow-lg border border-blue-400">
            <span className="text-yellow-300"></span> 1Win India - Start Playing Online <span className="text-yellow-300"></span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">Get a ₹75,000 Bonus</h1>
          <p className="text-sm sm:text-base font-semibold text-green-400">⚡ Fast Withdrawals. Real Winnings. No Delays.</p>

          <p className="text-xs sm:text-sm text-gray-300">
            Enjoy fun games in real money and demo modes. <br />
            Download the app today and unlock your welcome bonus!
          </p>

          <div className="space-y-3 pt-2">
            <Link
              href="http://1wrxly.life/casino/list?open=register"
              className="block w-full bg-green-500 hover:bg-green-600 py-2.5 rounded-md text-white font-semibold text-sm transition-transform transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register on Website
            </Link>

            <Link
              href="http://1wrxly.life/casino/list?open=register"
              className="block w-full bg-blue-500 hover:bg-blue-600 py-2.5 rounded-md text-white font-semibold text-sm transition-transform transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Apk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}