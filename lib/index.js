import execa from 'execa';
import inputIs from 'input-is';

const isGitRemte = (URL, host) => {
  let thisURL = URL;
  const thisHost = host || 'github.com';

  if (inputIs.url(thisURL) && !inputIs.valid(thisURL, /https:\/\//)) {
    const splittedURL = thisURL.split('/');
    const url = splittedURL.map((item) => encodeURIComponent(item)).join('/');

    thisURL = `https://${url}`;
  } else if (!inputIs.url(thisURL) && inputIs.valid(thisURL, /.\/./)) {
    const splittedURL = thisURL.split('/');
    const url = splittedURL.map((item) => encodeURIComponent(item)).join('/');
    const splittedHost = thisHost.split('.');
    const newHost = splittedHost.map((item) => encodeURIComponent(item)).join('.');

    thisURL = `https://${newHost}/${url}`;
  } else if (inputIs.url(thisURL) && inputIs.valid(thisURL, /http:\/\//)) {
    const splittedURL = thisURL.split('http://')[1].split('/');
    const url = splittedURL.map((item) => encodeURIComponent(item)).join('/');

    thisURL = `http://${url}`;
  } else if (inputIs.url(thisURL) && inputIs.valid(thisURL, /https:\/\//)) {
    const splittedURL = thisURL.split('https://')[1].split('/');
    const url = splittedURL.map((item) => encodeURIComponent(item)).join('/');

    thisURL = `https://${url}`;
  } else {
    const splittedURL = thisURL.split('/');
    const url = splittedURL.map((item) => encodeURIComponent(item)).join('/');

    thisURL = url;
  }

  try {
    execa.shellSync(`git ls-remote ${thisURL}`);
    return true;
  } catch (e) {
    return false;
  }
};

export default isGitRemte;
