---
title: "Optimising a Slow Sales Summary Query"
slug: "query-optimisation-sample"
summary: "Reduced execution time of a daily sales summary report by rewriting a correlated subquery as a JOIN."
date: "2026-01-01"
tags: ["T-SQL", "Performance", "Query Optimisation"]
hidden: false
---

## Problem

A daily sales summary report was taking several minutes to load in the reporting dashboard. The underlying query used a correlated subquery inside SELECT that executed once per row in the outer table.

## Approach

1. Ran the query with `SET STATISTICS TIME ON` to confirm the bottleneck.
2. Examined the execution plan — a Nested Loop operator was running against a large table for every outer row.
3. Rewrote the correlated subquery as a standard `LEFT JOIN` with a grouped subquery, reducing table scans from N to 1.
4. Added a non-clustered index on the join column to support the new plan.

## Sample SQL

```sql
-- BEFORE: correlated subquery (slow — executes once per outer row)
SELECT
    s.sale_id,
    s.sale_date,
    s.category,
    (
        SELECT SUM(amount)
        FROM sample_sales_detail d
        WHERE d.sale_id = s.sale_id
    ) AS total_amount
FROM sample_sales s
WHERE s.sale_date >= DATEADD(DAY, -30, GETDATE());

-- AFTER: rewritten as a JOIN (fast — single scan)
SELECT
    s.sale_id,
    s.sale_date,
    s.category,
    agg.total_amount
FROM sample_sales s
LEFT JOIN (
    SELECT sale_id, SUM(amount) AS total_amount
    FROM sample_sales_detail
    GROUP BY sale_id
) agg ON agg.sale_id = s.sale_id
WHERE s.sale_date >= DATEADD(DAY, -30, GETDATE());
```

> **Note:** All table and column names above are anonymised samples. No real client data, table names or business figures are used.

## Result

Execution time dropped significantly. The report now loads within a few seconds instead of several minutes.

## What I Learned

Correlated subqueries are easy to write but costly at scale. Always check the execution plan before assuming a query is "fast enough", and reach for aggregated JOINs or CTEs when a subquery correlates on a large table.
