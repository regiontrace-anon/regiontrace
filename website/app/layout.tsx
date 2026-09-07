import type { Metadata } from 'next';
import 'katex/dist/katex.min.css';
import './globals.css';
export const metadata: Metadata = {
 title: 'RegionTrace — Trace the visual support behind every answer',
 description: 'Explore how image regions support multimodal generation through real interactive cases of attribute binding, generation trajectories, and visual context.',
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
