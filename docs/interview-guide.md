# Interview Guide

## 60-second explanation

I built this CRM automation framework independently to demonstrate production-style automation practices without exposing any proprietary employer code.

The framework uses Playwright and TypeScript with page objects, fixtures, API clients, synthetic test data, accessibility checks and GitHub Actions. I structured it so that smoke, API and broader regression tests can be executed independently.

## Be ready to explain

- Why Playwright was chosen
- Why fixtures are useful
- Why API setup is faster than UI setup
- Why tests should be independent
- Why synthetic data matters
- How CI failures would be debugged
- Why accessibility belongs in the automation pipeline
