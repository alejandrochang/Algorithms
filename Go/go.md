# Go 
Go is an open source prograaming language that makes it easy to build simple, reliable and efficient software.

# Terminal

go /command

go mod init your.import/path (if you can't find go functions/helpers)

# Go Fundamentals

1. How do we run the code in our project?
2. What does 'package main' mean?
3. What does 'import "fmt" mean? 
4. Whats that 'func'?
5. How is the main.go file organized?

Answers:
1. 
go run -> :file (Compiles a bunch of go source code files)
go build -> (Compiles the program but doesn't execute it) -> creates executable file
go fmt -> Formats all the code in each file in the current directory
go install -? Compiles and "installs" a package
go get -> Downloads the raw source code of someone else's
go test -? Runs any tests associated with the current project

2. A package main contain multiple files. If all files belong to a specific file they will also have the specific package name at the top.

Two 2 Types of Packages
- Executable - Generates a file that we can run (must have a function called main)
- Reusable (Code used as helpers - good place to place reusable logic)

Packages Documentation:
https://pkg.go.dev/std