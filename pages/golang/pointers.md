---
title: Pointers
description: Detailed explanation of Golang pointers
published: true
date: 2023-09-12T20:48:53.267Z
tags: golang, pointers
editor: markdown
dateCreated: 2023-09-04T15:02:56.627Z
---

# Pointers

In Go (Golang) programming language, a pointer is a variable that stores the memory address of another variable. Pointers allow you to indirectly read or modify the value of the referenced variable without necessarily knowing its name.

You can declare a pointer type using the `*` symbol along with the associated type. For example, a pointer to an integer value looks like this:

```go
var p *int
```

You can create a pointer from an existing variable using the `&` operator:

```go
i := 39
p = &i
```

Alternatively, you can use the `new` built-in function to create a pointer initialized with the default value for the pointer type:

```go
i := new(int)
```

To access the value pointed to by a pointer, you can use the `*` operator:

```go
name := "test"
p := &name
original := *p
```

The default value of a pointer is `nil`. This means that if an assignment is omitted, the pointer will contain a `nil` value, which can lead to a runtime panic if you attempt to dereference it.