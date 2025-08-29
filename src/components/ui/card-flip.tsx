'use client';

/**
 * @author: @nuelst
 * @description: Card Flip - MVP Development Theme
 * @version: 1.1.0
 * @date: 2025-01-14
 * @license: MIT
 * @website: https://nueslt.vercel.app
 * @github: https://github.com/nuelst
 */

import { cn } from '../../lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  image?: string;
}

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  image,
}: CardFlipProps) {
  const [imageError, setImageError] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[480px] w-full max-w-[420px] [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-2xl',
            'bg-black/80 backdrop-blur-xl',
            'border border-crimson-500/40',
            'shadow-lg dark:shadow-xl',
            'transition-all duration-700',
            'group-hover:shadow-xl group-hover:shadow-crimson-800/50',
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: 'rgba(139, 0, 0, 0.4)',
            boxShadow: isFlipped ? '' : '0 10px 30px rgba(139, 0, 0, 0.3)',
          }}
        >
          {/* Full Card Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            {image && !imageError ? (
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Fallback gradient background with icon */
              <div 
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #8B0000 0%, #6A0DAD 35%, #00BFFF 70%, #FF1493 100%)',
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="white" 
                  viewBox="0 0 24 24" 
                  className="h-20 w-20 opacity-80"
                >
                  <path d="M12 2C9 2 6 6 6 10c0 3 2 6 6 12 4-6 6-9 6-12 0-4-3-8-6-8z"/>
                </svg>
              </div>
            )}
          </div>

          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>

          {/* Title and Subtitle */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
            <p className="text-sm text-gray-200 drop-shadow-md">{subtitle}</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-2xl p-6',
            'backdrop-blur-xl',
            'shadow-lg dark:shadow-xl',
            'flex flex-col',
            'transition-all duration-700',
            'group-hover:shadow-xl',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
          style={{
            backgroundColor: 'rgba(26, 26, 26, 0.9)',
            borderColor: 'rgba(45, 45, 45, 0.5)',
            border: '1px solid rgba(45, 45, 45, 0.5)',
            boxShadow: !isFlipped ? '' : '0 25px 50px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 rounded-2xl" 
               style={{
                 background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.05) 0%, transparent 50%, rgba(106, 13, 173, 0.08) 100%)'
               }} />

          <div className="relative z-10 flex-1 space-y-6">
            <div className="space-y-3">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg"
                     style={{
                       background: 'linear-gradient(135deg, #00BFFF 0%, #0080FF 50%, #6A0DAD 100%)'
                     }}>
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl leading-snug font-semibold tracking-tight text-white transition-all duration-500 ease-out group-hover:translate-y-[-2px]">
                  {title}
                </h3>
              </div>
              <p className="text-sm tracking-tight text-gray-300 transition-all duration-500 ease-out group-hover:translate-y-[-2px] leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];
                const iconColors = ['#00FFFF', '#FF1493', '#6A0DAD', '#00BFFF'];
                const bgColors = ['rgba(0, 255, 255, 0.15)', 'rgba(255, 20, 147, 0.15)', 'rgba(106, 13, 173, 0.15)', 'rgba(0, 191, 255, 0.15)'];

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300 transition-all duration-500"
                    style={{
                      transform: isFlipped
                        ? 'translateX(0)'
                        : 'translateX(-10px)',
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md"
                         style={{ backgroundColor: bgColors[index % bgColors.length] }}>
                      <IconComponent className="h-3 w-3" style={{ color: iconColors[index % iconColors.length] }} />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-4" style={{ borderTop: '1px solid rgba(45, 45, 45, 0.5)' }}>
            <div
              className={cn(
                'group/start relative',
                'flex items-center justify-between',
                'rounded-lg p-2.5',
                'transition-all duration-300',
                'hover:scale-[1.02] hover:cursor-pointer',
                'border border-transparent',
                'hover:border-cyan-500/20',
              )}
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(90deg, rgba(0, 191, 255, 0.15) 0%, rgba(106, 13, 173, 0.1) 50%, transparent 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(26, 26, 26, 0.5)';
              }}
            >
              <span className="group-hover/start:text-cyan-400 text-sm font-semibold text-white transition-colors duration-300">
                Start Building
              </span>
              <div className="group/icon relative">
                <div
                  className={cn(
                    'absolute inset-[-6px] rounded-lg transition-all duration-300',
                    'scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100',
                  )}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.2) 0%, rgba(106, 13, 173, 0.1) 50%, transparent 100%)'
                  }}
                />
                <ArrowRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover/start:translate-x-1 group-hover/start:scale-110" 
                           style={{ color: '#00BFFF' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </div>
  );
}
