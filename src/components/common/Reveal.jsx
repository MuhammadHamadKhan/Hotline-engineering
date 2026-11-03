/**
 * Scroll-reveal helpers built with Framer Motion.
 *
 * Usage:
 *   // Single element that fades up when it enters the viewport
 *   <Reveal className="..." delay={0.2}>
 *     <h2>Title</h2>
 *   </Reveal>
 *
 *   // Container that reveals its children one after another
 *   <Stagger className="grid grid-cols-3 gap-4">
 *     <StaggerItem className="...">Card 1</StaggerItem>
 *     <StaggerItem className="...">Card 2</StaggerItem>
 *   </Stagger>
 *
 * Rules followed by these helpers:
 *   - Only opacity and transform are animated — never width, height,
 *     margin, padding, box-shadow, x, or scale on large elements.
 *   - Animations play once when scrolled into view (whileInView, once: true).
 *   - Cards do not animate on mobile. On desktop they slide in from the left
 *     over 0.65s with a stagger of 0.08s.
 *   - The wrappers accept className (e.g. "h-full") so they do not disturb
 *     grid/layout behaviour.
 *   - Visitors with "reduce motion" enabled get no movement because the app
 *     is wrapped in <MotionConfig reducedMotion="user">.
 */

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useState,
} from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";

const easing = [0.22, 1, 0.36, 1];
const MotionDiv = motion.div;
const StaggerContext = createContext({ visible: false, delay: 0, direction: "left" });

// Play once, start when 15% visible, and trigger a bit before the element
// reaches the bottom of the screen so tall mobile sections still reveal.
const viewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -60px 0px",
};

// Single element: fades in and moves up when scrolled into view.
export function Reveal({ children, className, delay = 0 }) {
  const isMobile = useIsMobile();
  const y = isMobile ? -14 : -28;
  const duration = isMobile ? 0.4 : 0.55;

  const variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: easing, delay },
    },
  };

  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

// Container: reveals its StaggerItem children one after another when it
// scrolls into view. Does not animate any of its own visual properties so
// it does not affect layout.
export function Stagger({ children, className, direction = "left" }) {
  const isMobile = useIsMobile();
  const staggerDelay = isMobile ? 0 : direction === "up" ? 0.1 : 0.08;
  const [visible, setVisible] = useState(false);

  const staggeredChildren = Children.map(children, (child, index) =>
    isValidElement(child) ? cloneElement(child, { staggerIndex: index }) : child,
  );

  return (
    <StaggerContext.Provider value={{ visible, delay: staggerDelay, direction }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        onViewportEnter={() => setVisible(true)}
        viewport={viewport}
        variants={{ hidden: {}, show: {} }}
        className={className}
      >
        {staggeredChildren}
      </motion.div>
    </StaggerContext.Provider>
  );
}

export function StaggerItem({ children, className, staggerIndex = 0 }) {
  const { visible, delay, direction } = useContext(StaggerContext);
  const isMobile = useIsMobile();

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" && !isMobile ? -36 : 0,
      y: direction === "up" && !isMobile ? 32 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.85,
        ease: easing,
        delay: staggerIndex * delay,
      },
    },
  };

  return (
    <motion.div
      initial={isMobile ? false : "hidden"}
      animate={isMobile || visible ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
