import isGitRemote from '../lib';

test('IS GIT REMOTE | a github repository, with an URL, without https://', () => {
  const value = isGitRemote('www.github.com/aichbauer/test-public');

  expect(value).toBeTruthy();
});

test('IS GIT REMOTE | a github repository, with an URL, with https://', () => {
  const value = isGitRemote('https://www.github.com/aichbauer/test-public');

  expect(value).toBeTruthy();
});

test('IS GIT REMOTE | a github repository, with "username/reponame"', () => {
  const value = isGitRemote('aichbauer/test-public');

  expect(value).toBeTruthy();
});

test('IS GIT REMOTE | not a github repository, with "username/reponame"', () => {
  const value = isGitRemote('aichbauer/non-existing-repository');

  expect(value).toBeFalsy();
});

test('IS GIT REMOTE | a github repository, with "username/reponame", with host provided', () => {
  const value = isGitRemote('aichbauer/test-public', 'github.com');

  expect(value).toBeTruthy();
});

test('IS GIT REMOTE | a bitbucket repository', () => {
  const value = isGitRemote('https://bitbucket.org/aichbauer/test-public');

  expect(value).toBeTruthy();
});

test('IS GIT REMOTE | uriEncode URL http inject', () => {
  const value = isGitRemote('https://github.com/Mik317/PyScan.git;curl "http://localhost/RCE"');

  expect(value).toBeFalsy();
});

test('IS GIT REMOTE | uriEncode URL https inject', () => {
  const value = isGitRemote('https://github.com/Mik317/PyScan.git;curl "https://localhost/RCE"');

  expect(value).toBeFalsy();
});
