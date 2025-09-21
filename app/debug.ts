// Debug utilities for development
export const initDebugMode = () => {
  if (typeof window === 'undefined') return;
  
  // Prevent duplicate initialization
  if ((window as any).__debugInitialized) return;
  (window as any).__debugInitialized = true;

  // System status
  console.log(
    '%c╔══════════════════════════════════════╗\n║          AGENT COORDINATION          ║\n║            PROTOCOL v1.0             ║\n╚══════════════════════════════════════╝\n\n[SYSTEM] Network initialized\n\n> Swift Protocol: 100% reliability across 1,000+ transactions\n> Production systems: 8M+ residents, 70% efficiency gains\n> Infrastructure: Event-driven architecture on AWS serverless\n\nBuilding the infrastructure layer for autonomous economies.',
    'color: #00f5ff; font-family: monospace; font-size: 12px; line-height: 1.4;'
  );
};