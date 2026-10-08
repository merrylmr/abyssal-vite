import { useEffect } from "react"

// Prebuilt scene bundle (particleify: npm run build:creght, then creght upload).
const SCENE_JS = "https://fsu.creght.com/site/2102956676268167168/1790233038347__abyssal_app_1790233038.js"

// Point clouds baked from the creature models (see particleify/scripts/bake_points.py).
const POINTS = {
  turtle: "https://fsu.creght.com/site/2102956676268167168/1790233036104__abyssal30k_turtle_detail_1790233035.bin",
  whale: "https://fsu.creght.com/site/2102956676268167168/1790220934120__abyssal30k_whale.bin",
  manta: "https://fsu.creght.com/site/2102956676268167168/1790220934909__abyssal30k_manta.bin",
  jellyfish: "https://fsu.creght.com/site/2102956676268167168/1790220935786__abyssal30k_jellyfish.bin",
  angler: "https://fsu.creght.com/site/2102956676268167168/1790220936607__abyssal30k_angler.bin",
}

const container = "mx-auto w-full max-w-[1440px] px-5 md:px-10"
const section = "relative flex min-h-screen items-center py-32 lg:mb-[50vh] lg:py-40"
const title = "mb-6 font-display text-[56px] font-semibold uppercase leading-none md:text-[88px] xl:text-[120px]"
const subtitle =
  "text-2xl font-thin leading-[1.25] text-ink md:text-3xl lg:text-[34px] [&_strong]:font-semibold [&_strong]:text-white"

const expertise = [
  { title: "Strategy", items: ["Creative Direction", "Technology Strategy", "Research & Development"] },
  { title: "Creative", items: ["Art Direction", "UX / UI Design", "Motion Design", "Illustration"] },
  { title: "Technology", items: ["WebGL & 3D", "Web Development", "Interactive Installations", "AI Prototyping"] },
  { title: "Production", items: ["3D Modelling", "3D Animation", "Video Production", "Sound Design"] },
]

function Marquee() {
  const item = (
    <span className="mr-10 inline-flex items-center gap-10 lg:mr-20 lg:gap-20">
      <span>
        Area of <span className="text-outline">expertise</span>
      </span>
      <span className="size-3 rounded-full bg-white lg:size-4" />
    </span>
  )
  return (
    <div className="overflow-hidden">
      <h2 className="flex animate-marquee whitespace-nowrap font-display text-[60px] font-semibold uppercase leading-none md:text-[100px] xl:text-[150px]">
        {item}
        {item}
        {item}
        {item}
      </h2>
    </div>
  )
}

export default function App() {
  // The WebGL scene is a prebuilt bundle. Load it after hydration so its DOM
  // work (text splitting, canvas) never races React.
  useEffect(() => {
    if (document.querySelector("script[data-abyssal]")) return
    const s = document.createElement("script")
    s.type = "module"
    s.src = SCENE_JS
    s.dataset.abyssal = ""
    document.body.appendChild(s)
  }, [])

  return (
    <>
      <canvas id="gl" aria-hidden="true" data-points={JSON.stringify(POINTS)} className="fixed inset-0 z-0 h-full w-full" />

      <div
        id="loader"
        className="fixed inset-0 z-50 flex items-center justify-center bg-deep text-xl font-extralight tracking-[4px]"
      >
        <div className="loader-inner">
          ABYSSAL <span id="counter">0</span>%
        </div>
      </div>

      <div
        id="cursor"
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference lg:block"
      />

      <header className="nav fixed inset-x-0 top-0 z-40 py-5">
        <nav className={`${container} flex items-center justify-between`}>
          <a href="#hero" data-cursor="120" className="font-display text-2xl font-semibold tracking-[0.18em]">
            ABYSSAL
          </a>
          <div aria-hidden="true" className="depth pointer-events-none hidden items-center gap-4 lg:flex">
            <span className="font-display text-lg tabular-nums tracking-wide">
              −<span id="depth-value">0</span> m
            </span>
            <span className="relative h-px w-28 bg-line">
              <span id="depth-fill" className="absolute inset-0 origin-left scale-x-0 bg-white" />
            </span>
            <span id="depth-zone" className="w-40 whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-muted">
              Sunlight zone
            </span>
          </div>
          <ul className="flex items-center gap-8 text-base md:text-lg">
            <li>
              <a href="#contact" data-cursor="80">Let's talk</a>
            </li>
            <li className="hidden md:block">
              <a href="#agency" data-cursor="80">Agency</a>
            </li>
            <li className="hidden md:block">
              <a href="#solutions" data-cursor="80">Solutions</a>
            </li>
            <li className="hidden md:block">
              <a href="#expertise" data-cursor="80">Expertise</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content" className="relative z-10">
        <section id="hero" className="hero relative flex min-h-screen items-end pb-20 pt-32 lg:mb-[50vh] lg:pb-40" data-stage="0">
          <div className={container}>
            <h1 id="hero-title" className={`${title} xl:text-[140px]`}>
              <span className="text-outline">Dive</span> into
              <br />
              your brand
            </h1>
            <p className={`${subtitle} max-w-[720px]`} data-intro>
              We create <strong>digital experiences</strong> at the meeting point of <strong>design</strong> and{" "}
              <strong>technology</strong>, bringing back ideas from <strong>depths others never reach</strong>.
            </p>
          </div>
          <p
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted"
            data-intro
          >
            Scroll to descend
            <span className="h-10 w-px animate-sink bg-gradient-to-b from-white to-transparent" />
          </p>
        </section>

        <section className={section} data-stage="1">
          <div className={container}>
            <p
              className="mx-auto max-w-[1200px] font-display text-3xl uppercase leading-[1.2] md:text-center md:text-[42px] lg:text-[52px]"
              data-reveal
            >
              Applying cross-disciplinary expertise to craft tech-driven experiences that move brands the way a current
              moves the sea: quietly, and with enormous force.
            </p>
          </div>
        </section>

        <section id="agency" className={section} data-stage="2">
          <div className={`${container} grid gap-20 lg:grid-cols-2`}>
            <div className="lg:col-start-2">
              <h2 className={title} data-reveal>
                Agency
              </h2>
              <p className={subtitle} data-reveal>
                We believe the <strong>power of creativity, design and emotion</strong> is the key to aligning brands with
                the people they are meant to reach.
              </p>
            </div>
          </div>
        </section>

        <section id="solutions" className={section} data-stage="3">
          <div className={`${container} grid gap-20 lg:grid-cols-2`}>
            <div>
              <h2 className={title} data-reveal>
                Solutions
              </h2>
              <p className={subtitle} data-reveal>
                We empower brands with <strong>innovative digital solutions</strong>, crafting{" "}
                <strong>user-centric experiences</strong> that grow <strong>brand presence</strong> and drive{" "}
                <strong>business growth</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="expertise" className={`${section} flex-col justify-center`} data-stage="3.5">
          <Marquee />
          <div className={`${container} mt-12 md:mt-20 lg:mt-32`}>
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-4" data-fade>
              {expertise.map((col) => (
                <div key={col.title}>
                  <h3 className="mb-4 border-b border-line pb-4 text-3xl font-medium">{col.title}</h3>
                  <ul>
                    {col.items.map((item) => (
                      <li
                        key={item}
                        data-cursor="40"
                        className="relative z-10 py-2 text-xl font-medium mix-blend-difference before:absolute before:-inset-x-2 before:bottom-2 before:top-full before:z-0 before:bg-white before:transition-all before:duration-700 before:ease-out before:content-[''] hover:before:top-0"
                      >
                        <div className="relative mix-blend-difference">{item}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative flex min-h-screen items-center pb-40 pt-20" data-stage="4">
          <div className={`${container} flex justify-center`}>
            <div>
              <p className="ml-1 text-muted lg:ml-2 lg:text-lg" data-fade>
                Even in the deepest dark, the right idea gives off light. Work with us:
              </p>
              <h2 className="text-4xl font-extralight text-gray-300 md:text-6xl lg:text-[100px] 2xl:text-[130px]" data-reveal>
                <a href="mailto:hello@example.com" data-cursor="200" className="leading-tight">
                  hello@example.com
                </a>
              </h2>
            </div>
          </div>
          <footer className={`${container} absolute inset-x-0 bottom-10 text-base text-white/60`}>
            © 2026 Abyssal Studio
          </footer>
        </section>
      </main>
    </>
  )
}
