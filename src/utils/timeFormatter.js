export const dateFormatter = (dateTime) => {
  const dateArray = dateTime.split('T')[0].split('-');
  return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
}

export const timeSinceFormatter = (dateTime) => {
  const diff = Date.now().valueOf() - new Date(dateTime).valueOf();
  let timeUnit;

  if (diff < 3600000) {
    const time = Math.floor(diff / 60000);
    timeUnit = `${time} minutes ago`;
  } else if (diff < 86400000) {
    const time = Math.floor(diff / 3600000);
    timeUnit = `${time} hours ago`;
  } else {
    const time = Math.floor(diff / 86400000);
    timeUnit = `${time} days ago`;
  }
  return timeUnit;
}