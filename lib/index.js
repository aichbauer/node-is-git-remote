import execa from 'execa';
import inputIs from 'input-is';

const isGitRemte = (URL, host) => {
  let thisURL = URL;
  const thisHost = host || 'github.com';

  if (inputIs.url(thisURL) && !inputIs.valid(thisURL, /https:\/\//)) {
    thisURL = `https://${thisURL}`;
  } else if (!inputIs.url(thisURL) && inputIs.valid(thisURL, /.\/./)) {
    thisURL = `https://www.${thisHost}/${thisURL}`;
  }

  // filtering bad characters to prevent command injection
  var filter_chars = /[!";|`$()&<>]/g;
  thisURL = thisURL.replace(filter_chars, '');

  try {
    execa.shellSync(`git ls-remote ${thisURL}`);
    return true;
  } catch (e) {
    return false;
  }
};

export default isGitRemte;
