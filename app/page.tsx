import { customers } from '@/data/customers';
import CustomerList from '@/components/customer/CustomerList';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black text-rcc-navy tracking-tighter mb-6">
            Projekt <span className="text-rcc-blue">Workspace</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl">
            Ein klarer Überblick über den Fortschritt und die nächsten Meilensteine Ihrer digitalen Transformation.
          </p>
        </div>
        <CustomerList customers={customers} />
      </div>
    </main>
  );
}
