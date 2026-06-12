# Beyond the Code

### 1. Browse the source code of a well-known project (e.g., Redis or curl). Find examples of some of the comment types mentioned in the lecture: a useful TODO, a reference to external documentation, a “why not” comment explaining an avoided approach, or a hard-learned lesson. What would be lost if that comment was not there?
Found the comments in node repository
```
// These checks can be removed in a future major version -- they ensure
// ABI compatibility with previous Node.js versions.
```
if this comment wasnt present and seemningly redundant check was removed from the code the backward compatibility of node will be compromised

### 2. Pick an open-source project you’re interested in and look at its recent commit history (git log). Find one commit with a good message that explains why the change was made, and one with a weak message that only describes what changed. For the weak one, look at the diff (git show <hash>) and try to write a better commit message following the Problem → Solution → Implications structure. Notice how much work is required to reassemble the necessary context after the fact!
Used the jenkins Docker image Repo

### 3. Compare the READMEs of three GitHub projects with 1000+ stars. Are all of them equally useful? Look for things that come across mostly as noise to you as a lesson for future READMEs you write yourself
Nodejs, The Odin Project, Jenkins Docker Image

### 4. Find an open issue on a project you use (check the “good first issue” or “help wanted” labels if they have it). Evaluate the issue against the criteria from the lecture: does it seem like it values the maintainer’s time and contains all the information necessary to debug it, or do you expect that the maintainer may need to go multiple rounds of questions with the submitter to get to the root problem?
The Odin Project

### 5. Find a merged pull request on a project you’re familiar with that has substantive review comments (not just “LGTM”). Read through the review. Were all the comments equally productive? If you were the PR author, how would you find the experience of getting all those comments?
Nodejs

### 6. Go to Stack Overflow and find a question in a technology you know that has a highly-voted answer. Then find one that was closed or heavily downvoted. Compare them against the advice from the lecture; was it predictable which question would get better answers?
Cpp for loop branch prediction for highly voted answer