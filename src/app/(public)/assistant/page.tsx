import AIChat from "@/components/ai/AIChat";

export default function AssistantPage() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h1 className="text-6xl font-black text-white mb-6">

            TRIPNEST AI ✨

          </h1>

          <p className="text-blue-200 text-xl">

            Your smart multilingual tourism assistant

          </p>

        </div>

        <AIChat />

      </section>

    </main>
  );
}