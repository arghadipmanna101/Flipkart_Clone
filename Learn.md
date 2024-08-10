If you would like to contribute code to the project, please follow these steps:

-  Step 1: [Fork](https://github.com/DSC-JSS-NOIDA/blogzen) the repo first

-  Step 2: Go to your Git terminal and clone it on your machine.
   ```
   git clone https://github.com/<your_github_username>/UMatter.git
   ```
-  Step 3: Add an upstream link to the main branch in your cloned repo
   ```
   git remote add upstream https://github.com/MonalikaPatnaik/UMatter.git
   ```
-  Step 4: Keep your cloned repository up to date by pulling from upstream. This will help you avoid merge conflicts while committing new changes.
   ```
   git pull upstream main
   ```
-  Step 5: Create your feature branch (This is a necessary step, so don't skip it)
   ```
   git checkout -b <feature-name>
   ```
-  Step 6: Track and stage your changes.

   ```
    # Track the changes
    git status

    # Add changes to Index
    git add . or git add <file_name>
   ```

-  Step 7: Commit your changes (Write commit message as "Small Message")
   ```
   git commit -m "Write a meaningful but small commit message"
   ```
-  Step 8: Push the changes for review
   ```
   git push -u origin <branch-name>
   ```
-  Step 9: Create a pull request on GitHub. (Don't just hit the create a pull request button; you must write a PR message to clarify why and what you are contributing).
