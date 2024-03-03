---
title: Functions
description: All details about Golang functions
published: true
date: 2023-09-29T20:40:28.537Z
tags: golang, go, functions, method
editor: markdown
dateCreated: 2023-09-04T14:58:06.457Z
---

# Function
In Go (Golang), a function is a self-contained block of code that performs a specific task or set of tasks, much like in many other programming languages. Functions are values; they can be stored in a variable and called later.

You can categorize functions in Go into three main categories:

- Functions (Function)
- Anonymous functions (Closures)
- Methods (Method)

## Function

Functions are declared using the `func` keyword, followed by the function name, a list of arguments, optional return type or types, and a function body enclosed in curly braces.

Every Go program has at least one such function, which is the `main` function, that serves an entry point to the program.

General syntax

```go
func [FUNCTION NAME] ([ARGUMENTS...]) ([RETURN VALUE TYPES...]) {
 // code here...
}
```
You can define any number of function arguments and return values. Both are optional, as you can see in the following examples.

```go
func main() {
    fmt.Println("Hello World!")
}
```
In the code snippet above, you can see the default `main` function, which has no arguments and doesn't have a single return value, which is a `void` function.

An example for multiple arguments

```go
func Add(a int, b int) int {
    return a + b
}

func main() {
    add := Add
    fmt.Println(add(1, 2))
}
```
Function definition within another function:

```go
func main() {
    add := func(a int, b int) int {
        return a + b
    }

    fmt.Println(add(1, 2))
}
```
Function with multiple return values:

```go
func GetUserByID(id int) (User, error) {
    // ...
}
```

It is possible to declare *"named"* return values when defining the function. This allows you to provide names for return value types that can be referenced from the function body.

```go
func getItem(name string) (value *string, ok bool) {
    value = nil
    ok = false

    return // not necessary to use values here
}
```

## Closure and Anonymous Function
A *closure* is an instance of a function, while an anonymous function is a function definition that does not require a name. In fact, to implement a regular *closure*, you need to use an anonymous function, so the two definitions are closely related. Such functions can only be created within other functions and can sometimes be passed around as variables.

General syntax

```go
func ([ARGUMENTS...]) ([RETURN VALUE TYPES...]) {
    // ...
}([arguments...])
```

Simple example:

```go
func main() {
    func() {
        fmt.Println("Hello Follow The Pattern!")
    }()
}
```
In the code snippet above, you can see an anonymous function without parameters and a return values.

In the next example, the anonymous function receives a `string` and returns with an `int`, the length of the given `string`.

```go
func main() {
    length := func(a string) int {
        return len(a)
    }("Follow")
}
```

You can return with a function (a closure)

```go
func main() {
    nextNumber := GetSequence()
    fmt.Println(nextNumber())
    fmt.Println(nextNumber())
    fmt.Println(nextNumber())
    fmt.Println(nextNumber())
}

func GetSequence() func() int {
    i := 0
    // closure
    return func() int {
        i++
        return i
    }
}
```
The `GetSequence` function in Go returns another function (a closure) that generates a sequence of increasing numbers starting from 1. When you call the returned function multiple times, it increments and returns the next number in the sequence. The `main` function demonstrates this by calling the returned function four times and printing the results, resulting in the output of 2, 3, 4, and 5.

It's worth mentioning that the `i` variable will be in the scope of the anonymous function, as demonstrated in the following example:

```go
func Run() {
    nextNumber := GetSequence()
    fmt.Println(nextNumber())
    fmt.Println(nextNumber())
    fmt.Println(nextNumber())
    fmt.Println(nextNumber())

    nextNumber2 := GetSequence()
    fmt.Println(nextNumber2())
    fmt.Println(nextNumber2())
    fmt.Println(nextNumber2())
    fmt.Println(nextNumber2())
}

func GetSequence() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}
```
The `nextNumber2` function starts a new indexing, demonstrating that `i` does not persist within the scope of `GetSequence`.

Anonymous functions can also return multiple values and accept multiple parameters, making them almost equivalent to the first function category.

```go
func (a int, b string, c bool) (string, int, bool) {
    return b, a, c
}(1, "follow", true)
```

## Method
A function bound to a type. It is very similar to the first function category; the only difference is that a method has a *receiver* argument, which provides access to the variable whose type the function is defined on.

General syntax

```go
func ([RECEIVER NAME] Type) [METHOD NAME]([ARGUMENTS...])([RETURN TYPES...]){
    // Code
}
```

The following examples show how to create methods:

```go
type Vertex struct {
    X float64 `json:"x"`
    Y float64 `json:"y"`
    Z float64 `json:"z"`
}

func (v Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y + v.Z*v.Z)
}

func main() {
    v := Vertex{1, 2, 3}
    fmt.Println(v.Abs())
}
```
You can access the values of the *receiver* using `.`. The *receiver* type can also be a pointer, allowing modification of the *receiver*'s fields. However, if the pointer is `nil`, it will result in an error.

```go
type Vertex struct {
    X float64 `json:"x"`
    Y float64 `json:"y"`
    Z float64 `json:"z"`
}

func (v Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y + v.Z*v.Z)
}

func (v *Vertex) GetX() float64 {
    return v.X
}

func (v *Vertex) Hello() {
    fmt.Println("hello")
}

func main() {
    var v2 *Vertex

    v2.Hello() // this method doesn't read from the receiver
    v2.GetX()  // panic
}
```
Since a method behaves just like a function, it can have multiple arguments and return values as well.