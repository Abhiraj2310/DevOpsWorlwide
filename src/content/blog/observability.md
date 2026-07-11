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

## Build observability around user impact

The goal is not an impressive wall of charts. A team should be able to answer three questions quickly: are users succeeding, what changed, and where is time or failure accumulating? Begin with a small set of service-level indicators tied to a user journey. Connect those indicators to deployment identifiers, service ownership, and dependency context so an alert leads to a decision rather than a scavenger hunt.

Use metrics for trend and alerting, traces for request paths, and logs for event detail. Instrumentation quality matters more than volume. A metric without a clear denominator, a log without context, or a trace without propagation creates confidence without understanding.

### Operational routine

Review dashboards after incidents and remove panels that did not change a decision. Add links from alerts to the relevant runbook, dashboard, and trace search. This is how observability becomes a product for operators rather than a collection of tools.

Further reading: [Prometheus instrumentation guidance](https://prometheus.io/docs/practices/instrumentation/) and [Grafana security guidance](https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-security-hardening/).
