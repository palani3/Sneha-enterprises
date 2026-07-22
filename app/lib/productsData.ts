export interface SpecRow { label: string; value: string; }
export interface Feature { label: string; desc: string; }

export interface ProductData {
  id: string;
  num: string;
  badge: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  galleryImages: string[];
  accentColor: string;
  accentDark: string;
  glowColor: string;
  description: string;
  specRows: SpecRow[];
  features: Feature[];
}

export const PRODUCTS: ProductData[] = [
  {
    id: 'vrf',
    num: '01',
    badge: 'Enterprise',
    category: 'VRF System',
    title: 'VRF Air Conditioner',
    tagline: 'Multi-Zone · High Efficiency',
    image: '/img/products/VRF/VRF_AirConditioner.webp',
    galleryImages: [
      '/img/products/VRF/VRF_AirConditioner.webp',
      '/img/products/VRF/Up_to_64%20Indoor_Units.webp',
      '/img/products/VRF/Simultaneous_Heat_Cool_Heat-recovery.webp',
      '/img/products/VRF/BMS_Modbus_Integration.webp',
      '/img/products/VRF/Variable_Refrigerant_Flow.webp',
      '/img/products/VRF/Individual_Zone_Control.webp',
      '/img/products/VRF/Long_Pipe_Runs.webp',
    ],
    accentColor: '#818cf8',
    accentDark: '#6366f1',
    glowColor: 'rgba(129,140,248,0.35)',
    description:
      'BlueStar Variable Refrigerant Flow (VRF) systems represent the pinnacle of multi-zone air conditioning for medium and large commercial buildings. A single outdoor unit connects up to 64 indoor units of varied types across an entire floor or building — delivering independent zone comfort with remarkable energy efficiency. Sneha Enterprises is Bangalore\'s leading BlueStar VRF installer with over 2,000 TR of VRF capacity deployed.',
    specRows: [
      { label: 'Capacity Range', value: '8 HP to 54 HP (per ODU)' },
      { label: 'Max Indoor Units', value: 'Up to 64 per outdoor unit' },
      { label: 'Refrigerant', value: 'R-410A' },
      { label: 'Power Supply', value: '415 V, Three Phase, 50 Hz' },
      { label: 'Pipe Length', value: 'Up to 165 m total / 60 m vertical' },
      { label: 'Compressor Type', value: 'DC Inverter Twin-Rotary / Scroll' },
      { label: 'COP', value: 'Up to 4.2 (cooling mode)' },
      { label: 'Communication', value: 'Modbus RTU / BACnet / LonWorks' },
    ],
    features: [
      { label: 'Up to 64 Indoor Units', desc: 'Connect diverse indoor unit types (cassette, wall, floor, ceiling) to one outdoor unit — maximising design flexibility.' },
      { label: 'Simultaneous Heat & Cool', desc: 'Heat-recovery VRF reclaims rejected heat from cooling zones to heat other zones simultaneously — zero energy wasted.' },
      { label: 'BMS / Modbus Integration', desc: 'Full open-protocol connectivity (BACnet MS/TP, LonWorks, Modbus RTU) for seamless smart-building and LEED integration.' },
      { label: 'Variable Refrigerant Flow', desc: 'Compressor modulates from 15% to 115% capacity — matching exact load requirements and delivering 30–50% energy savings.' },
      { label: 'Individual Zone Control', desc: 'Each indoor unit has independent temperature, fan speed and schedule settings — perfect for open-plan offices with varied occupancy.' },
      { label: 'Long Pipe Runs — 60 m', desc: 'Intelligent oil return logic and accumulators allow outdoor units on terraces — preserving building facade and aesthetics.' },
    ],
  },
  {
    id: 'package',
    num: '02',
    badge: 'Central System',
    category: 'Package & Ductable AC',
    title: 'Package & Ductable AC',
    tagline: 'Concealed Ducting · Uniform Air',
    image: '/img/products/Package_Ductable%20AC/0.webp',
    galleryImages: [
      '/img/products/Package_Ductable%20AC/0.webp',
      '/img/products/Package_Ductable%20AC/1.webp',
      '/img/products/Package_Ductable%20AC/2.webp',
      '/img/products/Package_Ductable%20AC/3.webp',
      '/img/products/Package_Ductable%20AC/4.webp',
      '/img/products/Package_Ductable%20AC/5.webp',
      '/img/products/Package_Ductable%20AC/6.webp',
    ],
    accentColor: '#34d399',
    accentDark: '#059669',
    glowColor: 'rgba(52,211,153,0.35)',
    description:
      'BlueStar Package and Ductable Air Conditioners are the preferred central cooling solution for large open-plan spaces — shopping malls, corporate campuses, warehouses, banquet halls, clean rooms and industrial facilities. The new-generation inverter ducted variants (6.25 HP to 28 HP) deliver 25% annualised power savings over conventional ducted systems, with advanced touch-screen controllers, AHU integration kits and multi-outdoor redundancy.',
    specRows: [
      { label: 'Capacity Range', value: '2 TR–20 TR (Ducted) / 5 TR–22 TR (Pkg)' },
      { label: 'HP Range', value: '6.25, 10, 14, 21, 28 HP' },
      { label: 'Refrigerant', value: 'R-410A' },
      { label: 'Power Supply', value: '415 V, Three Phase, 50 Hz' },
      { label: 'Compressor Type', value: 'Inverter Rotary / Inverter Scroll' },
      { label: 'External Static', value: 'Up to 50 Pa (ducted) / 80 Pa (pkg)' },
      { label: 'Operating Ambient', value: 'Up to 52°C' },
      { label: 'Controller', value: 'Touch Screen with BMS / Modbus' },
    ],
    features: [
      { label: 'Concealed Duct Installation', desc: 'Slim indoor unit installs above false ceiling — only supply/return grilles visible, delivering premium aesthetics for any space.' },
      { label: 'Uniform Airflow Distribution', desc: 'High-static-pressure centrifugal blower (DIDW) pushes conditioned air through long duct runs to achieve even distribution.' },
      { label: '2 TR to 20 TR Range', desc: 'Widest capacity range in its class — a single product family covers boutique offices, retail floors and large manufacturing bays.' },
      { label: 'Fresh Air Intake Option', desc: 'Dedicated fresh-air damper and mixing box supports ASHRAE 62.1 ventilation standards — mandatory for hospitals and clean rooms.' },
      { label: 'Inverter Ducted Technology', desc: 'New-Gen inverter compressor with 3,000-step EEV achieves ±0.1°C precision control and 25% annualised power saving over conventional.' },
      { label: 'Zone & Group Control', desc: 'Touch-screen controller manages up to 16 units from a single source; full Modbus / BACnet BMS integration for smart buildings.' },
    ],
  },

  {
    id: 'split',
    num: '03',
    badge: 'Most Popular',
    category: 'Split AC',
    title: 'Split Air Conditioner',
    tagline: 'Elegant Design · Smart Comfort',
    image: '/img/products/SplitAir/Split_Air.webp',
    galleryImages: [
      '/img/products/SplitAir/Split_Air.webp',
      '/img/products/SplitAir/inverter_technology.webp',
      '/img/products/SplitAir/Wi-Fi_Smart_Control.webp',
      '/img/products/SplitAir/Self-cleaning.webp',
      '/img/products/SplitAir/Efficient_sleep.webp',
      '/img/products/SplitAir/5-Star_BEE1.webp',
      '/img/products/SplitAir/Elegant_air.webp',
    ],
    accentColor: '#38bdf8',
    accentDark: '#0284c7',
    glowColor: 'rgba(56,189,248,0.35)',
    description:
      'BlueStar Split Air Conditioners combine award-winning aesthetics with smart inverter technology to deliver superior comfort for homes, boutique offices and retail spaces. Available in a wide capacity range with multiple star ratings, they are India\'s most popular choice for individual room cooling — backed by 28+ years of Sneha Enterprises\' installation expertise across Bangalore.',
    specRows: [
      { label: 'Capacity Range', value: '0.75 TR to 2.0 TR' },
      { label: 'Refrigerant', value: 'R-32 (Eco-Friendly)' },
      { label: 'Power Supply', value: '230 V, Single Phase, 50 Hz' },
      { label: 'Star Rating', value: '3-Star / 5-Star BEE' },
      { label: 'Compressor Type', value: 'Inverter Rotary / Scroll' },
      { label: 'Operating Ambient', value: 'Up to 48°C' },
      { label: 'Noise Level', value: '19 – 32 dB(A) (indoor)' },
      { label: 'Warranty', value: '1 yr product + 5 yr compressor' },
    ],
    features: [
      { label: 'Smart Inverter Compressor', desc: 'Adaptive-speed compressor precisely maintains set temperature ±0.5°C while consuming minimum power — ROI within 18 months.' },
      { label: 'Wi-Fi Smart Control', desc: 'Full control via smartphone: schedule, geofencing, voice assistant (Alexa / Google Home) and energy usage reports.' },
      { label: 'Self-Cleaning Function', desc: 'Auto-activates on shutdown — hot refrigerant gas dries the evaporator, eliminating bacteria and mould growth completely.' },
      { label: 'Auto Restart & Sleep Mode', desc: 'Power-cut recovery resumes last settings; Sleep Mode raises set temp by 1°C/hr saving up to 6% extra energy overnight.' },
      { label: '5-Star BEE Energy Rating', desc: 'Highest BEE certification available — qualifies for government energy efficiency rebates and green building credits.' },
      { label: 'Elegant Premium Design', desc: 'Award-winning slim panel (only 200 mm depth) with piano-finish front panel and hidden LED display for a premium look.' },
    ],
  },
  {
    id: 'cassette',
    num: '04',
    badge: 'Commercial',
    category: 'Cassette AC',
    title: 'Cassette Air Conditioner',
    tagline: 'Ceiling-Concealed · 360° Cooling',
    image: '/img/products/Cassette/Cassette.webp',
    galleryImages: [
      '/img/products/Cassette/Cassette.webp',
      '/img/products/Cassette/airflow_in_modern.webp',
      '/img/products/Cassette/inverter_technology.webp',
      '/img/products/Cassette/Ultra_slim.webp',
      '/img/products/Cassette/Golden_Fin.webp',
      '/img/products/Cassette/Wi-Fi_Smart_Control.webp',
      '/img/products/Cassette/auto_restart.webp',
    ],
    accentColor: '#a78bfa',
    accentDark: '#7c3aed',
    glowColor: 'rgba(167,139,250,0.35)',
    description:
      'BlueStar Cassette Air Conditioners are ceiling-concealed units engineered for commercial spaces where aesthetics and uniform cooling are equally important. With a slim profile that integrates seamlessly into false ceilings, these units deliver powerful 360° surround airflow that reaches every corner of the conditioned space — making them the preferred choice for offices, retail showrooms, restaurants and hotel lobbies.',
    specRows: [
      { label: 'Capacity Range', value: '1.0 TR to 3.0 TR' },
      { label: 'Refrigerant', value: 'R-32 (Low GWP)' },
      { label: 'Power Supply', value: '230 V, Single Phase, 50 Hz' },
      { label: 'Star Rating', value: '3-Star / 5-Star BEE' },
      { label: 'Compressor Type', value: 'Inverter Rotary' },
      { label: 'Operating Ambient', value: 'Up to 52°C' },
      { label: 'Noise Level', value: '38 – 44 dB(A)' },
      { label: 'Panel Finish', value: 'Pearl White ABS' },
    ],
    features: [
      { label: '360° 4-Way Airflow', desc: 'Auto-swing louvres distribute cool air uniformly in all four directions — no cold or warm spots in the room.' },
      { label: 'Inverter Technology', desc: 'Variable-speed DC inverter compressor adjusts capacity in real time — delivering up to 40% energy savings over fixed-speed units.' },
      { label: 'Ultra Slim Ceiling Design', desc: 'Only 230 mm panel depth; installs flush inside false ceiling tiles for a clean, unobtrusive look that preserves interior design.' },
      { label: 'Blue Fin Anti-Corrosion', desc: 'Heat exchanger fins coated with a hydrophilic blue layer resist salt, humidity and industrial pollutants — ideal for coastal locations.' },
      { label: 'Wi-Fi Smart Control', desc: 'Integrated Wi-Fi module allows remote on/off, temperature scheduling and energy monitoring via the BlueStar iSense mobile app.' },
      { label: 'Auto Restart Function', desc: 'Automatically resumes the last-used settings within seconds of power restoration — no manual intervention required after power cuts.' },
    ],
  },
  {
    id: 'chiller',
    num: '05',
    badge: 'Industrial',
    category: 'Chiller AC',
    title: 'Chiller Air Conditioner',
    tagline: 'Latest Technology · Superior Reliability',
    image: '/img/products/Chiller/Industrial_chiller.webp',
    galleryImages: [
      '/img/products/Chiller/Industrial_chiller.webp',
      '/img/products/Chiller/High_IPLV.webp',
      '/img/products/Chiller/Low_noise_air.webp',
      '/img/products/Chiller/Advanced_HVAC.webp',
      '/img/products/Chiller/Reliable_cooling.webp',
      '/img/products/Chiller/BMS_Integration.webp',
      '/img/products/Chiller/Eco-friendly.webp',
    ],
    accentColor: '#22d3ee',
    accentDark: '#0891b2',
    glowColor: 'rgba(34,211,238,0.35)',
    description:
      'BlueStar Chilled Water Systems are built for large commercial and industrial buildings where centralised precision cooling is non-negotiable. Using chilled water as the heat-transfer medium, these systems deliver unmatched energy efficiency across part and full-load conditions. Sneha Enterprises has commissioned over 50 chilled water plants across Bangalore for corporates, hospitals, data centres and manufacturing facilities.',
    specRows: [
      { label: 'Capacity Range', value: '20 TR to 500 TR' },
      { label: 'Refrigerant', value: 'R-134A / R-410A / R-1234ze' },
      { label: 'Power Supply', value: '415 V, Three Phase, 50 Hz' },
      { label: 'Chilled Water Temp', value: '6°C / 12°C (supply / return)' },
      { label: 'Compressor Type', value: 'Screw / Centrifugal / Scroll' },
      { label: 'IPLV Rating', value: 'Up to 8.5 (kW/TR)' },
      { label: 'Noise Level', value: '72 – 82 dB(A)' },
      { label: 'Controls', value: 'Microprocessor with BMS port' },
    ],
    features: [
      { label: 'High IPLV Efficiency', desc: 'Integrated Part Load Value optimised for Indian climate — delivering maximum savings during shoulder seasons (60–80% load).' },
      { label: 'Ultra Low Sound Levels', desc: 'Acoustically engineered compressor housing and vibration-isolated base frame keep noise below 75 dB — suitable for hospitals.' },
      { label: 'Advanced Compressor Design', desc: 'Variable-speed screw or centrifugal compressors with electronic expansion valves ensure precise capacity modulation.' },
      { label: 'Superior Reliability', desc: 'Dual-circuit refrigeration architecture ensures 50% capacity continuity even during single-circuit maintenance or failure.' },
      { label: 'BMS Integration Ready', desc: 'Open-protocol BACnet / Modbus connectivity allows full integration with building EMS, SCADA and facility management systems.' },
      { label: 'Eco-Friendly Refrigerant', desc: 'Available with ultra-low GWP refrigerants (R-1234ze) compliant with Kigali Amendment and India HFC phase-down schedule.' },
    ],
  },
  {
    id: 'screw',
    num: '06',
    badge: 'Heavy Duty',
    category: 'Screw / Turbo Chiller',
    title: 'Screw / Turbo Chillers',
    tagline: 'Magnetic Bearings · Zero Friction',
    image: '/img/products/Screw-Turbo%20Chillers/Screw-Turbo%20Chillers.webp',
    galleryImages: [
      '/img/products/Screw-Turbo%20Chillers/Screw-Turbo%20Chillers.webp',
      '/img/products/Screw-Turbo%20Chillers/Magnetic-bearing-compresso.webp',
      '/img/products/Screw-Turbo%20Chillers/chiller_at%20sunset.webp',
      '/img/products/Screw-Turbo%20Chillers/Zero%20oil%20chiller.webp',
      '/img/products/Screw-Turbo%20Chillers/IoT%20monitoring.webp',
      '/img/products/Screw-Turbo%20Chillers/High-efficiency%20cooling.webp',
      '/img/products/Screw-Turbo%20Chillers/Low%20Vibration_Noise.webp',
    ],
    accentColor: '#fb7185',
    accentDark: '#e11d48',
    glowColor: 'rgba(251,113,133,0.35)',
    description:
      'BlueStar Screw and Magnetic-Bearing Turbo Chillers represent the absolute pinnacle of large-scale cooling engineering. Designed for district cooling plants, large data centres, pharmaceutical facilities and airports, these machines deliver extraordinary efficiency, near-zero maintenance and a service life exceeding 25 years. The magnetic-bearing centrifugal (turbo) variant eliminates all oil lubrication — the single biggest cause of chiller downtime worldwide.',
    specRows: [
      { label: 'Capacity Range', value: '100 TR to 2,000 TR' },
      { label: 'Refrigerant', value: 'R-134A / R-1234ze / R-514A' },
      { label: 'Power Supply', value: '3.3 kV / 6.6 kV / 11 kV' },
      { label: 'Compressor Type', value: 'Screw / Magnetic-Bearing Centrifugal' },
      { label: 'Full Load COP', value: 'Up to 7.0 (kW/kW)' },
      { label: 'IPLV / NPLV', value: 'Up to 10.0' },
      { label: 'Oil System', value: 'Oil-free (Magnetic) / Flooded (Screw)' },
      { label: 'Controls', value: 'Touchscreen + BACnet + Remote IoT' },
    ],
    features: [
      { label: 'Magnetic Bearing Compressor', desc: 'Electromagnetically levitated rotor spins with zero mechanical contact — eliminating friction, wear and oil contamination entirely.' },
      { label: '25+ Year Service Life', desc: 'With no wear parts and predictive diagnostics, these chillers routinely outlast the buildings they serve — lowest lifecycle cost.' },
      { label: 'Zero Oil Lubrication', desc: 'No oil separator, oil heater, oil pump or oil filters required — removing the most maintenance-intensive subsystem of any chiller.' },
      { label: 'IoT Remote Monitoring', desc: 'Cloud-connected performance dashboard provides 24/7 real-time COP, alarms, trend logging and predictive failure alerts.' },
      { label: 'High COP Performance', desc: 'Full-load COP up to 7.0 and part-load IPLV up to 10.0 — the most efficient large-tonnage cooling available in India.' },
      { label: 'Low Vibration & Noise', desc: 'Magnetic levitation isolates all vibration at source — noise levels under 72 dB(A), well below hospital and IT-park thresholds.' },
    ],
  }

];
