export function studioEmail(subject, details, address = 'info@ultraaalbums.com') {
  const body = Object.entries(details)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([label, value]) => label + ': ' + (Array.isArray(value) ? value.join(', ') : value))
    .join('\n');
  return 'mailto:' + address + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
