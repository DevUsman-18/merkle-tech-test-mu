
class Time {
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeArray = [0, 0, 0];

    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.normalizeTime();
    }

    normalizeTime() {
        let totalSeconds = this.timeArray[2] + this.seconds;
        if (totalSeconds > 59) {
            if(Number.isInteger(totalSeconds / 60)) {
                this.timeArray[1] += totalSeconds / 60;
                this.seconds = "00";
                this.timeArray[2] = "00";
            } else {
                this.timeArray[1] += Math.floor(totalSeconds / 60);
                this.seconds %= 60;
            }
        } else if (totalSeconds >= 0 && totalSeconds<= 9){
            this.seconds =  "0" + String(totalSeconds);
        }

        let totalMinutes = this.timeArray[1] + this.minutes;
        if(totalMinutes > 59) {
            if(Number.isInteger(totalMinutes / 60)) {
                this.timeArray[0] += totalMinutes / 60;
                this.minutes = "00";
            } else {
                this.timeArray[0] = Math.floor(totalMinutes / 60);
                this.minutes %= 60;
            }
        } else if (totalMinutes >= 0 && totalMinutes <= 9){
            this.minutes =  "0" + String(totalMinutes);
        } else {
            this.minutes = totalMinutes;
        }

        let totalHours = this.timeArray[0] + this.hours;
        if(totalHours === 24) {
            this.hours = "00";
        } else if (totalHours > 25) {
            this.hours = totalHours % 24;
        } else {
            this.hours = totalHours;
        }
        if (this.hours >= 0 && this.hours <= 9){
            this.hours =  "0" + String(this.hours);
            this.hours = this.hours.slice((this.hours.length - 2));
        }
        this.timeArray = [0,0,0];
    }

    timeString() {
        let resultToReturn = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log("result", resultToReturn);
        return resultToReturn;
    }

    scale(seconds){
        let scaleSeconds = seconds / 60;
        this.timeArray[1] += Math.floor(scaleSeconds);
        this.timeArray[2] += seconds % 60;
        console.log("scale", this.timeArray)
        this.normalizeTime();
    }
}

// let t = new Time(1, 100, 0);
// t.timeString();

// let t = new Time(1, 30, 20);
// t.timeString();
// t.scale(400);
// t.timeString();