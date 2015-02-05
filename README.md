Coding fitness
==============

This repo has been created to solve coding toy problems of different levels of difficulty. The main purpose of this exercise is to 'stay fit'.

Each problem is in its own folder.

The branch master contains the prompts for all the problems without the solutions.
The pull requests with solutions should be submitted to the individual branches of each collaborator.

There are two ways to work with this repo:
- 1) Solve toy problems submitted by others.
- 2) Submit your own toy problems for your classmates to solve.

1) In order to solve toy problems, clone and fork this repo.
Add the original repo as a remote ('git remote add upstream https://github.com/codingfitness/codingfitness.git').

Solve the toy problem and test it locally if you want by running the SpecRunner.html file in your browser.
Push your solution to your fork of the repo and then submit the pull request.

The pull request should be submitted to your personal branch of the repo. In this case the pull request will be merged automatically.
Please do not make pull request with solutions to the master branch.

To get new toy problems, run the command 'git pull upstream master' in your terminal.

2) In order to submit your own toy problem, create a new folder in the local copy of your repo. Add three files:
- a) The file with the problem itself but without the solution;
- b) The file with tests;
- c) The spec runner (file SpecRunner.html, which can be easily copied from another problem's folder; the script tag in this file should refer to the files a) and b)).

Submit a pull request to the original repo's master branch, and someone will merge it manually. 