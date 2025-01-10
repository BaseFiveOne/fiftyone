import React from 'react';
import { Rocket, Ghost, Globe2, Lock, Coins, ExternalLink, AlertTriangle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/70" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-pulse mb-4">
            <Rocket className="inline-block w-16 h-16 text-purple-500" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            BASE 51
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-300">
            The First Intergalactic Meme Coin
          </p>
          <p className="text-xl text-purple-400 mb-8">
            Launching exclusively on Base through Moonshot
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://dexscreener.com/moonshot/base"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Buy $BASE51
            </a>
            <a
              href="https://t.me/base51launch"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 hover:bg-purple-600/20 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>

      {/* Launch Info */}
      <div className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-purple-900/20 border border-purple-500/20 mb-8">
              <Rocket className="w-8 h-8 text-purple-500" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Launching on Base</h2>
            <p className="text-xl text-gray-300 mb-8">
              Base 51 is launching exclusively through the Moonshot platform on Base, bringing intergalactic trading to the most innovative Layer 2 solution in the galaxy.
            </p>
            <div className="inline-block bg-purple-900/20 border border-purple-500/20 rounded-xl p-6">
              <p className="text-lg text-purple-400 font-semibold">
                Get ready for the most anticipated launch in the universe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Ghost />}
              title="Alien Approved"
              description="The only cryptocurrency recognized for trade between Earth and Zorblon"
            />
            <FeatureCard 
              icon={<Globe2 />}
              title="Universal Exchange"
              description="Access the galaxy's most exclusive marketplace"
            />
            <FeatureCard 
              icon={<Lock />}
              title="Top Secret Origins"
              description="Born from the secretive corridors of Base 51"
            />
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-xl text-gray-300">
                Base 51 is the intergalactic meme coin that's out of this world — literally. Born from the secretive corridors of Base 51, it's the only cryptocurrency recognized for trade between Earth and the newly discovered planet Zorblon, located in the far reaches of the Andromeda-5 solar system. Earth's governments and shadow organizations have long kept the truth under wraps, but the time has come for the masses to get involved in the most exclusive trade deal in history.
              </p>
            </div>
            
            <div className="bg-purple-900/20 p-8 rounded-2xl border border-purple-500/20">
              <p className="text-lg text-gray-300 mb-6">
                As the sole currency accepted by the alien civilization of Zorblon, Base 51 unlocks limitless opportunities for humanity — everything from advanced tech to strange alien goods, and even extraterrestrial life experiences. The coin itself is a symbol of interstellar collaboration, with an ever-growing community of Earthlings and Zorblonians (yes, they exist!) joining forces in the digital frontier.
              </p>
              <p className="text-lg text-gray-300">
                Whether you're holding Base 51 for its future utility in trade, or simply because you're part of the global meme movement, this coin is the key to our first truly universal exchange. Get in now, before the galaxy's most exclusive marketplace goes mainstream!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics */}
      <div className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Tokenomics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TokenomicsCard number="1B" label="Total Supply" />
            <TokenomicsCard number="70%" label="Liquidity Pool" />
            <TokenomicsCard number="20%" label="Community Rewards" />
            <TokenomicsCard number="10%" label="Alien Development" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-t from-black to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join the Intergalactic Movement</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Don't miss out on the first truly universal cryptocurrency. The truth is out there, and so are the gains.
          </p>
          <div className="flex justify-center gap-4">
            <SocialLink href="https://x.com/smokingjoecoin" label="X (Twitter)" />
            <SocialLink href="https://t.me/base51launch" label="Telegram" />
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-red-900/20 border-t border-b border-red-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-2">Investment Risk Disclaimer</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Investing in meme coins and cryptocurrencies involves substantial risk of loss and is not suitable for every investor. The value of cryptocurrencies can be highly volatile, and investors should be prepared to lose their entire investment. $BASE51 is a meme coin and should be treated as a high-risk, speculative investment. Past performance is not indicative of future results. Before making any investment decision, conduct your own research and consult with financial advisors. This website does not provide investment advice or recommendations. Trading cryptocurrencies may not be suitable for all investors and is not appropriate for those who cannot afford to lose their entire investment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="bg-black/80 border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Smoking Joe Dev Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all">
      <div className="text-purple-500 w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TokenomicsCard({ number, label }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-purple-900/10 border border-purple-500/20">
      <Coins className="w-8 h-8 text-purple-500 mx-auto mb-4" />
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-900/20 hover:bg-purple-900/40 border border-purple-500/20 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink className="w-4 h-4" />
      {label}
    </a>
  );
}

export default App;