### 1. Configure a formatter, linter, and pre-commit hooks for a project you’re working on. If you have lots of errors: autoformatting should take care of the format errors. For the linter errors, try using an AI agent to fix all the linter errors. Make sure the AI agent can run the linter and observe the results, so that it can run in an iterative loop to fix all the issues. Check the results carefully to ensure the AI doesn’t break your code!
```
https://github.com/Sirjandeep-Singh/WeatherApp
```
### 2. Learn a testing library for a language you know and write a unit test for a project you’re working on. Run a code coverage tool, generate an HTML-formatted coverage report, and observe the results. Can you find the lines that are covered? Your code coverage will likely be very low. Try manually writing some tests to improve it. Try using an AI agent to improve coverage; make sure the coding agent can run tests with coverage and produce a line-by-line coverage report, so it knows where to focus. Are the AI-generated tests actually good?
check /trying-testing folder 
### 3. Set up continuous integration to run on every push for a project you’re working on. Have CI run formatting, linting, and tests. Break your code on purpose (e.g., introduce a linter violation), and ensure that CI catches it.
github pages
```
https://github.com/Sirjandeep-Singh/SM-APP
```
### 4 .Try writing a regex pattern and use the grep command-line tool to find occurrences of subprocess.Popen(..., shell=True) in your code. Now, try to “break” the regex pattern. Does semgrep still successfully match the dangerous code that trips up your grep invocation?
```
grep -R 'subprocess\.Popen(.*shell=True.*)' .
```
This breaks the regex expression because it is multiline
```
subprocess.Popen(
    cmd,
    stdout=subprocess.PIPE,
    shell=True
)
```
Semgrep parses the code's syntax tree instead of treating code as plain text. So its better and matches even dangerous code
### 5. Practice regex search-and-replace in your IDE or text editor by replacing the - Markdown bullet markers with * bullet markers in these lecture notes. Note that just replacing all the “-“ characters in the file would be incorrect, as there are many uses of that character that are not bullet markers.

### 6. Write a regex to capture from JSON structures of the form {"name": "Alyssa P. Hacker", "college": "MIT"} the name (e.g., Alyssa P. Hacker, in this example). Hint: in your first attempt, you might end up writing a regex that extracts Alyssa P. Hacker", "college": "MIT; read about greedy quantifiers in the Python regex docs to figure out how to fix it.
Greedy 
```
"name": "(.*)"
```
Non-Greedy
```
"name": "(.*?)"
```
