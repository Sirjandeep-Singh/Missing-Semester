### 1. For this course, you need to be using a Unix shell like Bash or ZSH. If you are on Linux or macOS, you don’t have to do anything special. If you are on Windows, you need to make
### sure you are not running cmd.exe or PowerShell; you can use Windows Subsystem for Linux or a Linux virtual machine to use Unix-style command-line tools. To make sure you’re running an ### appropriate shell, you can try the command echo $SHELL. If it says something like /bin/bash or /usr/bin/zsh, that means you’re running the right program.

`(base) sirjan@sirjan-VirtualBox:~$ echo $SHELL 
/bin/bash`

### 2. What does the -l flag to ls do? Run ls -l / and examine the output. What do the first 10 characters of each line mean? (Hint: man ls)

`(base) sirjan@sirjan-VirtualBox:~$ ls -l
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
drwxr-xr-x  2 sirjan sirjan 4096 Sep 27  2025 Videos`

### 3. In the command find ~/Downloads -type f -name "*.zip" -mtime +30, the *.zip is a “glob”. What is a glob? Create a test directory with some files and experiment with patterns like ls *.txt, ls file?.txt, and ls {a,b,c}.txt. See Pattern Matching in the Bash manual.

A glob is pattern that is decipher by the shell and not the command. albeit similar to Regex expressions it is more simpler and crude and mainly utlizes '*', '?' and '{}' characters.
- ls *.txt. 
`Output: 
    ls file?.txt, and ls {a,b,c}.txt
`

- ls file?.txt \
`Output: \
    (base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture1$ ls file?.txt 
    file1.txt
`

- ls {a,b,c}.txt
`Output:
    (base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture1$ ls {a,b,c}.txt
    ls: cannot access 'b.txt': No such file or directory
    ls: cannot access 'c.txt': No such file or directory
    a.txt
`

