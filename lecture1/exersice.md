### 1. For this course, you need to be using a Unix shell like Bash or ZSH. If you are on Linux or macOS, you don’t have to do anything special. If you are on Windows, you need to make sure you are not running cmd.exe or PowerShell; you can use Windows Subsystem for Linux or a Linux virtual machine to use Unix-style command-line tools. To make sure you’re running an appropriate shell, you can try the command echo $SHELL. If it says something like /bin/bash or /usr/bin/zsh, that means you’re running the right program.

```
(base) sirjan@sirjan-VirtualBox:~$ echo $SHELL 
/bin/bash
```

### 2. What does the -l flag to ls do? Run ls -l / and examine the output. What do the first 10 characters of each line mean? (Hint: man ls)

```
(base) sirjan@sirjan-VirtualBox:~$ ls -l
total 52
drwxr-xr-x 38 sirjan sirjan 4096 Jun  9 10:12 Desktop
drwxr-xr-x  2 sirjan sirjan 4096 Sep 27  2025 Documents
drwxr-xr-x  2 sirjan sirjan 4096 Jun  1 18:29 Downloads
drwxrwxr-x  3 sirjan sirjan 4096 Jan 22 21:20 IdeaProjects
drwxrwxr-x 18 sirjan sirjan 4096 Apr 14 20:39 miniconda3
drwxr-xr-x  2 sirjan sirjan 4096 Sep 27  2025 Music
drwxr-xr-x  2 sirjan sirjan 4096 Sep 27  2025 Pictures
drwxr-xr-x  2 sirjan sirjan 4096 Sep 27  2025 Public
drwxrwxr-x  4 sirjan sirjan 4096 Apr 14 20:47 PyCharmMiscProject
drwxrwxr-x  3 sirjan sirjan 4096 Sep 27  2025 repos
drwx------  7 sirjan sirjan 4096 Apr 14 20:47 snap
drwxr-xr-x  2 sirjan sirjan 4096 Sep 27  2025 Templates
drwxr-xr-x  2 sirjan sirjan 4096 Sep 27  2025 Videos
```

### 3. In the command find ~/Downloads -type f -name "*.zip" -mtime +30, the *.zip is a “glob”. What is a glob? Create a test directory with some files and experiment with patterns like ls *.txt, ls file?.txt, and ls {a,b,c}.txt. See Pattern Matching in the Bash manual.

A glob is pattern that is decipher by the shell and not the command. albeit similar to Regex expressions it is more simpler and crude and mainly utlizes '*', '?' and '{}' characters.
- ls *.txt. 
```
Output: 
    ls file?.txt, and ls {a,b,c}.txt
```

- ls file?.txt 
```
Output:
    (base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture1$ ls file?.txt 
    file1.txt
```

- ls {a,b,c}.txt
```
Output:
    (base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture1$ ls {a,b,c}.txt
    ls: cannot access 'b.txt': No such file or directory
    ls: cannot access 'c.txt': No such file or directory
    a.txt
```

### 4. What’s the difference between 'single quotes', "double quotes", and `$'ANSI quotes'?` Write a command that echoes a string containing a literal `$`, `a` `!`, and a newline character.
All are different quoting methodologies with difference in how the system interprets them.  Strings delimited with ' are literal strings and will not expand variables, perform command substitution, or process escape sequences, whereas " delimited strings will.
'''
(base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture1$ echo -e 'hello \n this a new line $'
hello 
 this a new line $
'''

### 5. The shell has three standard streams: stdin (0), stdout (1), and stderr (2). Run ls /nonexistent /tmp and redirect stdout to one file and stderr to another. How would you redirect both to the same file? 
```
(base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture1$ ls /nonexistent /tmp > file1.txt 2>db.txt
```
To redirect to the same file i would use `&>filename`

### 6. $? holds the exit status of the last command (0 = success). && runs the next command only if the previous succeeded; || runs it only if the previous failed. Write a one-liner that creates /tmp/mydir only if it doesn’t already exist.
```
[ -d /tmp/mydir ] || mkdir /tmp/mydir
```

[] runs the test command.

### 7. Why does cd have to be built into the shell itself rather than a standalone program? (Hint: think about what a child process can and cannot affect in its parent.)
So that if the child changes the dir the parent inherits the change in directory because its a shell builtin and the shell changes the directory

### 8. Write a script that takes a filename as an argument ($1) and checks whether the file exists using test -f or [ -f ... ]. It should print different messages depending on whether the file exists.
Refer to check.sh.

### 9. Save the script from the previous exercise to a file (e.g., check.sh). Try running it with ./check.sh somefile. What happens? Now run chmod +x check.sh and try again. Why is this step necessary?
Linux does not provide execution permission by default.

### 10. What happens if you add -x to the set flags in a script? Try it with a simple script and observe the output.


### 11. Write a command that copies a file to a backup with today’s date in the filename (e.g., notes.txt → notes_2026-01-12.txt). (Hint: $(date +%Y-%m-%d)).
```
cp notes.txt notes_$(date +%Y-%m-%d).txt
```

### 12. Modify the flaky test script from the lecture to accept the test command as an argument instead of hardcoding cargo test my_test. (Hint: $1 or $@). See Special Parameters.

testScript.sh


### 13. Use pipes to find the 5 most common file extensions in your home directory. (Hint: combine find, grep or sed or awk, sort, uniq -c, and head.)


