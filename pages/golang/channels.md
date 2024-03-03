---
title: Channels
description: Detailed explanation of channels
published: true
date: 2023-10-21T14:18:31.175Z
tags: golang, go, channels
editor: markdown
dateCreated: 2023-09-15T22:01:26.381Z
---

# Channels

**Channel** is one of the most important language features in Golang to synchronize concurrent processes. It supports safe communication between **goroutines**, essentially serving as a **queue** for sending data between threads in a predefined order. When data is sent or received via a channel, both the sender and the receiver are synchronized according to the channel's state.

Channels are declared using the `chan` keyword. You can initialize a **channel**, using `make`, similar to initializing a `map` or `slice`.

```go
channel := make(chan Type)
```

Where `Type` can be a built-in type, an interface, or a structure. In some cases, it can even be an `struct{}` (empty struct).

Creating an `int` type *channel*:

```go
channel := make(chan int)
```

## Writing and Reading from a Channel

Data can be sent and received using the `<-` operator. If the arrow (`<-`) appears before the *channel* variable, it indicates data reading: `<-ch`, whereas in other cases, it signifies data sending: `ch <-`. In the following example, a `string` type *channel* is used to exchange messages between *goroutines*, followed by a simple print statement.

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string)

	go func() {
		ch <- "Learn coding more efficiently"
	}()

	fmt.Println(<-ch)
	fmt.Println("Follow The Pattern")
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/p2dfmA_yv3p?v=goprev).

The `ch` *channel* will block the involved goroutines until the respective goroutine plans to use the channel for communication. By default, the channel does not have memory, so all sent data must be read on the receiving end, or else it won't unblock.

```go
func main() {
	ch := make(chan string)

	go func() {
		ch <- "Follow"
		ch <- "The"
		ch <- "Pattern"
	}()

	fmt.Println(<-ch)
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/2ZI1F0Ckyxx?v=goprev).

If not all data is read, a `lock` occurs, as seen in the example below. The main goroutine sends only two values, but the secondary goroutine plans to read further.

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)

	go func() {
		fmt.Println(<-ch)
		fmt.Println(<-ch)
		fmt.Println(<-ch) // invisible lock
		fmt.Println("Finish printing")
	}()
	ch <- "Follow"
	ch <- "The"
	time.Sleep(time.Second * 4) // sleeps for 4 seconds
	// ch <- "Pattern"
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/ffg9WyKAQqx?v=goprev).

If the `lock` occurs in the secondary goroutine, the application might terminate before the deadlock.

Deadlock can also occur when the receiving goroutine expects more data than what is actually sent, as demonstrated in the following example:

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string)

	go func() {
		ch <- "Follow"
		ch <- "The"
		// ch <- "Pattern"
	}()

	fmt.Println(<-ch)
	fmt.Println(<-ch)
	fmt.Println(<-ch) // deadlock
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/fPq2f_sNoIb?v=goprev).

## Buffered Channels
A *buffered channel* is a channel with storage capacity. It works similarly to the default *unbuffered channel* but with the difference that the sender does not have to wait for the data sent to be read on the receiving end until the *channel*'s capacity is filled. The way to create it is similar to creating an `array` type, and you also need to use the built-in `make` function.

```go
channel := make(chan Type, size int)
```

Where `Type` can be a built-in type, an interface, or a structure. In some cases, it can even be an `struct{}` (empty struct). `size` is an integer representing the *channel*'s capacity.

The following example revises a previous code snippet that resulted in a `deadlock`. This time, the *channel*'s capacity will be 1, allowing the sending thread to continue until its capacity is filled.

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string, 1)

	go func() {
		fmt.Println(<-ch)
		fmt.Println(<-ch)
	}()

	ch <- "Follow"
	ch <- "The"
	ch <- "Pattern" // channel capacity saves the deadlock
}
```

You can run the above example [here](https://goplay.followthepattern.net/snippet/IK7_iAZdbR1?v=goprev).

However, just because this code snippet won't terminate with an error doesn't mean it's a good design. Not only does data remain unprocessed, but further data sending can still trigger a `deadlock` if it exceeds the *channel*'s capacity. The following code snippet illustrates this scenario:

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string, 1)

	go func() {
		fmt.Println(<-ch)
		fmt.Println(<-ch)
	}()
	ch <- "Follow"
	ch <- "The"
	ch <- "Pattern"
	ch <- "!" // out of the capacity: deadlock
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/B4gEIaWpH8d?v=goprev).

## Directional Channels
The direction of a *channel* can also be specified, making the program safer, as at a given point, the application can either send data or only read data from the *channel* variable. Incorrect data transmission in the wrong direction is not allowed by the compiler, making development more efficient.

*Channel* for reading only:

```go
func readValuesOnly(ch <-chan bool) {
	fmt.Println(<-ch)
}
```

*Channel* for sending only:

```go
func sendValuesOnly(ch chan<- struct{}) {
	ch <- struct{}{}
}
```

An *empty struct* doesn't occupy memory and can be used as a signaling value, for example, to signal the end of processes.

The following code combines the above cases in one example:

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string, 1)

	go messageConsumer(ch) // Casts the bidirectional channel to one directional

	messageSender(ch) // Casts the bidirectional channel to one directional
}

func messageConsumer(ch <-chan string) {
	fmt.Println(<-ch)
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}

func messageSender(ch chan<- string) {
	ch <- "Follow"
	ch <- "The"
	ch <- "Pattern"
}
```

You can run the above example [here](https://goplay.followthepattern.net/snippet/LhNsQrc5Net?v=goprev).

The `ch` variable is a bidirectional *channel*, which is converted into a one-directional channel when passed to the `messageConsumer` and `messageSender` functions. In the `messageConsumer` function, you cannot send data through the `ch` variable, while in the `messageSender` function, you cannot read values from it.

## range

Another useful feature of Golang for controlling concurrent processes is the ability to iterate over *channel* variables, allowing continuous data reading from a specific *channel* until it is closed. To close a *channel*, you should use the `close` function. It's essential to note that once a *channel* is closed, you can no longer send or receive data through it, and attempting to close it again will result in a runtime error.

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int)

	go sender(ch)

	for v := range ch {
		fmt.Println(v)
	}
}

func sender(ch chan<- int) {
	for i := 0; i < 20; i++ {
		ch <- i
	}
	close(ch)
}
```

You can run the above example [here](https://goplay.followthepattern.net/snippet/1g5qTWhEtW9?v=goprev).

In the above example, the `sender` function, running on a *goroutine*, sends values through the `ch` variable using a loop. On the main thread, an iteration occurs over the `ch` channel, printing each value. The last printed value will be the one sent by the loop. After that, the `sender` function takes care of closing the channel, which signals the end of the iteration, and the application terminates without errors.

## Close Channel

Closing a *channel* has its own dangers, such as closing it multiple times or attempting to read or write after it's closed. A *channel* variable does not have a field indicating whether it's closed. You can only determine this through reading from the *channel*, which can tell you if it's still usable.

The following code demonstrates how to do this, similar to checking a type or a map key:

```go
package main

import "fmt"

func main() {
	ch := make(chan string)
	close(ch)

	if value, ok := <-ch; ok {
		fmt.Println(value)
	} else {
		fmt.Println("channel is closed")
	}
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/re61AlfBhVv?v=goprev).

As a general rule, it's advisable for the party sending data to close the *channel*. Closing a *channel* should be done carefully, as working with a closed *channel* can lead to errors. Multiple closures or reading/writing after closure can result in runtime panics.

In the following code snippet, you can see an attempt to close the `ch` channel multiple times, resulting in a panic and application termination:

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int)

	go sender(ch)

	for v := range ch {
		fmt.Println(v)
	}
}

func sender(ch chan<- int) {
	for i := 0; i < 20; i++ {
		ch <- i
	}
	close(ch)
	close(ch) // panic: close of closed channel
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/tFXOpnWPkZ9?v=goprev).

In the following code snippet, it attempts to send a value on a closed *channel*, which results in a panic and application termination:

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int)
	done := make(chan struct{})

	go sender(ch, done)

	for v := range ch {
		fmt.Println(v)
	}
	<-done
}

func sender(ch chan<- int, done chan struct{}) {
	for i := 0; i < 20; i++ {
		ch <- i
	}
	close(ch)
	ch <- 20 // panic: send on closed channel

	done <- struct{}{}
}
```

You can run the above code [here](https://goplay.followthepattern.net/snippet/gNcOGT3CgtU?v=goprev).

## How Channels Work
*Channels* can have various states, and different states can lead to different behaviors during reading, writing, or closing a *channel*. The following table summarizes these states:

|  | Unbuffered (open) | Unbuffered (closed) | Buffered (open) | Buffered (closed) | Nil |
| - | - | - | - | - | - |
| **Reading** | Waits until data is read | Returns the default value | Waits if the buffer is empty | Returns elements in the buffer or the default value if empty | **Lock** |
| **Writing** | Waits until the value is read on the receiving end | **Panic** | Waits if the buffer is full | **Panic** | **Lock** |
| **Closing** | Closes without error | **Panic** | Closes but leaves unread elements | **Panic** | **Panic**|

- **Unbuffered (open)**: An unbuffered *channel* that is still open.
- **Unbuffered (closed)**: An unbuffered *channel* that is closed.
- **Buffered (open)**: A buffered *channel* that is still open.
- **Buffered (closed)**: A buffered *channel* that is closed.
- **Nil**: A *nil channel*.

Understanding these states and behaviors is crucial for using channels effectively in Go.