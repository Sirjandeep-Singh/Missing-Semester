# Arguments and Globs
### 1. You might see commands like cmd --flag -- --notaflag. The -- is a special argument that tells the program to stop parsing flags. Everything after -- is treated as a positional argument. Why might this be useful? Try running touch -- -myfile and then removing it without --.
With -- No error because -myfile is not treated as an argument. without -- an error occurs.

### 2. Read man ls and write an ls command that lists files in the following manner: Includes all files, including hidden files Sizes are listed in human readable format (e.g. 454M instead of 454279954) Files are ordered by recency Output is colorized A sample output would look like this:
ls -laht

# Return Codes
### 1. Say you have a command that fails rarely. In order to debug it you need to capture its output but it can be time consuming to get a failure run. Write a bash script that runs the following script until it fails and captures its standard output and error streams to files and prints everything at the end. Bonus points if you can also report how many runs it took for the script to fail.
failureTry.sh

# Signals and Job Control
### 1. Start a sleep 10000 job in a terminal, background it with Ctrl-Z and continue its execution with bg. Now use pgrep to find its pid and pkill to kill it without ever typing the pid itself. (Hint: use the -af flags). 
```
(base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture2$ sleep 1000
^Z
[2]+  Stopped                 sleep 1000
(base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture2$ pgrep -af "sleep 1000"
26050 sleep 10000
26085 sleep 1000
(base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/lecture2$ pkill -f "sleep 1000
```

# Terminal Multiplexers
### 1. Follow this tmux tutorial and then learn how to do some basic customizations following these steps.

# Aliases and Dotfiles
### 1. Create an alias dc that resolves to cd for when you type it wrong.
alias dc="cd"

### 2. Run history | awk '{$1="";print substr($0,2)}' | sort | uniq -c | sort -n | tail -n 10 to get your top 10 most used commands and consider writing shorter aliases for them. Note: this works for Bash; if you’re using ZSH, use history 1 instead of just history.
```
alias git log="gl"
alias clear="cl"
alias ls="ls"
alias npx webpack="npw"
alias cd="cd" 
alias git add ="ga" 
alias git commit="gc"
alias git push="gp"
alias code="code" 
alias git status="gs"
```

### 3. Create a folder for your dotfiles and set up version control.

### 6. Test your installation script on a fresh virtual machine.

# Remote Machines (SSH)
### 1. Go to ~/.ssh/ and check if you have a pair of SSH keys there. If not, generate them with ssh-keygen -a 100 -t ed25519. It is recommended that you use a password and use ssh-agent, more info here.
```
(base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester$ cd ~/.ssh/
(base) sirjan@sirjan-VirtualBox:~/.ssh$ ls
authorized_keys  id_ed25519  id_ed25519.pub  known_hosts  known_hosts.old
```
