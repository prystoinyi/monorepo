const getStatus = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/healthz`, { cache: "no-store" });

    if (res.ok) {
      return (
        <h1 className="flex-1 text-center text-[xxx-large] font-bold text-green-600">
          Online
        </h1>
      );
    }
  } catch {
    // Fall through to Offline state.
  }

  return (
    <h1 className="flex-1 text-center text-[xxx-large] font-bold text-red-600">
      Offline
    </h1>
  );
};

export default async function Home() {
  const status = await getStatus();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl items-center justify-between p-4 bg-white dark:bg-black">
        {status}
      </main>
    </div>
  );
}
