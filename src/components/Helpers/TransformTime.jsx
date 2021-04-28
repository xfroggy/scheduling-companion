import moment from 'moment';

const TransformTime = (timeString) => {
    timeString = timeString.split('');
    timeString.splice(-2, 0, ":");
    timeString = timeString.join('');
    timeString = moment(timeString, "HH:mm");
    return timeString.format("h:mm A");
}

export default TransformTime;