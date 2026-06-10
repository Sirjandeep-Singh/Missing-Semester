# Git and Github (VCS)
### 1. If you don’t have any past experience with Git, either try reading the first couple chapters of Pro Git or go through a tutorial like Learn Git Branching. As you’re working through it, relate Git commands to the data model.
### 2. Practice resolving merge conflicts by simulating a collaborative scenario:
- Create a new repository with git init and create a file called recipe.txt with a few lines (e.g., a simple recipe).
- Commit it, then create two branches: git branch salty and git branch sweet.
- In the salty branch, modify a line (e.g., change “1 cup sugar” to “1 cup salt”) and commit.
- In the sweet branch, modify the same line differently (e.g., change “1 cup sugar” to “2 cups sugar”) and commit.
- Now switch to master and try git merge salty, then git merge sweet. What happens? Look at the contents of recipe.txt - what do the <<<<<<<, =======, and >>>>>>> markers mean?
- Use git log --graph --oneline to visualize the merge history you just created.
