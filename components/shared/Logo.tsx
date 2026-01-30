import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-3xl font-black tracking-tighter text-rcc-navy">RCC</span>
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-0.5">
          <div className="w-3 h-3 bg-rcc-blue translate-x-3"></div>
          <div className="w-3 h-3 bg-rcc-blue translate-x-3"></div>
        </div>
        <div className="flex gap-0.5">
          <div className="w-3 h-3 bg-rcc-blue translate-x-1"></div>
          <div className="w-3 h-3 bg-white"></div>
          <div className="w-3 h-3 bg-rcc-blue"></div>
        </div>
        <div className="flex gap-0.5">
          <div className="w-3 h-3 bg-rcc-blue -translate-x-1"></div>
          <div className="w-3 h-3 bg-white"></div>
          <div className="w-3 h-3 bg-rcc-blue"></div>
        </div>
      </div>
    </div>
  );
}
