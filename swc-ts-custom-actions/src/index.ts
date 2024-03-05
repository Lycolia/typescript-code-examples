import * as core from '@actions/core';
import * as github from '@actions/github';

const githubToken = core.getInput('GITHUB_TOKEN', { required: true });
const octokit = github.getOctokit(githubToken);

console.log('octokit', octokit);
console.log('context', github.context);
core.setOutput('RESULT_MESSAGE', 'test result message');
