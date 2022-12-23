const isNotPersisted = () => !localStorage.getItem('persist:weather');

export default isNotPersisted;
