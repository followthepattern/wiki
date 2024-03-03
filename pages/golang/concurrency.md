---
title: Concurrency
description: Explanation of concurrency
published: true
date: 2023-10-21T08:30:27.475Z
tags: golang, concurrency, go
editor: markdown
dateCreated: 2023-09-15T21:24:48.483Z
---

# What is Concurrency?

**Concurrency** is independently executing processes.

While these processes are often functions, they aren't always. **Concurrency** doesn't inherently imply parallelism because there's no guarantee that these tasks will run simultaneously. For instance, an operating system on a computer with a single processor can manage multiple processes without them being parallel, like with display or input device management.

When multiple processors are available, these independent tasks can be run in parallel. In such situations, we refer to it as a **concurrent and parallel** application.

Golang provides built-in language features and fundamental types that simplify the development of **concurrent** applications. These tools can be used both succinctly and easily, such as:

- goroutine
- channel
- select
- sync package