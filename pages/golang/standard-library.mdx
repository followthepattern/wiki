---
title: Standard library
description: Details about the golang standard library
published: true
date: 2023-11-13T08:08:15.593Z
tags: golang, standard, library
editor: markdown
dateCreated: 2023-09-04T15:49:10.240Z
---

## Standard library

The Go standard library is a curated collection of packages that complement the language, making it faster and more efficient to use. Standard library packages are part of the default Go installation, so there is no need to install them separately. This collection provides solutions to common problems, such as file reading and writing, standard input/output handling, string conversion, template handling, and concurrency management. After installing the Go package, it will be available in the `/usr/local/go/src` directory.

You can access its source code on [GitHub here](https://github.com/golang/go/tree/master/src).

## Useful packages
The following list summarizes the most commonly used packages in the standard library, not necessarily in order of importance.

- **fmt**
- **errors**
- **json**
- **os**
- **io**
- **log**
- **time**
- **strconv**
- **sync**
- **context**
- **net**
- **regexp**
- **flag**

### [fmt](https://pkg.go.dev/fmt)
The `fmt` package implements I/O formatting following the example of C's `printf` and `scanf`.

The following code snippet contains some examples of using `fmt` functions, which you can try [here](https://goplay.followthepattern.net/snippet/GPVAn0TXK_8).

```go
package main

import (
	"fmt"
)

func main() {
	// Println writes to standard output.
	fmt.Println("Follow The Pattern")   // Follow The Pattern
	fmt.Println("Follow", 0, "Pattern") // Follow 0 Pattern

	fmt.Print("Follow The Pattern") // Prints to standard output without newline
	fmt.Print(" Follow The Pattern\n")

	localStruct := struct {
		Count int
		Title string
	}{1, "FP"}

	fmt.Printf("Integer: %d, String: %s, type of literal: %T, Value: %v, Struct type: %T \n",
		1, "hello", int64(1), localStruct, localStruct)
	// Integer: 1, String: hello, type of literal: int64, Value: {1 FP}, Struct type: struct { Count int; Title string } ß

	// prints literal percent sign, consume no value
	fmt.Printf("Percent sign: %%\n") // %

	the := 0
	text := fmt.Sprint("Follow", the, "Pattern") // stores the string into variable, without white space
	fmt.Println(text)                            // Follow0Pattern

	text = fmt.Sprintf("Integer: %d, String: %s, Value type: %T, Value: %v", 1, "hello", int64(1), localStruct)
	fmt.Println(text) // Integer: 1, String: hello, Value type: int64, Value: {1 FP}
}
```

The `os.File` type implements the `io.Writer` interface, allowing it to be used together with `fmt` functions. It will behave the same way as if you were writing to the console.

```go
package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	localStruct := struct {
		Count int
		Title string
	}{1, "FP"}

	// fmt.Fprint can print to any interface that implements io.Writer like os.File
	file, err := os.Create("./dump.txt")
	if err != nil {
		log.Fatal(err) // exit from the application while it prints the error
	}

	fmt.Fprintln(file, "Follow The Pattern")
	fmt.Fprintln(file, "Follow", 0, "Pattern")
	fmt.Fprintf(file, "Integer: %d, String: %s, type of literal: %T, Value: %v, Struct Type: %T \n",
		1, "hello", int64(1), localStruct, localStruct)

	// File content
	/*
		Follow The Pattern
		Follow 0 Pattern
		Integer: 1, String: hello, type of literal: int64, Value: {1 FP}, Struct Type: struct { Count int; Title string }

	*/

	err = file.Close()
	if err != nil {
		log.Fatal(err)
	}
}
```

You can run the code in your browser [here](https://goplay.followthepattern.net/snippet/G27eNx7jjPG).

### [errors](https://pkg.go.dev/errors)

The `errors` package implements functions necessary for handling the `error` interface. The following code snippet provides examples you can try [here](https://goplay.followthepattern.net/snippet/T7kkCNDuojI).

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	err := errors.New("invalid arguments")
	fmt.Println(err.Error()) // invalid arguments

	err = newCustomError("internal server error", 500)
	fmt.Println(err.Error()) // Message: internal server error, Code: 500

	err = fmt.Errorf("bad gateway, code: %d", 502)
	fmt.Println(err.Error()) // bad gateway, code: 502
}

type customError struct {
	message string
	code    int
}

func (c *customError) Error() string {
	return fmt.Sprintf("Message: %s, Code: %d", c.message, c.code)
}

func newCustomError(message string, code int) error {
	return &customError{
		message: message,
		code:    code,
	}
}
```

### [json](https://pkg.go.dev/encoding/json)

The `encoding/json` package implements JSON encoding and decoding functions following the [RFC 7159](https://www.rfc-editor.org/rfc/rfc7159) standard.

The following code snippet demonstrates converting a list of `structs` to JSON format:

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
)

func main() {
	type Car struct {
		Name, Model, Color string
		WeightInKg         int
	}

	cars := []Car{{
		Name:       "Toyota",
		Model:      "Corolla",
		Color:      "Grey",
		WeightInKg: 1160,
	}, {
		Name:       "Kia",
		Model:      "C'eed",
		Color:      "Blue",
		WeightInKg: 1425,
	}, {
		Name:       "Opel",
		Model:      "Astra",
		Color:      "Beige",
		WeightInKg: 1180,
	}}
	bytes, err := json.Marshal(cars)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(bytes))
}
```

After formatting, the console output will look like this:

```json
[
   {
      "Name":"Toyota",
      "Model":"Corolla",
      "Color":"Grey",
      "WeightInKg":1160
   },
   {
      "Name":"Kia",
      "Model":"C'eed",
      "Color":"Blue",
      "WeightInKg":1425
   },
   {
      "Name":"Opel",
      "Model":"Astra",
      "Color":"Beige",
      "WeightInKg":1180
   }
]
```

You can run the code snippet in your browser at this [link](https://goplay.followthepattern.net/snippet/8JukI6RBJsc).

To read JSON into a `struct` value in Go, you can use the `Unmarshal` function. It's important to pass the `target` value as a reference because any changes made to the value within the method must also be reflected outside the function.

Here's the code in English with the Markdown format:

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
)

func main() {
	var jsonBlob = []byte(`[
	{"Name": "John", "Age": 18},
	{"Name": "James", "Age": 32},
	{"Name": "David", "Age": 26}
]`)
	type User struct {
		Name string
		Age  int
	}
	var users []User
	err := json.Unmarshal(jsonBlob, &users)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%+v", users)
}
```

You can run it in a browser [here](https://goplay.followthepattern.net/snippet/ZwvKrnCKQn4).

### [os](https://pkg.go.dev/os)

The `os` package contains platform-independent functions for interacting with operating system functionalities. The following code snippets provide a few simple examples of using environment variables.

```go
package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	// Read an environment variable by key
	path := os.Getenv("PATH")
	fmt.Println(path)

	// Set environment variables by key
	os.Setenv("DB_USERNAME", "my_db_username")
	os.Setenv("DB_PASSWORD", "my_secret_db_password")

	// Retrieve and print environment variables
	dbUsername := os.Getenv("DB_USERNAME")
	fmt.Println(dbUsername)

	dbPassword := os.Getenv("DB_PASSWORD")
	fmt.Println(dbPassword)

	// Get the executable path
	executablePath, err := os.Executable()
	if err != nil {
		log.Fatal(err)
	}

	// Print the executable path
	fmt.Println(executablePath)
}
```

You can try out this code snippet [here](https://goplay.followthepattern.net/snippet/XjjnslCALLK).

```go
package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	file, err := os.Create("./dump.txt") // Create a new file
	if err != nil {
		log.Fatal(err) // Exit the application while printing the error
	}

	fmt.Fprintln(file, "Follow The Pattern") // Write to the file
	err = file.Close()
	if err != nil {
		log.Fatal(err)
	}

	file, err = os.Open("./dump.txt") // Open the created file
	if err != nil {
		log.Fatal(err)
	}

	data := make([]byte, 50)
	count, err := file.Read(data) // Read from the file
	if err != nil {
		log.Fatal(err)
	}

	text := data[:count]
	fmt.Printf("count: %d characters: %q string: %s", count, text, text) // Print the file content
}
```

You can run the code in your browser [here](https://goplay.followthepattern.net/snippet/WjPLqDMq9Bb).

### [io](https://pkg.go.dev/io)

The `io` package provides basic interfaces for I/O primitives, such as reading and writing interfaces. Since these are low-level implementations, they are not inherently safe for concurrent execution.

The code snippet below demonstrates the use of `io.Reader` and `io.Writer` and can be tried out [here](https://goplay.followthepattern.net/snippet/bs9__lzECCD).

```go
package main

import (
	"fmt"
	"io"
	"log"
	"strings"
)

func main() {
	// io.Reader implements the standard Read method
	var reader io.Reader = strings.NewReader("Follow The Pattern makes learning efficient!")
	b, err := io.ReadAll(reader)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(b))

	stringBuilder := strings.Builder{}

	// io.Writer implements the standard Write method
	var writer io.Writer = &stringBuilder

	fmt.Fprint(writer, "Follow The Pattern")

	fmt.Println(stringBuilder.String())
}
```

### [slog](https://go.dev/blog/slog)

The slog library in Golang is a structured logging library, offering a way to log messages in a structured form.

```go
package main

import (
	"log/slog"
	"os"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))

	ctxLogger := logger.With("Company", "FollowThePattern")
	// {"time":"2009-11-10T23:00:00Z","level":"INFO","msg":"Learning started!","Company":"FollowThePattern"}

	ctxLogger.Info("Learning started!")
}
```

You can run the code in your browser [here](https://goplay.followthepattern.net/snippet/yKPM_hwIQPV).

### [time](https://pkg.go.dev/time)

The `time` package provides functionalities for measuring and displaying time.

The code snippet below demonstrates various examples of using the `time` package, and you can try it out [here](https://goplay.followthepattern.net/snippet/xLH0YjKpgnx).

```go
package main

import (
	"fmt"
	"log"
	"time"
)

func main() {
	now := time.Now()
	fmt.Println(now) // prints the current time

	t := time.Date(2023, time.January, 3, 14, 26, 23, 0, time.UTC)
	fmt.Println(t) // 2023-01-03 14:26:23 +0000 UTC

	start := time.Now()         // start time
	time.Sleep(time.Second * 2) // Sleeps for 2 seconds
	end := time.Now()           // end time

	duration := end.Sub(start) // calculates the time difference between start and end
	fmt.Println(duration)      // prints the time difference

	t1 := time.Date(2020, time.October, 11, 9, 54, 32, 0, time.UTC)
	t2 := t1.Add(time.Minute * 3) // Adds 3 minutes to t1

	if t1.Before(t2) {
		fmt.Println("t1 is before t2")
	}

	t1Str := t1.Format(time.RFC822Z) // 11 Oct 20 09:54 +0000
	fmt.Println(t1Str)

	t1Parsed, err := time.Parse(time.RFC1123, "Sun, 11 Oct 2020 09:54:32 UTC")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(t1Parsed)
}
```

### [strconv](https://pkg.go.dev/strconv)

The `strconv` package contains conversion functions that allow you to convert basic types to strings and vice versa. You can try it out [here](https://goplay.followthepattern.net/snippet/cy-QnbH6WCb).

```go
package main

import (
	"fmt"
	"log"
	"strconv"
)

func main() {
	b, err := strconv.ParseBool("true")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("type: %T\n", b) // type: bool

	f, err := strconv.ParseFloat("3.1415", 64)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("type: %T\n", f) // type: float64

	i, err := strconv.ParseInt("-10", 10, 64)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("type: %T\n", i) // type: int64

	u, err := strconv.ParseUint("42", 10, 64)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("type: %T\n", u) // type: uint64

	sb := strconv.FormatBool(true)
	fmt.Printf("%T, %v\n", sb, sb) // string, true

	sf := strconv.FormatFloat(3.141592653589793238, 'E', -1, 64)
	fmt.Printf("%T, %v\n", sf, sf) // string, 3.141592653589793E+00

	si := strconv.FormatInt(34, 10)
	fmt.Printf("%T, %v\n", si, si) // string, 34

	sui := strconv.FormatUint(uint64(29), 10)
	fmt.Printf("%T, %v\n", sui, sui) // string, 29
}
```

### [sync](https://pkg.go.dev/sync)

The `sync` package implements basic synchronization primitives such as `Once`, `WaitGroup`, and `Mutex`. When developing higher-level synchronization, it's recommended to use `channel` types. Concurrency, parallelism, and synchronization are complex topics. The code snippets below provide brief examples of the primitives provided by Go, but for a deeper understanding, consider the [Go courses](https://followthepattern.net/learn/go) offered by Follow The Pattern.

Here's a simple example of using `WaitGroup`:

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)

	go func() {
		fmt.Println("Follow The Pattern makes your learning effective!")
		time.Sleep(2 * time.Second)
		wg.Done() // subtracts 1 from the WaitGroup counter
	}()
	wg.Wait() // waits for the WaitGroup counter to become zero
	fmt.Println("Program finished!")
}
```

You can run the above code in your browser [here](https://goplay.followthepattern.net/snippet/0k2ZIpg_l0p).

Here's an example demonstrating the use of `sync.Mutex`:

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	type Counter struct {
		sync.Mutex
		value int
	}

	counter := Counter{}
	for i := 0; i < 10; i++ {
		go func(i int) {
			counter.Lock() // lock the counter to modify it safely
			counter.value++
			defer counter.Unlock() // unlock the counter
		}(i)
	}
	time.Sleep(time.Second)
	counter.Lock() // lock the counter to print its value
	defer counter.Unlock() // unlock the counter when the execution is finished

	fmt.Println("Counter:", counter.value)
}
```

You can run the above code in your browser [here](https://goplay.followthepattern.net/snippet/eMgB5ZaO2jV)

### [context](https://pkg.go.dev/context)

The `context` package defines the `Context` type, which carries deadlines, cancellation signals, and other request-scoped values across API boundaries and between processes.

This package introduces the `Context` type, which can carry variables related to a specific request, expiration times, or signals for indicating the completion of execution.

By associating values with the `Context` type, it is easy to express whether a specific call has a successful authentication. The following example demonstrates how to add a variable to the `Context` variable that stores information about the logged-in user:

```go
package main

import (
	"context"
	"fmt"
)

func main() {
	type ContextKey string

	user := struct {
		Name string
	}{
		Name: "John",
	}

	userContextKey := ContextKey("User")
	ctx := context.WithValue(context.Background(), userContextKey, user)

	if v := ctx.Value(userContextKey); v != nil {
		fmt.Println("Found value:", v)
		return
	}
}
```

You can run the code snippet above [here](https://goplay.followthepattern.net/snippet/sIXst1kglTV).

A `Context` variable can be created along with a `cancel` function, which can be used to signal the termination of a request:

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	// The cancel function will cancel the context
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		fmt.Println("Waiting for context cancellation in the goroutine...")
		<-ctx.Done() // The function continues as soon as the context is cancelled
	}()

	time.Sleep(time.Second) // The main goroutine sleeps for a second
	fmt.Println("Cancelling the context")
	cancel() // Cancels the context
}
```

You can run the code snippet above [here](https://goplay.followthepattern.net/snippet/HRZyohQMawu).

The `Context` type can also be used to define deadlines, signaling the termination of a call:

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx := context.Background()

	deadline := time.Now().Add(time.Second * 1)
	ctx, cancel := context.WithDeadline(ctx, deadline)

	// The ctx will be expired, but it is a good practice to call its
	// cancellation function in any case to avoid keeping its parent alive longer than necessary.
	defer cancel()

	fmt.Println("Waiting for the deadline")
	// Blocks until it receives a value
	// from the context's channel
	<-ctx.Done()
	fmt.Println(ctx.Err())
}
```

You can run the code snippet above [here](https://goplay.followthepattern.net/snippet/dzWcQ9NkeWk).

A `Context` variable can also be created with a predefined timeout value, which signals the termination of a call. The difference from the previous example is that you specify a time interval rather than a specific time:

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx := context.Background()

	ctx, cancel := context.WithTimeout(ctx, time.Second*1) // Sets the timeout to 1 second
	defer cancel()

	select {
	case <-time.After(10 * time.Second):
		fmt.Println("Overslept")
	case <-ctx.Done():
		fmt.Println(ctx.Err()) // Prints "context deadline exceeded"
	}
}
```

You can run the code snippet above [here](https://goplay.followthepattern.net/snippet/h0BHfqBk1Id).

### [net](https://pkg.go.dev/net)

The `net` package implements various network I/O interfaces, such as TCP/IP. In the following code snippet, you can find an example of running a small web service using the `net/http` package. You can gain a deeper understanding of this package by following the Go courses provided by Follow The Pattern:

```go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello Follow The Pattern!")
	})
	fmt.Println("Server running!")

	log.Fatal(http.ListenAndServe(":8081", nil))
}
```

### [regexp](https://pkg.go.dev/regexp)

The `regexp` package implements regular expression search. Its syntax follows the pattern of Perl and Python, more specifically the [re2syntax](https://github.com/google/re2/wiki/Syntax) format.

In the following code snippet, you can see an email regex validation that aims to filter out incorrectly formatted email addresses:

```go
package main

import (
	"fmt"
	"regexp"
)

func main() {
	// Build a regular expression variable to verify the given string
	var emailRegexp *regexp.Regexp = regexp.MustCompile(`^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`)

	fmt.Println("Checking valid regexps...")

	emails := []string{
		"info@followthepattern.net",
		"@followthepattern.net",
		"info@followthepattern",
	}
	for _, mail := range emails {
		// MatchString returns true if the given string passes the match with the regexp
		fmt.Println(mail, emailRegexp.MatchString(mail))
	}
}
```

You can run the above example [here](https://goplay.followthepattern.net/snippet/UJvT_tFE3XD).

In this code snippet, we extract values from regexp groups, where a specific format string needs to be parsed to extract valid characters:

```go
package main

import (
	"fmt"
	"regexp"
)

func main() {
	// Verification code has three elements that need to be parsed
	verificationCode := "e035f36e-b45f4b89a31e-58e1b05706e3"

	// Matching regexp
	regexp := regexp.MustCompile(`(?P<part1>[a-z0-9]+)-(?P<part2>[a-z0-9]+)-(?P<part3>[a-z0-9]+)`)
	fmt.Println("Is Match:", regexp.MatchString(verificationCode))

	// Read group values into an array
	matches := regexp.FindStringSubmatch(verificationCode)

	// Find the index of the group by group name
	part2 := regexp.SubexpIndex("part2")

	fmt.Println("Part2 Index:", part2)
	fmt.Println(matches[part2])
}
```

You can run this code snippet [here](https://goplay.followthepattern.net/snippet/RkxshCC-lLm).

### [flag](https://pkg.go.dev/flag)

The `flag` package implements command-line flag parsing.

```go
package main

import (
	"flag"
	"fmt"
)

func main() {
	filepath := flag.String("filepath", "default_value", "filepath of the input data")
	flag.Parse()

	fmt.Println(*filepath)
}
```

In the above code snippet, it prints the value of the `--filepath` flag to the console. You can specify the `--filepath` flag and its value when running the program from the command line.