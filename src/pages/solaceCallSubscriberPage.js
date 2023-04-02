import SolaceCallSubscriber from "../components/simulator/solaceCallSubscriber";


export default function SolaceCallSubscriberPage() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            GC+ Simulator Call Subscriber
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <SolaceCallSubscriber></SolaceCallSubscriber>
        </div>
      </main>
    </>
  );
}
