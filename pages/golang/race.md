---
title: Race
description: Explains what is race in Golang
published: true
date: 2023-10-21T19:13:57.528Z
tags: golang, go, race
editor: markdown
dateCreated: 2023-09-15T23:17:09.949Z
---

# Race Condition

A **race condition** is an error that can occur in concurrently running programs when two or more independently executing processess have access to a shared resource, and at least one of them modifies it without proper synchronization, resulting in unexpected behavior. The outcome of the program depends on the timing of a process execution, making it unpredictable and difficult to reproduce potential issues. For example, improper use of a **mutex** can lead to such an error.

## Race Detector

The Go CLI comes with a very useful feature: it can detect whether a given program has **race condition** errors.

Using it is straightforward; you can run the Go CLI with the *-race* flag to detect races:

```bash
go run -race main.go
```

**Example of a Race Condition Error:**

```go
type Counter struct {
	sync.Mutex
	value int
}

func main() {
	counter := Counter{}
	for i := 0; i < 10; i++ {
		go func(i int) {
			// counter.Lock()
			counter.value++
			// defer counter.Unlock()
		}(i)
	}
	time.Sleep(time.Second)
	counter.Lock()
	defer counter.Unlock()

	fmt.Println(counter.value)
}
```

In the above code snippet, the `Lock` and `Unlock` methods are commented out, resulting in a **race condition** error. Since the anonymous functions running on different goroutines can potentially modify the counter's value nearly simultaneously, it leads to erroneous behavior, and the counter won't show the actual result.