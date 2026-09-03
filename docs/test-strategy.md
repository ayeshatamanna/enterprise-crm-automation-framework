# CRM Test Strategy

## Objective
Validate critical CRM workflows using maintainable automated checks.

## In scope
- Authentication
- Customer-facing records
- Sales-style journeys
- API validation
- Accessibility
- CI execution

## Test types
- Smoke
- Regression
- Negative
- API
- Accessibility

## Test-data strategy
Only public-demo or synthetic data is used.

## CI strategy
Smoke and API tests run on pull requests. Full regression can run nightly.

## Key risks
- Unauthorized access
- Incorrect customer data
- Failed workflow state persistence
- Duplicate records
- Broken search/filter behaviour
- Accessibility regressions
