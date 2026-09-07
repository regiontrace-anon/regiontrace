import data from './coalitions.json';
// Restrict the recorded game to suitcase and couch. Chair remains visible
// as fixed background; this is not the paper's three-player Shapley game.
export const contexts = [
 { label:'Couch hidden',before:'001',after:'101',weight:0.5 },
 { label:'Couch visible',before:'011',after:'111',weight:0.5 },
] as const;
export const score=(key:keyof typeof data.coalition_scores)=>data.coalition_scores[key].yes_minus_no_margin;
export const effects=contexts.map(c=>score(c.after)-score(c.before));
export const baseline=score('001');
export const suitcaseAlone=score('101')-baseline;
export const couchAlone=score('011')-baseline;
export const additiveScore=baseline+suitcaseAlone+couchAlone;
export const observedScore=score('111');
export const interaction=observedScore-additiveScore;
export const suitcaseShapley=effects.reduce((sum,e,i)=>sum+e*contexts[i].weight,0);
export const couchShapley=couchAlone+interaction/2;
