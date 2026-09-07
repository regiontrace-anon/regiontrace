# RegionTrace

**RegionTrace: Measuring How Image Regions Shape Multimodal Generation**

**Submitted to ICLR 2027 · Anonymous submission · Under review**

This repository accompanies our anonymous submission to ICLR 2027. It is maintained through the dedicated anonymous GitHub account [`regiontrace-anon`](https://github.com/regiontrace-anon). Author names, affiliations, and identifying contact details are withheld during double-blind review.

## Project website

[Explore the interactive website](https://regiontrace-anon.github.io/regiontrace/) · [Read the anonymous manuscript](website/public/assets/regiontrace-paper.pdf)

RegionTrace measures how image regions support a fixed answer and how that support changes as multimodal generation unfolds. The website introduces the measurement framework and presents precomputed examples from three studies:

1. **Attribute binding:** locating visual support behind an incorrect attribute assignment.
2. **Generation traces:** tracking regional support as an explanation grows.
3. **Look-Back:** measuring visual support before and after an explicit visual revisit.

## Repository structure

```text
regiontrace/
├── README.md               # Anonymous submission overview
├── code/                   # Reserved for the research implementation
├── website/                # Website source, example assets, and manuscript
│   └── README.md           # Website setup and data provenance
└── .github/workflows/      # GitHub Pages deployment
```

## Research code

**Code release is forthcoming.** The research implementation is being organized and will be uploaded to `code/` once ready. That directory currently contains a placeholder only.

The interactive website replays saved experimental results. Its source is available under `website/`; it is not the research implementation and does not perform live model inference.

## Review status

This work is submitted to ICLR 2027 and is under review. Submission does not imply acceptance. The repository, website, and manuscript are provided anonymously for the review process.
