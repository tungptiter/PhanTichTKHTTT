<h5>1. …or create a new repository on the command line </h5>
git init
<br>
git add README.md
<br>
git commit -m "first commit"
<br>
git branch -M main
<br>
git remote add origin https://github.com/tungptiter/PhanTichTKHTTT.git
<br>
git push -u origin main


<h5>2. …or push an existing repository from the command line</h5>
git remote add origin https://github.com/tungptiter/PhanTichTKHTTT.git
<br>
git branch -M main
<br>
git push -u origin main

<h5>3. pull code </h5>
git pull origin main

link: https://xuanthulab.net/lam-viec-voi-remote-branch-trong-git.html



<h4>pull về branch nếu bị conflic nhiều </h4>

Ensure you are in the your branch:

git checkout branch_name

The rm -r command will recursively remove your folder:

git rm -r folder-name

Commit the change:

git commit -m "Remove duplicated directory"

Push the change to your remote repository:

git push origin master

https://github.community/t/how-to-delete-multiples-files-in-github/702/3


Try this: (lấy code từ main( hoặc master) về branch của mình)

 git fetch --all

 git reset --hard origin/master
Explanation:

git fetch downloads the latest from remote without trying to merge or rebase anything.

https://stackoverflow.com/questions/25411366/git-repo-says-its-up-to-date-after-pull-but-files-are-not-updated


Bước 3: push code lên branch mình là xong
<br>
git push -u origin branch_name
<h4> End of pull về branch nếu bị conflic nhiều </h4>

