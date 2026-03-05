import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative isolate">
      {/* Background Orbs */}
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
            >
              Let's build your next{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                big idea
              </span>{" "}
              together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8"
            >
              I believe the best results come from transparent communication and
              clear goals. If you have a potential project or just want to chat
              about tech, I'm all ears.
            </motion.p>
          </div>
        </div>
      </div>

      <Contact />

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
}
