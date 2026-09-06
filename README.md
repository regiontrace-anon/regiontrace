# RegionTrace

An interactive research website for **Measuring how image regions shape multimodal generation**.

The website introduces RegionTrace, explains region effects, interactions, and Shapley weighting, and presents examples organized around the paper's three studies. All examples replay saved experimental results; the website does not run model inference.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by the development server.

```sh
npm run build
npm start
```

The production build uses Vinext, Vite, and the Cloudflare Workers runtime. Mathematical formulas are rendered with KaTeX.

## Website structure

- **Introduction:** toggle the suitcase, couch, and chair in a measured region-combination example.
- **Method:** fix an answer, restore a region, then understand interactions and Shapley weighting.
- **Study I — Attribute binding:** inspect support for the incorrect answer in the mug example.
- **Study II — Generation trace:** follow regional support as an explanation grows.
- **Study III — Relook:** inspect the saved visual revisit and compare support before and after it.
- **Findings and toolbox:** explore the main findings, paper, and downloadable example data.

## Source layout

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Main page, introductory explorer, and study panels |
| `app/method-walkthrough.tsx` | Interactive method explanation |
| `app/relook-case.tsx` | Study III checkpoint explorer |
| `app/section-navigation.tsx` | Section navigation rail |
| `app/globals.css` | Website styles |
| `public/assets/` | Experiment images, downloadable measurements, and paper |
| `components/ui/` | Reusable UI components |

## Evidence and score scales

- **Spatial combinations:** Figure 1 supporting experiment, COCO 2017 image 81061. Eight saved combinations use the boolean order suitcase, couch, chair.
- **Mug attribution:** Figure 2 development example, separate from the frozen PACO cohort. Shapley-averaged contributions use the Yes–No log-score margin.
- **Generation trajectory:** Figure 3, InternVL3-8B, MM-GCoT judgement:673. The three displayed checkpoints use published rounded values. Region effects in percentage points and whole-image-baseline support are distinct readouts.
- **Relook:** Semantic-Back-7B, MM-GCoT judgement:1027, from `app3_native_lookback_region_curve_remaining354_v1`. The download includes exact saved prefixes and original log scores. The display derives candidate-normalized Yes probabilities and their difference in percentage points, as in Study III. This individual before/after comparison does not isolate the revisit from the added text.
- **Paper:** the supplied manuscript snapshot is available at `public/assets/regiontrace-paper.pdf`.

Hidden selected regions use the recorded processor-mean baseline; pixels outside those regions remain unchanged.

## Deployment

The source includes the existing Sites/Vinext build integration. The local hosting configuration has no assigned Sites project ID. Publishing to Sites requires binding it to your own project; publishing to GitHub alone does not deploy the website or configure GitHub Pages.

## Validation

TypeScript checks and the production build pass. Displayed Relook probabilities and differences were checked against the original experiment scores, along with the saved revisit text. Browser interaction testing has not been performed.

The optional WebMCP `explore_region_combination` tool uses the same React state and validates its three boolean inputs. It requires a browser that provides the corresponding API.
