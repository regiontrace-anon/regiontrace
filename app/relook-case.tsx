'use client';

import {useState} from 'react';
import {Download,Eye,ArrowRight} from 'lucide-react';
import katex from 'katex';
import data from './relook-data.json';

const checkpoints=[
 {key:'pre_back',label:'Before relook',description:'The model has described the boards and their relationship. The explicit visual revisit has not yet been added.'},
 {key:'post_back',label:'After relook',description:'The saved prefix now includes the visual revisit below. Probe the same answer again with the selected regions visible or hidden.'},
 {key:'final_prefix',label:'Before final answer',description:'The model has added its concluding sentence. Probe Yes once more, just before the final answer.'},
] as const;
const signed=(v:number)=>`${v>=0?'+':''}${v.toFixed(2)}`;
function MathText({tex}:{tex:string}){return <span dangerouslySetInnerHTML={{__html:katex.renderToString(tex,{throwOnError:false})}}/>}

export default function RelookCase(){
 const [selected,setSelected]=useState(1);
 const step=checkpoints[selected];
 const readout=data.readouts[step.key];
 const full=readout.conditions.full.probability_yes*100;
 const hidden=readout.conditions.selected_removed.probability_yes*100;
 const effect=full-hidden;
 const pre=data.readouts.pre_back.effect_pp;
 const post=data.readouts.post_back.effect_pp;
 return <article className="trajectory relook-case">
  <div className="trace-header"><div><span className="tag">STUDY III · LOOK-BACK</span><h3>Does looking again strengthen visual support?</h3></div><span className="muted">Semantic-Back-7B · MM-GCoT · judgement:1027</span></div>
  <p className="relook-intro">Look-Back models generate an explicit visual revisit. RegionTrace measures how much the selected regions support the same answer before and after that revisit. The original image remains available throughout generation.</p>
  <div className="relook-question"><span className="eyebrow">THE SKATEBOARD CASE</span><p>{data.question}</p><span>Fixed target: <b>Yes</b> · Ground truth: Yes · Final answer: Yes</span></div>
  <div className="step-controls" aria-label="Relook checkpoints">{checkpoints.map((s,i)=><button key={s.key} className={selected===i?'active':''} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span>0{i+1}</span>{s.label}<ArrowRight size={16}/></button>)}</div>
  <div className="trace-body">
   <div className="trace-text"><div className="eyebrow"><Eye size={16}/> WHAT THE MODEL SAYS</div><p className="relook-context">{step.description}</p>
    <div className={`relook-quote ${selected===0?'pending':''}`}><span className="mini-label">{selected===0?'Upcoming revisit · not yet in this prefix':'Generated visual revisit · exact text'}</span><blockquote>“{data.back_text}”</blockquote></div>
    {selected===2&&<p className="relook-conclusion">Then: “Therefore, the statement is correct.”</p>}
    <details className="relook-details"><summary>Read the saved prefix at this checkpoint</summary><pre>{data.prefixes[step.key]}</pre></details>
   </div>
   <div className="relook-readout" aria-live="polite"><div className="eyebrow">WHAT REGIONTRACE MEASURES</div><p>At this checkpoint, hold the text fixed and compare two versions of the image.</p>
    <dl><div><dt>Complete image</dt><dd>{full.toFixed(2)}%</dd></div><div><dt>Selected regions hidden</dt><dd>{hidden.toFixed(2)}%</dd></div><div className="relook-effect"><dt>Selected regions’ effect<small>Complete image − regions hidden</small></dt><dd>{signed(effect)}<small>pp</small></dd></div></dl>
    <div className="relook-formula"><MathText tex={"E_t = 100 \\left[p_t(y\\mid I)-p_t(y\\mid I_{\\setminus R})\\right]"}/></div>
    <p className="fineprint">Scores are Yes probabilities normalized over the candidates Yes and No. Effects are measured in percentage points (pp). All three selected regions are restored together; this is their joint Region Effect. Hidden pixels use the processor-mean baseline.</p>
   </div>
  </div>
  <div className="relook-comparison"><div><span className="eyebrow">THE CHANGE ACROSS RELOOK</span><p>The regions provide stronger support immediately after the revisit.</p><span className="fineprint">The answer stays Yes. Stronger support here does not establish an overall accuracy gain or isolate relook from the additional text.</span></div><div className="relook-pair"><div><small>Before</small><strong>{signed(pre)}<small>pp</small></strong></div><ArrowRight size={20}/><div><small>After</small><strong>{signed(post)}<small>pp</small></strong></div><span className="relook-delta">{signed(post-pre)} pp change</span></div></div>
  <a className="download-link" href="/assets/relook-case.json" download><Download size={15}/> Download the trace and checkpoint measurements</a>
 </article>;
}
