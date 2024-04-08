import Weather from "@/components/Weather";

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl text-slate-700 text-center tracking-wide leading-loose">
              Weather App
            </h1>
            <h3 className="font-medium text-lg text-slate-500 text-center tracking-normal leading-relaxed">
              Built using NextJs14, OpenWeatherAPI, TailwindCSS, and Axios.
            </h3>
          </div>
          <div className="mt-5">
            <h1 className="text-center">*ini sosmed menyusul</h1>
          </div>

          <div className="mt-5">
            <Weather />
          </div>
        </div>
      </div>
    </section>
  );
}
