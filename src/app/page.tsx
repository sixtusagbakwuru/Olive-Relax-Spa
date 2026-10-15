import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ContactDetails } from "@/components/ContactDetails";
import { MenuCard } from "@/components/MenuCard";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DropIcon, HeartIcon, HomeIcon, LeafIcon, ChatIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { formatPrice, lowestPrice, treatments } from "@/content/treatments";
import { greeting, whatsappLink } from "@/lib/whatsapp";

const benefits = [
  {
    Icon: HomeIcon,
    title: "Comfort at home",
    text: "No traffic and no waiting room. Your treatment happens where you already feel at ease.",
  },
  {
    Icon: LeafIcon,
    title: "Professional therapists",
    text: "Therapists who adjust pressure and technique to what your body needs that day.",
  },
  {
    Icon: DropIcon,
    title: "Premium quality oils",
    text: "Quality massage oils, chosen to suit each treatment.",
  },
  {
    Icon: HeartIcon,
    title: "Relaxation anywhere",
    text: "At home, in your apartment or wherever you are staying.",
  },
];

const steps = [
  {
    title: "Choose a treatment",
    text: "Pick a treatment and length from the spa menu.",
  },
  {
    title: "Message us on WhatsApp",
    text: "Send your date, time and area, and we confirm availability.",
  },
  {
    title: "Your therapist arrives",
    text: "At the time you agreed, ready to set up wherever suits you.",
  },
  {
    title: "Stay relaxed",
    text: "Rest as long as you like afterwards. There is nowhere to drive.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: photo slideshow behind; text sits on a frosted panel */}
      <section id="top" className="tone-brand relative isolate overflow-hidden">
        <HeroSlideshow slides={media.heroSlides} />
        <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />
        <Container className="grid items-center gap-x-16 gap-y-14 py-16 sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hero-intro hero-panel -mx-2 p-6 sm:mx-0 sm:p-10">
            <h1 className="text-display">The spa comes to you</h1>
            <p className="mt-6 max-w-prose text-lead text-muted">
              Thai oil, deep tissue and couple treatments from professional
              therapists, at your home in {site.city}. Book in a few taps on
              WhatsApp.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={whatsappLink(greeting)}>
                <ChatIcon className="size-5" />
                Book on WhatsApp
              </Button>
              <Button href="#menu" variant="outline">
                See the spa menu
              </Button>
            </div>
            <p className="mt-8 text-small text-muted">
              Treatments from {formatPrice(lowestPrice)}
            </p>
          </div>
          <ArchFrame
            label="treatment at home"
            className="hero-arch mx-auto max-w-80 lg:max-w-96"
          >
            <AmbientVideo
              src={media.hero.video}
              poster={media.hero.poster}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </ArchFrame>
        </Container>
      </section>

      <Section id="about">
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="text-title">About {site.name}</h2>
            <p className="mt-6 max-w-prose text-lead text-muted">
              We bring professional massage to your home. Choose your
              treatment and time, and your therapist comes to you, so you can
              stay relaxed afterwards instead of driving home.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[8/5] overflow-hidden">
              <Image
                src={media.treatments.src}
                alt={media.treatments.alt}
                fill
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <ul className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ Icon, title, text }, index) => (
            <li key={title}>
              <Reveal delay={index * 120}>
                <Icon className="size-8 text-accent" />
                <h3 className="mt-4 text-heading">{title}</h3>
                <p className="mt-2 text-body text-muted">{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="deep" id="menu">
        <Reveal>
          <h2 className="text-title">Spa menu</h2>
          <p className="mt-4 max-w-prose text-lead text-muted">
            You can choose any spa treatment in the comfort of your home or
            hotel apartment, then book on WhatsApp with the treatment details
            already filled in.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <li key={treatment.id}>
              <Reveal delay={index * 150} className="h-full">
                <MenuCard treatment={treatment} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand" id="how">
        <Reveal>
          <h2 className="text-title">How home booking works</h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 120} className="border-t border-accent pt-5">
                <p className="font-display text-title text-muted">{index + 1}</p>
                <h3 className="mt-3 text-heading">{step.title}</h3>
                <p className="mt-2 text-body text-muted">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <section className="tone-deep relative isolate overflow-hidden">
        <AmbientVideo
          src={media.video.src}
          poster={media.video.poster}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="scrim-bottom absolute inset-0 -z-10" />
        <Container className="flex min-h-[28rem] flex-col justify-end py-section lg:min-h-[36rem]">
          <Reveal>
            <h2 className="text-title">Self care comes home</h2>
            <p className="mt-4 max-w-prose text-lead text-muted">
              A calm hour, without leaving your own space.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section id="gallery">
        <Reveal>
          <h2 className="text-title">A moment of calm</h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-3 items-start gap-x-4 sm:gap-x-10 lg:gap-x-16">
          {media.gallery.map((photo, index) => (
            <li key={photo.src} className={index === 1 ? "mt-10 sm:mt-20" : ""}>
              <Reveal delay={index * 150} className="group">
                <ArchFrame label="the spa">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, 30vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </ArchFrame>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="brand" id="contact">
        <div className="grid gap-x-20 gap-y-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div id="book" className="scroll-mt-24">
            <Reveal>
              <h2 className="text-title">Book your treatment</h2>
              <p className="mt-4 max-w-prose text-lead text-muted">
                Fill in the details and WhatsApp opens with your booking
                message ready to send.
              </p>
            </Reveal>
            <div className="mt-10">
              <BookingForm />
            </div>
          </div>
          <Reveal delay={150}>
            <h2 className="text-title">Contact</h2>
            <div className="mt-8">
              <ContactDetails />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
