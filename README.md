# Ohmswich Backend APIs

## Backend | Node Js

Welcome to main branch

Here is the DEFAULT branch till we are finally done.

Please note: The commit messages should follow a consistent pattern:  
Remember,

`chore, feature, bug`

**For a feature:**  
`git commit -m "feat: implemented user log-in "`  
**For a bug:**  
`git commit "bug: fix inconsistency in log in screen"`  
**For a chore:**  
`git commit -m "chore: update read me to include API endpoints"`

**Note:** For every feature, bug or chore, you must create a new
branch.

Example of a feature?  
User Login: Branch naming convention follow this pattern: feat/user-login (- -

- lower case and separated by dashes)

Example of a bug?  
Home Page Typo: Branch naming convention follow this pattern:
bug/homepage-typo

Example of a chore?  
Update Read Me: Branch naming convention follow this pattern: branch naming:
chore/update-readme

Once you are assigned a task on trello, create a branch on your local git and
only push to that branch. If you push to any other branch.

**To get started:**

Click on clone or download and copy the url link there

Head to your terminal.

`git clone pasteTheUrlYouJustCopied`

`cd ohmswich-be`

**Note:** you will be on the Develop branch automatically. We are
not to work on this branch

**Step 6:** To start your work, work the directory that contains
the project files.  
`cd ohmswich-be`

**Step 7:**
`git remote add upstream https://github.com/dev-ohmswich/ohmswich-be.git`

Run: `git checkout -b <nameOfBranch>`

Don’t forget the naming convention of branch.

**Note:** <nameOfBranch> should be replaced with the
feature you are working on (i.e feat/signup-page-design), use hypen when you
will normally use space

For example,  
`git checkout -b feat/sign-page-design` ✅  
`git checkout -b feat/sign page design` ❌

Branch can either be: feature or bug or chore

Now, once done writing code and you have tested it and everything is working
fine.

Run: `git add .`  
Run: `git commit -m "feat: design signup page"`

Note: when writing commit message, use present-tense

DO:  
`git commit -m "feat/design login page"` ✅  
`git commit -m "bug/fix login page header bug"` ✅

DON’T:  
`git commit -m "feat/designed login page"` ❌  
`git commit -m "bug/fixed login page header bug"` ❌

`git push origin feat/profile-page-design` - (**<em>Note how it ends with a branch</em>**).

**Creating Pull requests**

PR === Pull request

When making a PR, your PR is expected to have the following:

    What is the task completed ?

    What the PR actually does ?

    How can this PR be manually tested ?

    Any background contexts? (maybe something a tester might not notice and be useful for testing)

    Screenshots (of your implementation - a web page, a mobile app screen or an

API payload)

    The Pull Request Template: PR Title: Task completed (descibe the task)

    Testing Describe how to test the changes you’ve made.

For example, if you added a logout button to the timeline page:

Visit localhost:3000/timeline and click on the logout button.

Other Information, Add any information that may be necessary. This section is not required.

Screenshots: Add if appropriate.

**Screenshots are needed for all frontend works and live link to test.**

Pull Request Example: Changes  
Add a logout button to the timeline page  
Testing Visit localhost:5000 and click on the logout button at the top right corner of the page.

Other Info N/A  
Screenshots: A screenshot would be added here showing the button on the page.

**To start the server.**

- run `npm install` to install all packages
- run ```cp .env.example .env` to copy env variable and edit correctly
- run `npm run start:dev` to start the development server
- **ensure you have your mysql setup locally**

Happy Hacking!!!
