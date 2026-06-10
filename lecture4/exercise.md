# Debugging
### 1. Install rr and use reverse debugging to find a corruption bug. Save this program as corruption.c:
### 2. Debug a memory error with AddressSanitizer. Save this as uaf.c:
### 3. Use strace (Linux) or dtruss (macOS) to trace the system calls made by a command like ls -l. What system calls is it making? Try tracing a more complex program and see what files it opens.
### 4. Use an LLM to help debug a cryptic error message. Try copying a compiler error (especially from C++ templates or Rust) and asking for an explanation and fix. Try putting some of the output from strace or the address sanitizer into it.
# Profiling
### 1. Use perf stat to get basic performance statistics for a program of your choice. What do the different counters mean?
### 2. Profile with perf record. Save this as slow.c:
### 3. Use hyperfine to benchmark two different implementations of the same task (e.g., find vs fd, grep vs ripgrep, or two versions of your own code).
### 4. Use htop to monitor your system while running a resource-intensive program.
