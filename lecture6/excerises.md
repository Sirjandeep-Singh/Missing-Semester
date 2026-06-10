# Packaging and Shipping Code
### 1. Save your environment with printenv to a file, create a venv, activate it, printenv to another file and diff before.txt after.txt. What changed in the environment? Why does the shell prefer the venv? (Hint: look at $PATH before and after activation.) Run which deactivate and reason about what the deactivate bash function is doing.
```
(myenv) (base) sirjan@sirjan-VirtualBox:~/Desktop/Missing-Semester/temp$ diff before.txt after.txt
31a32
> VIRTUAL_ENV=/home/sirjan/Desktop/Missing-Semester/temp/myenv
51a53
> VIRTUAL_ENV_PROMPT=myenv
53a56
> PS1=(myenv) (base) \[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ 
57c60
< PATH=/home/sirjan/gems/bin:/home/sirjan/miniconda3/bin:/home/sirjan/miniconda3/condabin:/home/sirjan/.nvm/versions/node/v22.20.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
---
> PATH=/home/sirjan/Desktop/Missing-Semester/temp/myenv/bin:/home/sirjan/gems/bin:/home/sirjan/miniconda3/bin:/home/sirjan/miniconda3/condabin:/home/sirjan/.nvm/versions/node/v22.20.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
61d63
< _=/usr/bin/printenv
62a65
> _=/usr/bin/printenv
```

### 2. Create a Python package with a pyproject.toml and install it in a virtual environment. Create a lockfile and inspect it.
refer to ./myPackage

### 3. Make a website using GitHub Pages. Extra (non-)credit: configure it with a custom domain.
refer to my github.