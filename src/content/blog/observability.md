---
title: Observability that helps engineers make decisions
description: Replace dashboard sprawl with a coherent model of service health and user impact.
date: 2026-05-16
author: Elena Ruiz
tags: [Observability, Grafana, Prometheus]
category: Observability
readingTime: 10
---

## Start from questions

An observable service answers whether users can complete a meaningful action, what changed, and which dependency is responsible. Collecting every metric is not a strategy.

## Useful signals are connected

Metrics establish shape, logs explain events, and traces connect work across boundaries. Link them with shared service and deployment metadata.

```promql
sum(rate(http_requests_total{status=~"5.."}[5m]))
/
sum(rate(http_requests_total[5m]))
```

| Signal | Best question |
| --- | --- |
| SLO | are users affected? |
| Trace | where did time go? |
| Log | what happened? |

## References

- Google SRE Workbook
