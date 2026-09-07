import {ArrowUpRight} from 'lucide-react';
const references = [
  {
    "id": "shapley",
    "label": "Shapley value",
    "authors": "Lloyd S. Shapley",
    "title": "A Value for n-Person Games",
    "venue": "Contributions to the Theory of Games II, 1953",
    "url": "https://doi.org/10.1515/9781400881970-018"
  },
  {
    "id": "paco",
    "label": "PACO",
    "authors": "Vignesh Ramanathan et al.",
    "title": "PACO: Parts and Attributes of Common Objects",
    "venue": "CVPR, 2023",
    "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Ramanathan_PACO_Parts_and_Attributes_of_Common_Objects_CVPR_2023_paper.html"
  },
  {
    "id": "coco",
    "label": "COCO",
    "authors": "Tsung-Yi Lin et al.",
    "title": "Microsoft COCO: Common Objects in Context",
    "venue": "ECCV, 2014",
    "url": "https://arxiv.org/abs/1405.0312"
  },
  {
    "id": "mmgcot",
    "label": "MM-GCoT",
    "authors": "Qiong Wu et al.",
    "title": "Grounded Chain-of-Thought for Multimodal Large Language Models",
    "venue": "arXiv:2503.12799, 2025",
    "url": "https://arxiv.org/abs/2503.12799"
  },
  {
    "id": "ptr",
    "label": "PTR",
    "authors": "Yining Hong et al.",
    "title": "PTR: A Benchmark for Part-based Conceptual, Relational, and Physical Reasoning",
    "venue": "NeurIPS, 2021",
    "url": "https://arxiv.org/abs/2112.05136"
  },
  {
    "id": "vcr",
    "label": "VCR",
    "authors": "Rowan Zellers, Yonatan Bisk, Ali Farhadi, and Yejin Choi",
    "title": "From Recognition to Cognition: Visual Commonsense Reasoning",
    "venue": "CVPR, 2019",
    "url": "https://openaccess.thecvf.com/content_CVPR_2019/html/Zellers_From_Recognition_to_Cognition_Visual_Commonsense_Reasoning_CVPR_2019_paper.html"
  },
  {
    "id": "internvl",
    "label": "InternVL3",
    "authors": "Jinguo Zhu et al.",
    "title": "InternVL3: Exploring Advanced Training and Test-Time Recipes for Open-Source Multimodal Models",
    "venue": "arXiv:2504.10479, 2025",
    "url": "https://arxiv.org/abs/2504.10479"
  },
  {
    "id": "qwen",
    "label": "Qwen2.5-VL",
    "authors": "Shuai Bai et al.",
    "title": "Qwen2.5-VL Technical Report",
    "venue": "arXiv:2502.13923, 2025",
    "url": "https://arxiv.org/abs/2502.13923"
  },
  {
    "id": "lookback",
    "label": "Look-Back",
    "authors": "Shuo Yang, Yuwei Niu, Yuyang Liu, Yang Ye, Bin Lin, and Li Yuan",
    "title": "Look-Back: Implicit Visual Re-focusing in MLLM Reasoning",
    "venue": "AAAI, 2026",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38154"
  }
] as const;
export function Cite({id}:{id:typeof references[number]['id']}){const n=references.findIndex(r=>r.id===id);return <sup className="citation"><a href={`#ref-${id}`} aria-label={`Reference ${n+1}: ${references[n].label}`}>[{n+1}]</a></sup>}
export default function References(){return <section id="references" className="wrap section references-section"><style>{`
.citation{font-size:.7em;line-height:0;vertical-align:super;margin-left:4px;white-space:nowrap}.citation a{color:#345f48;text-decoration:none}.citation a:hover{text-decoration:underline}.references-section{border-top:1px solid #dce2d8}.reference-list{list-style:none;padding:0;margin:32px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:0 36px}.reference-list li{display:flex;align-items:flex-start;gap:14px;padding:23px 0;border-top:1px solid #dce2d8;scroll-margin-top:110px}.reference-list li:target{background:#edf3e7;border-radius:5px;outline:8px solid #edf3e7}.reference-number{font:12px monospace;color:#78906b;padding-top:4px}.reference-list li>div{min-width:0}.reference-list h3{font-size:16px;line-height:1.6;margin:7px 0}.reference-list h3 a:hover{color:#345f48;text-decoration:underline;text-underline-offset:3px}.reference-list h3 svg{display:inline;vertical-align:middle;margin-left:5px}.reference-list p{font-size:13px;color:#788472;line-height:1.8}.reference-list .reference-label{font-size:11px;letter-spacing:1px;color:#547249;text-transform:uppercase}.study-sources{font-size:13px;line-height:1.9;color:#788472;margin:-10px 0 28px}@media(max-width:760px){.reference-list{grid-template-columns:1fr}}
`}</style><div className="section-heading"><div><div className="eyebrow">DATASETS · MODELS · FOUNDATIONS</div><h2>References</h2></div><p>Sources for the methods and resources used here.</p></div><ol className="reference-list">{references.map((r,i)=><li key={r.id} id={`ref-${r.id}`}><span className="reference-number">[{i+1}]</span><div><span className="reference-label">{r.label}</span><h3><a href={r.url} target="_blank" rel="noreferrer">{r.title}<ArrowUpRight size={14}/></a></h3><p>{r.authors}. {r.venue}.</p></div></li>)}</ol></section>}
