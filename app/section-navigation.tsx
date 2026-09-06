'use client';
import {useEffect,useState} from 'react';
import {ArrowUpRight,Scan} from 'lucide-react';
import {Sidebar,SidebarProvider} from '@/components/ui/sidebar';
import {HoverCard,HoverCardContent,HoverCardTrigger} from '@/components/ui/hover-card';

const chapters=[
 {id:'overview',title:'Every answer. A visual trace.',group:'Overview',description:'Discover RegionTrace through the evidence behind a model’s answer.',major:true},
 {id:'explorer',title:'Try region combinations',group:'A quick introduction',description:'Toggle the suitcase, couch, and chair to see how visual context changes a fixed answer’s score.',major:true},
 {id:'method',title:'How RegionTrace works',group:'Method',description:'Follow a fixed answer from a single region comparison to interaction and Shapley weighting.',major:true},
 {id:'method-target',title:'One answer. Different visual evidence.',group:'Method · 01',description:'Keep the question, prefix, and target answer fixed while changing which regions are visible.'},
 {id:'method-effect',title:'Restore a region. Measure the difference.',group:'Method · 02',description:'Compare the mug body hidden and restored to understand its +5.00 Region Effect.'},
 {id:'method-interaction',title:'Object interactions and Shapley-weighted effects',group:'Method · 03',description:'See how the couch changes the suitcase’s contribution, then summarize the measured effects.'},
 {id:'interaction-reference',title:'What would simple addition predict?',group:'Method · 03 / Interaction',description:'Compare the additive reference with the observed joint score to make the interaction visible.'},
 {id:'shapley-summary',title:'Summarize with Shapley weights',group:'Method · 03 / Shapley',description:'Read each context, its effect, its Shapley weight, and the resulting weighted contribution.'},
 {id:'studies',title:'Three studies. Three uses of RegionTrace.',group:'Research cases',description:'Explore attribute binding, generation traces, and a real Look-Back example from the paper’s three studies.',major:true},
 {id:'findings',title:'From visual evidence to testable findings',group:'Research findings',description:'Three studies connect spatial attribution, generation trajectories, and visual revisits.',major:true},
 {id:'toolbox',title:'Start with a case. Follow the evidence.',group:'Toolbox',description:'Read the full paper, download example data, or return to the interactive case explorer.',major:true},
];
export default function SectionNavigation(){
 const [active,setActive]=useState('overview');
 const [preview,setPreview]=useState<string|null>(null);
 useEffect(()=>{
  let frame=0;
  const update=()=>{frame=0;const threshold=Math.min(170,window.innerHeight*.25);let next=chapters[0].id;
   for(const c of chapters){const element=document.getElementById(c.id);if(element&&element.getBoundingClientRect().top<=threshold)next=c.id;}
   if(window.scrollY>0&&window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-3)next=chapters[chapters.length-1].id;
   setActive(next);
  };
  const queue=()=>{if(!frame)frame=requestAnimationFrame(update)};
  window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);window.addEventListener('hashchange',queue);
  const observer=new ResizeObserver(queue);observer.observe(document.body);queue();
  return ()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',queue);window.removeEventListener('resize',queue);window.removeEventListener('hashchange',queue)};
 },[]);
 return <SidebarProvider className="chapter-shell"><Sidebar collapsible="none" className="chapter-sidebar"><nav aria-label="Page sections" className="chapter-nav">{chapters.map((c,index)=><HoverCard key={c.id} open={preview===c.id} onOpenChange={open=>setPreview(current=>open?c.id:current===c.id?null:current)}><HoverCardTrigger href={`#${c.id}`} delay={120} closeDelay={100} className={`chapter-marker ${c.major?'major':''}`} aria-label={`${c.group}: ${c.title}`} aria-current={active===c.id?'location':undefined} onClick={()=>{setActive(c.id);setPreview(null)}}><span className="chapter-tick" aria-hidden="true"/><span className="chapter-small-tick" aria-hidden="true"/></HoverCardTrigger><HoverCardContent side="right" sideOffset={17} align="center" className="chapter-preview"><div className="chapter-preview-meta"><span>{c.group}</span><span>{String(index+1).padStart(2,'0')} / {chapters.length}</span></div><h3>{c.title}</h3><p>{c.description}</p><a href={`#${c.id}`} onClick={()=>{setActive(c.id);setPreview(null)}}><Scan size={17}/><span>RegionTrace</span><span className="chapter-jump">Jump to section <ArrowUpRight size={15}/></span></a></HoverCardContent></HoverCard>)}</nav></Sidebar></SidebarProvider>;
}
