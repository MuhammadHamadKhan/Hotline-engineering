import { motion } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";
import Container from "../common/Container";
import heroImage from "../../assets/hero-kitchen.jpg";


// Change these to the client's real facts
const highlights = [
  "Machines for sweets, bakery, restaurant and pizzeria",
  "Spare parts and maintenance service",
  "Delivery to customers worldwide",
];

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Hero() {
  const isMobile = useIsMobile();
  const y = isMobile ? -14 : -24;
  const textTransition = { duration: 0.5, easing: [0.22, 1, 0.36, 1] };

  return (
   <section id="home" className="hero-section ">
    {/* This wrapper has a maximum width. The image sticks to its right edge. */}
   <div className="relative mx-auto max-w-[1600px] overflow-hidden lg:h-full">
       {/* Desktop image: touches the right edge until the wrapper stops growing */}
       <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
         <motion.img
           src={heroImage}
           alt=""
           className="h-full w-full object-cover object-center"
           fetchPriority="high"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6 }}
         />
       </div>

       <Container className="relative grid items-center gap-8 pb-0 pt-8 sm:pt-10 lg:grid-cols-2 lg:gap-12 lg:py-8"> {/* Text side */}
         <div className="max-w-xl">
           <motion.h1
             initial={{ opacity: 0, y }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ ...textTransition, delay: 0 }}
             className="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl"
           >
             Professional 
             <br/>
             machines
              <br/>
              for every kitchen
           </motion.h1>

           <motion.p
             initial={{ opacity: 0, y }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ ...textTransition, delay: 0.1 }}
             className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
           >
             Strong, easy-to-clean equipment that helps bakeries, sweet shops and
             restaurants make more food in less time, backed by service when you
             need it.
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ ...textTransition, delay: 0.2 }}
             className="mt-8 flex flex-col gap-3 sm:flex-row"
           >
             <a
               href="/#products"
               className="rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
             >
               View Machines
             </a>
             <a
               href="/#contact"
               className="rounded-lg border border-border bg-white px-6 py-3 text-center text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
             >
               Get a Quote
             </a>
           </motion.div>

           <motion.ul
             initial={{ opacity: 0, y }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ ...textTransition, delay: 0.3 }}
             className="mt-8 space-y-3 border-t border-border pt-6"
           >
             {highlights.map((text) => (
               <li key={text} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                 <Check />
                 <span>{text}</span>
               </li>
             ))}
           </motion.ul>
         </div>

         {/* Phone and tablet image: sits below the text */}
         <div className="-mx-4 aspect-[4/3] overflow-hidden sm:-mx-6 sm:aspect-[16/9] lg:hidden">
   <motion.img
     src={heroImage}
     alt="Bright modern kitchen with countertop and built-in cooking appliances"
     className="h-full w-full object-cover"
     fetchPriority="high"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.6 }}
   />
 </div>
       </Container>
     </div>
   </section>
  );
}
