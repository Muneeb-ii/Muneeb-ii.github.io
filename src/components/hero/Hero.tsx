
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { content } from '../../data/content';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { routes } from '../../utils/routing';
import { easings, durations } from '../../utils/animations';
import { RacingGrid } from './RacingGrid';
import { HUDBrackets } from './HUDBrackets';
import { FloatingStats } from './FloatingStats';
import { MouseSpotlight } from './MouseSpotlight';
import { StatusTicker } from './StatusTicker';

export function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const heroRef = useRef<HTMLElement>(null);

    // Parallax scroll effects
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const photoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const photoGrayscale = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Status ticker items
    const statusItems = [
        'CS (AI) + Mathematical Science @ Colby',
        'Research @ Lyons Art Lab',
        'Building ML & Quant Systems',
        'Shipping Products That Work',
    ];

    // Floating stats data
    const heroStats = [
        { label: 'GPA', value: '4.15' },
        { label: 'PROJECTS', value: '10+' },
    ];

    // Animation delays for orchestrated entry
    const delays = {
        watermark: 0.3,
        name1: 0.4,
        name2: 0.6,
        telemetryLine: 0.8,
        roleDescriptor: 0.9,
        photo: 1.0,
        tagline: 1.2,
        statusTicker: 1.4,
        stats: 1.5,
        buttons: 1.6,
        scroll: 1.8,
    };

    return (
        <Section
            fullWidth
            className="h-screen min-h-[800px] relative flex items-center p-0 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-[#0a0a0f] dark:via-[#0f0a1a] dark:to-[#0a0f1a]"
            ref={heroRef}
        >
            {/* Cinematic gradient mesh background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary gradient orb - top right */}
                <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-rose-500/20 via-orange-500/10 to-transparent dark:from-rose-600/30 dark:via-orange-500/20 blur-3xl" />

                {/* Secondary gradient orb - bottom left */}
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent dark:from-blue-600/20 dark:via-indigo-500/15 blur-3xl" />

                {/* Accent glow - center */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-500/5 to-rose-500/5 dark:from-amber-500/10 dark:to-rose-500/10 blur-3xl" />
            </div>

            {/* Mouse-following spotlight */}
            <MouseSpotlight />

            {/* Animated racing grid background */}
            <RacingGrid />

            {/* HUD corner brackets */}
            <HUDBrackets />

            {/* Giant MN Watermark - Parallax */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                style={{ y: prefersReducedMotion ? 0 : watermarkY }}
            >
                <motion.span
                    className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-racing font-bold text-gray-200/5 dark:text-white/5 tracking-tighter"
                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{
                        delay: delays.watermark,
                        duration: durations.cinematic,
                        ease: easings.expo,
                    }}
                >
                    MN
                </motion.span>
            </motion.div>

            {/* Main hero content with parallax fade */}
            <motion.div
                className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full"
                style={{ opacity: prefersReducedMotion ? 1 : heroOpacity }}
            >
                {/* Text Content - Left Side (7/12) */}
                <div className="lg:col-span-7 flex flex-col justify-center pt-20 lg:pt-0">
                    {/* Name with character-by-character reveal */}
                    <div className="mb-6">
                        {/* MUNEEB */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-racing font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-400 dark:to-gray-600"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: delays.name1,
                                    duration: durations.slow,
                                    ease: easings.expo,
                                }}
                            >
                                MUNEEB
                            </motion.h1>
                        </div>

                        {/* NAFEES */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-racing font-bold tracking-tighter text-gray-900 dark:text-white -mt-2 md:-mt-4"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: delays.name2,
                                    duration: durations.slow,
                                    ease: easings.expo,
                                }}
                            >
                                NAFEES
                            </motion.h1>
                        </div>

                        {/* Animated telemetry line */}
                        <motion.div
                            className="h-0.5 bg-gradient-to-r from-f1-red via-f1-red to-transparent dark:from-f1-orange dark:via-f1-orange mt-4 max-w-md"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{
                                delay: delays.telemetryLine,
                                duration: durations.slow,
                                ease: easings.expo,
                            }}
                            style={{ originX: 0 }}
                        />

                        {/* Role descriptor */}
                        <motion.div
                            className="flex items-center gap-3 mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: delays.roleDescriptor,
                                duration: durations.normal,
                                ease: easings.smooth,
                            }}
                        >
                            {['AI', 'SYSTEMS', 'QUANT'].map((word, idx) => (
                                <motion.span
                                    key={word}
                                    className="text-sm md:text-base font-racing font-bold tracking-[0.3em] text-gray-500 dark:text-gray-400"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: delays.roleDescriptor + (idx * 0.1),
                                        duration: durations.normal,
                                    }}
                                >
                                    {word}
                                    {idx < 2 && <span className="text-f1-red dark:text-f1-orange ml-3">•</span>}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Tagline */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: delays.tagline,
                            duration: durations.slow,
                            ease: easings.smooth,
                        }}
                    >
                        <p className="text-xl md:text-2xl lg:text-3xl font-story text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
                            Engineering intelligent systems — from data to deployment.
                        </p>
                    </motion.div>

                    {/* Status Ticker */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: delays.statusTicker, duration: durations.normal }}
                    >
                        <StatusTicker items={statusItems} interval={3000} />
                    </motion.div>

                    {/* Floating Stats */}
                    <FloatingStats stats={heroStats} className="mb-8" />

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: delays.buttons,
                            duration: durations.slow,
                            ease: easings.smooth,
                        }}
                    >
                        <Button to={routes.projects} variant="primary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                            View Projects
                        </Button>
                        <Button to={routes.experience} variant="outline" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                            See Experience
                        </Button>
                    </motion.div>
                </div>

                {/* Photo - Right Side (5/12) with Parallax & Effects */}
                <motion.div
                    className="hidden lg:block lg:col-span-5 relative h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delays.photo, duration: durations.normal }}
                >
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full aspect-[3/4]">
                        {/* Scan line effect overlay */}
                        <motion.div
                            className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: delays.photo + 0.5, duration: 0.8 }}
                        >
                            {/* Horizontal scan lines */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
                                }}
                            />
                            {/* Moving scan bar */}
                            <motion.div
                                className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                                initial={{ top: '-10%' }}
                                animate={{ top: '110%' }}
                                transition={{
                                    delay: delays.photo,
                                    duration: 0.8,
                                    ease: 'linear',
                                }}
                            />
                        </motion.div>

                        {/* Photo with parallax and color reveal */}
                        <motion.div
                            className="relative w-full h-full overflow-hidden"
                            style={{
                                y: prefersReducedMotion ? 0 : photoY,
                                scale: prefersReducedMotion ? 1 : photoScale,
                            }}
                            initial={{
                                clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
                            }}
                            animate={{
                                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                            }}
                            transition={{
                                delay: delays.photo,
                                duration: durations.cinematic,
                                ease: easings.expo,
                            }}
                        >
                            <motion.img
                                src="/assets/images/Picture.jpeg"
                                alt={content.personalInfo.name}
                                className="w-full h-full object-cover shadow-2xl"
                                style={{
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                                    filter: prefersReducedMotion ? 'grayscale(0)' : `grayscale(${photoGrayscale.get()})`,
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: durations.normal }}
                            />

                            {/* Color overlay that fades */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-f1-red/10 to-transparent dark:from-f1-orange/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: delays.photo + 0.8, duration: durations.slow }}
                            />
                        </motion.div>

                        {/* Decorative corner accents */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-f1-red dark:border-f1-orange"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.6, scale: 1 }}
                            transition={{ delay: delays.photo + 0.4, duration: durations.slow, ease: easings.smooth }}
                        />
                        <motion.div
                            className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-f1-red dark:border-f1-orange"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.6, scale: 1 }}
                            transition={{ delay: delays.photo + 0.6, duration: durations.slow, ease: easings.smooth }}
                        />

                        {/* "LIVE" indicator */}
                        <motion.div
                            className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: delays.photo + 0.8, duration: durations.normal }}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-f1-red"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className="text-xs font-mono text-white uppercase tracking-wider">Live</span>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delays.scroll, duration: durations.slow, ease: easings.smooth }}
            >
                <span className="text-xs font-racing tracking-[0.3em] text-gray-500 uppercase">Scroll</span>
                <motion.div
                    className="w-px h-12 bg-gradient-to-b from-f1-red to-transparent dark:from-f1-orange"
                    animate={{
                        scaleY: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>

            {/* Bottom peek gradient - hints at content below */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-slate-50/80 dark:from-black dark:via-[#0a0a0f]/80 to-transparent pointer-events-none" />
        </Section>
    );
}
