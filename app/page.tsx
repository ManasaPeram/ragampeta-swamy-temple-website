// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
// import { Mail, Phone, MapPin, Heart, Volume2, VolumeX, Sparkles, Star, Play } from 'lucide-react'

// // --- Animation Variants ---

// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.8 }
//   }
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 }
//   }
// }

// // --- Background Components ---

// const BackgroundEffects = () => (
//   <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//     {/* Stars / Divine Particles */}
//     {[...Array(20)].map((_, i) => (
//       <div
//         key={`star-${i}`}
//         className="animate-star absolute bg-primary/40 rounded-full"
//         style={{
//           width: Math.random() * 4 + 'px',
//           height: Math.random() * 4 + 'px',
//           top: Math.random() * 100 + '%',
//           left: Math.random() * 100 + '%',
//           animationDelay: Math.random() * 5 + 's'
//         }}
//       />
//     ))}
    
//     {/* Agarbatti Smoke */}
//     {[...Array(4)].map((_, i) => (
//       <div
//         key={`smoke-${i}`}
//         className="animate-smoke absolute bottom-0 bg-linear-to-t from-transparent via-orange-100/10 to-transparent rounded-full blur-3xl"
//         style={{
//           width: '150px',
//           height: '500px',
//           left: `${10 + i * 25}%`,
//           animationDelay: `${i * 4}s`,
//         }}
//       />
//     ))}
//   </div>
// )

// const Diya = ({ position }: { position: string }) => (
//   <div className={`fixed ${position} z-40 hidden lg:block`}>
//     <motion.div 
//       animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
//       transition={{ duration: 3, repeat: Infinity }}
//       className="relative flex flex-col items-center"
//     >
//       <div className="w-4 h-7 bg-linear-to-t from-orange-600 via-yellow-400 to-white rounded-full blur-[2px]" />
//       <div className="w-12 h-6 bg-amber-900 rounded-b-full shadow-2xl border-t border-amber-950" />
//     </motion.div>
//   </div>
// )

// // --- Page Data ---

// const SLIDER_IMAGES = [
//   { src: '/temple-hero .jpg', alt: 'Main Temple View' },
//   { src: '/first.png', alt: 'Inner Sanctum' },
//   { src: '/three.png', alt: 'Gopuram' }
// ]

// const GALLERY_IMAGES = [
//   { src: '/11.png', title: 'Deepotsavam' },
//   { src: '/12.png', title: 'Daily Puja' },
//   { src: '/13.png', title: 'Flower Decoration' },
//   { src: '/14.png', title: 'Temple Gate' },
//   { src: '/15.png', title: 'Abhishekam' },
//   { src: '/16.png', title: 'Dhwajasthambham' }
// ]

// const VIDEOS = [
//   { title: 'Morning Aarti', desc: 'Divine sounds of the early morning prayer.', src: '/temple-darshan.mp4' },
//   { title: 'Kalyanotsavam', desc: 'The celestial wedding celebration.', src: '/festival-celebration.mp4' },
//   { title: 'Temple Tour', desc: 'A spiritual walk through the premises.', src: '/puja-ceremony.mp4' }
// ]

// export default function Home() {
//   const [isAudioPlaying, setIsAudioPlaying] = useState(false)
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [amount, setAmount] = useState('')
//   const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
//   const audioRef = useRef<HTMLAudioElement>(null)
  
//   const { scrollYProgress } = useScroll()
//   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
//     }, 6000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const audio = audioRef.current
//     if (audio) {
//       const handleCanPlay = () => console.log('Audio loaded successfully')
//       const handleError = (e: Event) => console.log('Audio error:', (e.target as HTMLAudioElement).error)
      
//       audio.addEventListener('canplay', handleCanPlay)
//       audio.addEventListener('error', handleError)
      
//       return () => {
//         audio.removeEventListener('canplay', handleCanPlay)
//         audio.removeEventListener('error', handleError)
//       }
//     }
//   }, [])

//   const toggleAudio = () => {
//     if (audioRef.current) {
//       if (isAudioPlaying) {
//         audioRef.current.pause()
//       } else {
//         audioRef.current.play().catch(err => console.log('Audio play error:', err))
//       }
//       setIsAudioPlaying(!isAudioPlaying)
//     }
//   }

//   return (
//     <div className="relative min-h-screen selection:bg-primary/30">
//       <BackgroundEffects />
//       <Diya position="bottom-10 left-10" />
//       <Diya position="bottom-10 right-10" />
      
//       {/* Scroll Progress Bar */}
//       <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-100 origin-left shadow-lg" style={{ scaleX }} />

//       <audio ref={audioRef} src="/om-namo-venkateshaya-chanting.mp3" loop preload="auto" />

//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-100">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl font-bold">ॐ</div>
//             <span className="text-xl font-bold text-primary tracking-tighter">Ragampeta Swamy</span>
//           </motion.div>
          
//           <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
//             {['about', 'gallery', 'videos', 'contact', 'donate'].map(item => (
//               <a key={item} href={`#${item}`} className="hover:text-primary transition-colors underline-offset-8 hover:underline">{item}</a>
//             ))}
//           </div>

//           <button onClick={toggleAudio} className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all active:scale-90">
//             {isAudioPlaying ? <Volume2 size={20} className="text-primary" /> : <VolumeX size={20} className="text-primary" />}
//           </button>
//         </div>
//       </nav>

//       {/* Hero Slider Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//             className="absolute inset-0 z-0"
//           >
//             <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-[#fdf8f3] z-10" />
//             <Image src={SLIDER_IMAGES[currentSlide].src} alt="Temple" fill className="object-cover" priority />
//           </motion.div>
//         </AnimatePresence>

//         <div className="relative z-20 text-center text-white px-4">
//           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
//             <motion.div 
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="text-primary text-5xl mb-6"
//             >ॐ</motion.div>
//             <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter drop-shadow-2xl">Venkateshwara</h1>
//             <p className="text-lg md:text-2xl max-w-3xl mx-auto font-light opacity-90 leading-relaxed tracking-wide">
//               Where devotion meets divinity. Welcome to the sacred abode of Ragampeta Swamy.
//             </p>
//             <div className="mt-12 flex flex-wrap justify-center gap-6">
//               <a href="#donate" className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-2xl hover:bg-accent transition-all hover:-translate-y-1">Darshan & Seva</a>
//               <a href="#gallery" className="px-10 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all">Explore Gallery</a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <motion.section 
//         id="about" 
//         className="py-32 px-6 max-w-7xl mx-auto"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         variants={fadeUp}
//       >
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <div className="relative group">
//             <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
//             <div className="relative h-150 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
//               <Image src="/diety.jpg" alt="Deity" fill className="object-cover" />
//             </div>
//           </div>

//           <div className="space-y-8">
//             <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Divine Heritage</span>
//             <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">A Sanctuary for the Soul</h2>
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               For decades, Ragampeta Swamy Venkateshwara Temple has stood as a beacon of spirituality, offering peace to thousands of devotees. Our traditions are rooted in ancient Vedic rituals.
//             </p>
//             <div className="grid gap-6">
//               {[
//                 { title: "Sacred Aarti", time: "6:00 AM & 7:00 PM" },
//                 { title: "Annadanam", time: "Every Saturday" }
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-orange-50/50">
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">0{i+1}</div>
//                   <div>
//                     <h4 className="font-bold text-lg">{item.title}</h4>
//                     <p className="text-muted-foreground">{item.time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Gallery Section */}
//       <section id="gallery" className="py-32 px-6 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <motion.div 
//             initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl font-bold mb-4">Temple Gallery</h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//           </motion.div>

//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//             variants={staggerContainer}
//           >
//             {GALLERY_IMAGES.map((img, i) => (
//               <motion.div 
//                 key={i} 
//                 variants={fadeUp}
//                 whileHover={{ y: -10 }}
//                 className="relative h-80 rounded-4xl overflow-hidden shadow-xl group cursor-pointer"
//               >
//                 <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
//                   <h4 className="text-white font-bold text-xl">{img.title}</h4>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Videos Section */}
//       <section id="videos" className="py-32 px-6 max-w-7xl mx-auto">
//         <motion.div 
//            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
//            className="text-center mb-20"
//         >
//           <h2 className="text-5xl font-bold mb-4">Spiritual Darshan</h2>
//           <p className="text-muted-foreground text-xl">Experience the divine vibrations through video</p>
//         </motion.div>

//         <motion.div 
//           className="grid md:grid-cols-3 gap-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           variants={staggerContainer}
//         >
//           {VIDEOS.map((vid, i) => (
//             <motion.div key={i} variants={fadeUp} onClick={() => setSelectedVideo(i)} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-orange-100 group cursor-pointer">
//               <div className="aspect-video bg-muted relative">
//                 <div className="absolute inset-0 flex items-center justify-center z-10">
//                   <motion.button whileHover={{ scale: 1.2 }} className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center pl-1 shadow-2xl">
//                     <Play fill="currentColor" size={24} />
//                   </motion.button>
//                 </div>
//                 <Image src={GALLERY_IMAGES[i].src} alt="Video thumb" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="p-8">
//                 <h3 className="font-bold text-2xl mb-2">{vid.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{vid.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Video Modal */}
//         <AnimatePresence>
//           {selectedVideo !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedVideo(null)}
//               className="fixed inset-0 bg-black/80 z-200 flex items-center justify-center p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className="relative w-full max-w-4xl"
//               >
//                 <button
//                   onClick={() => setSelectedVideo(null)}
//                   className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-primary transition-colors z-10"
//                 >
//                   ✕
//                 </button>
//                 <video
//                   src={VIDEOS[selectedVideo].src}
//                   controls
//                   autoPlay
//                   className="w-full rounded-2xl shadow-2xl"
//                 />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>

//       {/* Donation Section */}
//       <section id="donate" className="py-32 px-6">
//         <motion.div 
//           initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
//           className="max-w-5xl mx-auto bg-[#2d1810] rounded-[4rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row"
//         >
//           <div className="lg:w-1/2 p-16 text-white flex flex-col justify-center bg-linear-to-br from-primary/20 to-transparent">
//             <Heart size={64} className="text-primary mb-8" />
//             <h2 className="text-5xl font-bold mb-6 tracking-tight">Dhaanam is Divine</h2>
//             <p className="text-xl opacity-70 leading-relaxed mb-8">
//               Every contribution helps us maintain the temple, feed the needy through Annadanam, and celebrate our grand festivals.
//             </p>
//             <div className="flex items-center gap-4 text-primary font-bold">
//               <Sparkles /> <span>Tax Exempted under 80G</span>
//             </div>
//           </div>

//           <div className="lg:w-1/2 p-16 bg-white">
//             <h3 className="text-2xl font-bold mb-8">Select Seva Amount</h3>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {['501', '1116', '2500', '5001'].map(amt => (
//                 <button 
//                   key={amt}
//                   onClick={() => setAmount(amt)}
//                   className={`py-4 rounded-2xl border-2 font-bold transition-all ${amount === amt ? 'border-primary bg-primary/5 text-primary scale-105' : 'border-muted hover:border-primary/30'}`}
//                 >
//                   ₹{amt}
//                 </button>
//               ))}
//             </div>
//             <div className="space-y-6">
//               <input 
//                 type="number" 
//                 placeholder="Enter Custom Amount"
//                 className="w-full p-5 rounded-2xl border-2 border-muted focus:border-primary outline-none transition-all text-lg"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//               <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-primary/40 hover:bg-accent transition-all active:scale-95">
//                 Donate via PhonePe / UPI
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-32 px-6 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
//             <h2 className="text-5xl font-bold mb-10 text-primary">Get in Touch</h2>
//             <div className="space-y-10">
//               {[
//                 { icon: <MapPin />, label: "Location", val: "Ragampeta, Hyderabad, Telangana 500001", href: "https://maps.google.com/?q=Ragampeta,Hyderabad,Telangana" },
//                 { icon: <Phone />, label: "Phone", val: "+91 98765 43210", href: "tel:+919876543210" },
//                 { icon: <Mail />, label: "Email", val: "seva@ragampetatemple.org", href: "mailto:seva@ragampetatemple.org" }
//               ].map((item, i) => (
//                 <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex gap-8 items-start hover:opacity-80 transition-opacity cursor-pointer">
//                   <div className="p-5 bg-primary/10 rounded-2xl text-primary">{item.icon}</div>
//                   <div>
//                     <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</h4>
//                     <p className="text-xl font-medium">{item.val}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
//             <form className="bg-white p-12 rounded-[3rem] shadow-2xl border border-orange-100 space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input placeholder="Name" className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
//                 <input placeholder="Phone" className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
//               </div>
//               <input placeholder="Email" className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
//               <textarea placeholder="How can we help you?" rows={4} className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
//               <button className="w-full py-5 bg-foreground text-white rounded-xl font-bold hover:bg-primary transition-all shadow-xl">Send Divine Request</button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-20 bg-[#2d1810] text-white/50 text-center">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-primary text-4xl mb-6">ॐ</div>
//           <h2 className="text-white text-2xl font-bold mb-4 tracking-tighter">Ragampeta Swamy Venkateshwara Temple</h2>
//           <p className="max-w-md mx-auto mb-10 leading-relaxed">Dedicated to preserving our sacred heritage and serving humanity through devotion.</p>
//           <div className="flex justify-center gap-8 mb-12">
//             {['Facebook', 'Instagram', 'YouTube'].map(sm => (
//               <a key={sm} href="#" className="hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs">{sm}</a>
//             ))}
//           </div>
//           <div className="pt-10 border-t border-white/5 text-xs">
//             © 2026 Ragampeta Swamy Temple. <br /> 
//             <span className="text-primary font-bold mt-2 inline-block">ॐ नमो वेङ्कटेशाय नमः</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Mail, Phone, MapPin, Heart, Volume2, VolumeX, Sparkles, Play } from 'lucide-react'
import UPIQRCode from '../components/ui/UPIQRCode'

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

// --- Background Components (Hydration-Safe) ---
const BackgroundEffects = () => {
  const [particles, setParticles] = useState<{ id: number; style: any; color: string }[]>([])
  const [stars, setStars] = useState<{
    id: number;
    style: React.CSSProperties;
    color: 'white' | 'gold';
    size: number;
  }[]>([])

  useEffect(() => {
    // Particles
    const colors = [
      'bg-yellow-200', // Gold
      'bg-orange-300', // Saffron soft
      'bg-white',      // Pure light
    ]
    const generated = [...Array(40)].map((_, i) => {
      const size = Math.random() * 4 + 1 + 'px'
      const color = colors[Math.floor(Math.random() * colors.length)]
      return {
        id: i,
        color: color,
        style: {
          width: size,
          height: size,
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 7 + 's',
          animationDuration: Math.random() * 4 + 4 + 's',
          boxShadow: `0 0 ${Math.random() * 10 + 5}px ${color.replace('bg-', 'rgba(').replace('yellow-200', '254, 240, 150, 0.8').replace('orange-300', '253, 186, 116, 0.8').replace('white', '255, 255, 255, 0.8')})`,
        }
      }
    })
    setParticles(generated)

    // Stars (white and gold)
    const starColors: Array<'white' | 'gold'> = ['white', 'gold']
    const starArr = [...Array(24)].map((_, i) => {
      const color = starColors[Math.floor(Math.random() * starColors.length)]
      const size = Math.random() * 18 + 8 // px
      return {
        id: i,
        color,
        size,
        style: {
          position: 'absolute',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          opacity: 0.85 + Math.random() * 0.15,
          filter: color === 'gold' ? 'drop-shadow(0 0 8px #ffe066)' : 'drop-shadow(0 0 6px #fff)',
          animation: `star-twinkle ${3 + Math.random() * 3}s infinite ${Math.random() * 3}s`,
          zIndex: 11,
        } as React.CSSProperties
      }
    })
    setStars(starArr)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Subtle Gradient Overlay to make particles pop */}
      <div className="absolute inset-0 bg-radial-at-t from-orange-100/10 via-transparent to-transparent" />

      {/* Divine Stars (SVG) */}
      {stars.map((star) => (
        <svg
          key={star.id}
          width={star.size}
          height={star.size}
          viewBox="0 0 24 24"
          fill="none"
          style={star.style}
        >
          <polygon
            points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"
            fill={star.color === 'gold' ? '#ffe066' : '#fff'}
            stroke={star.color === 'gold' ? '#ffd700' : '#fff'}
            strokeWidth="1.2"
            opacity={star.color === 'gold' ? 0.95 : 0.85}
          />
        </svg>
      ))}

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`animate-divine absolute ${p.color} rounded-full blur-[0.5px]`}
          style={p.style}
        />
      ))}

      {/* Divine Smoke / Incense effects */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`smoke-${i}`}
          className="animate-smoke absolute bottom-0 bg-orange-100/5 rounded-full blur-[80px]"
          style={{
            width: '300px',
            height: '600px',
            left: `${20 + i * 30}%`,
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}
    </div>
  )
}
const Diya = ({ position }: { position: string }) => (
  <div className={`fixed ${position} z-40 hidden lg:block`}>
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="relative flex flex-col items-center"
    >
      <div className="w-4 h-7 bg-linear-to-t from-orange-600 via-yellow-400 to-white rounded-full blur-[2px]" />
      <div className="w-12 h-6 bg-amber-900 rounded-b-full shadow-2xl border-t border-amber-950" />
    </motion.div>
  </div>
)

// --- Constants ---
const SLIDER_IMAGES = [
  { src: '/temple-hero .jpg', alt: 'Main Temple View' },
  { src: '/first.png', alt: 'Inner Sanctum' },
  { src: '/three.png', alt: 'Gopuram' }
]

const GALLERY_IMAGES = [
  { src: '/11.png', title: 'Deepotsavam' },
  { src: '/12.png', title: 'Daily Puja' },
  { src: '/13.png', title: 'Flower Decoration' },
  { src: '/14.png', title: 'Temple Gate' },
  { src: '/15.png', title: 'Abhishekam' },
  { src: '/16.png', title: 'Dhwajasthambham' }
]

const VIDEOS = [
  { title: 'Morning Aarti', desc: 'Divine sounds of the early morning prayer.', src: '/temple-darshan.mp4' },
  { title: 'Kalyanotsavam', desc: 'The celestial wedding celebration.', src: '/festival-celebration.mp4' },
  { title: 'Temple Tour', desc: 'A spiritual walk through the premises.', src: '/puja-ceremony.mp4' }
]

export default function Home() {
  // UI States
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [amount, setAmount] = useState('501')
  const [showQR, setShowQR] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const audioRef = useRef<HTMLAudioElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) audioRef.current.pause()
      else audioRef.current.play().catch(err => console.log('Audio error:', err))
      setIsAudioPlaying(!isAudioPlaying)
    }
  }

  // Action: Send Email (Divine Request)
  const handleDivineRequest = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Divine Request from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )
    window.location.href = `mailto:seva@ragampetatemple.org?subject=${subject}&body=${body}`
  }

  // Action: Donate via UPI (mobile: open link, desktop: show QR)
  const upiID = "perammanasa@ibl" // Your real UPI ID
  const upiUrl = `upi://pay?pa=${upiID}&pn=RagampetaTemple&am=${amount}&cu=INR`
  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  };
  const handleDonate = () => {
    if (!amount) return alert('Please enter an amount');
    if (isMobile()) {
      window.location.href = upiUrl;
    } else {
      setShowQR(true);
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-primary/30">
      <BackgroundEffects />
      <Diya position="bottom-10 left-10" />
      <Diya position="bottom-10 right-10" />
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-100 origin-left shadow-lg" style={{ scaleX }} />

      <audio ref={audioRef} src="/om-namo-venkateshaya-chanting.mp3" loop preload="auto" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl font-bold">ॐ</div>
            <span className="text-xl font-bold text-primary tracking-tighter">Sri Venkateshwara</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
            {['about', 'gallery', 'videos', 'contact', 'donate'].map(item => (
              <a key={item} href={`#${item}`} className="hover:text-primary transition-colors underline-offset-8 hover:underline">{item}</a>
            ))}
          </div>

          <button onClick={toggleAudio} className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all active:scale-90">
            {isAudioPlaying ? <Volume2 size={20} className="text-primary" /> : <VolumeX size={20} className="text-primary" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-[#fdf8f3] z-10" />
            <Image src={SLIDER_IMAGES[currentSlide].src} alt="Temple" fill className="object-cover" priority />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 text-center text-white px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-primary text-5xl mb-6">ॐ</motion.div>
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter drop-shadow-2xl">Venkateshwara</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto font-light opacity-90 leading-relaxed tracking-wide">
              Where devotion meets divinity. Welcome to the sacred abode of Ragampeta Swamy.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <a href="#donate" className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-2xl hover:bg-accent transition-all hover:-translate-y-1">Darshan & Seva</a>
              <a href="#gallery" className="px-10 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all">Explore Gallery</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-32 px-6 max-w-7xl mx-auto relative bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/diety.jpg" alt="Deity" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Divine Heritage</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">A Sanctuary for the Soul</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For decades, Ragampeta, Venkateshwara Temple has stood as a beacon of spirituality, offering peace to thousands of devotees. Our traditions are rooted in ancient Vedic rituals.
            </p>
            <div className="grid gap-6">
              {[
                { title: "Sacred Aarti", time: "6:00 AM & 7:00 PM" },
                { title: "Annadanam", time: "Every Saturday" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-orange-50/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">0{i+1}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Temple Gallery</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" variants={staggerContainer}>
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -10 }} className="relative h-80 rounded-4xl overflow-hidden shadow-xl group cursor-pointer">
                <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <h4 className="text-white font-bold text-xl">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">Spiritual Darshan</h2>
          <p className="text-muted-foreground text-xl">Experience the divine vibrations through video</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {VIDEOS.map((vid, i) => (
            <motion.div key={i} variants={fadeUp} onClick={() => setSelectedVideo(i)} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-orange-100 group cursor-pointer">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center pl-1 shadow-2xl">
                    <Play fill="currentColor" size={24} />
                  </button>
                </div>
                <Image src={GALLERY_IMAGES[i % 6].src} alt="Video thumb" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-2">{vid.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{vid.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-32 px-6">
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp}
          className="max-w-5xl mx-auto bg-[#2d1810] rounded-[4rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 p-16 text-white flex flex-col justify-center bg-linear-to-br from-primary/20 to-transparent">
            <Heart size={64} className="text-primary mb-8" />
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Dhaanam is Divine</h2>
            <p className="text-xl opacity-70 leading-relaxed mb-8">
              Every contribution helps us maintain the temple, feed the needy through Annadanam, and celebrate our grand festivals.
            </p>
            <div className="flex items-center gap-4 text-primary font-bold">
              <Sparkles /> <span>Tax Exempted under 80G</span>
            </div>
          </div>

          <div className="lg:w-1/2 p-16 bg-white">
            <h3 className="text-2xl font-bold mb-8">Select Seva Amount</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['501', '1116', '2500', '5001'].map(amt => (
                <button 
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-4 rounded-2xl border-2 font-bold transition-all ${amount === amt ? 'border-primary bg-primary/5 text-primary scale-105' : 'border-muted hover:border-primary/30'}`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
            <div className="space-y-6">
              <input 
                type="number" 
                placeholder="Enter Custom Amount"
                className="w-full p-5 rounded-2xl border-2 border-muted focus:border-primary outline-none transition-all text-lg"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button 
                onClick={handleDonate}
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-primary/40 hover:bg-accent transition-all active:scale-95"
              >
                Donate via PhonePe / UPI
              </button>
              {showQR && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60">
                  <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center relative">
                    <button onClick={() => setShowQR(false)} className="absolute top-4 right-4 text-2xl text-primary font-bold">×</button>
                    {amount && (
                      <>
                        <h4 className="mb-4 text-lg font-bold text-primary">Scan to Donate</h4>
                        <UPIQRCode upiUrl={upiUrl} />
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                          UPI ID: <span className="font-mono text-primary">{upiID}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-5xl font-bold mb-10 text-primary">Get in Touch</h2>
            <div className="space-y-10">
              {[
                { icon: <MapPin />, label: "Location", val: "Ragampeta, Hyderabad, TS", href: "https://maps.google.com/?q=Ragampeta" },
                { icon: <Phone />, label: "Phone", val: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: <Mail />, label: "Email", val: "seva@ragampetatemple.org", href: "mailto:seva@ragampetatemple.org" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex gap-8 items-start hover:opacity-80 transition-opacity">
                  <div className="p-5 bg-primary/10 rounded-2xl text-primary">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className="text-xl font-medium">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <form onSubmit={handleDivineRequest} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-orange-100 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input required placeholder="Name" className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none" 
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Phone" className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none" 
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <input required type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none" 
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <textarea required placeholder="How can we help you?" rows={4} className="w-full p-4 rounded-xl bg-muted/30 border-none outline-none resize-none" 
                value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              <button type="submit" className="w-full py-5 bg-foreground text-white rounded-xl font-bold hover:bg-primary transition-all shadow-xl">
                Send Divine Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button onClick={() => setSelectedVideo(null)} className="absolute -top-12 right-0 text-white text-3xl">✕</button>
              <video src={VIDEOS[selectedVideo].src} controls autoPlay className="w-full rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Location Map Section */}
      <section id="location-map" className="py-20 px-6 bg-white border-t border-orange-100 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Temple Location</h2>
        <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-orange-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.406073964479!2d78.4867!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977b0b0b0b0b%3A0x0!2sRagampeta%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1706500000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ragampeta Temple Location"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#2d1810] text-white/50 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-primary text-4xl mb-6">ॐ</div>
          <h2 className="text-white text-2xl font-bold mb-4">Ragampeta , Venkateshwara Swamy Temple</h2>
          <div className="pt-10 border-t border-white/5 text-xs">
            © 2026 Ragampeta Venkateshwara Swamy Temple. <br /> 
            <span className="text-primary font-bold mt-2 inline-block">ॐ नमो वेङ्कटेशाय नमः</span>
            <p>Presented by Peram Manasa, D/O Shivaiah</p>
          </div>
        </div>
      </footer>
    </div>
  )
}