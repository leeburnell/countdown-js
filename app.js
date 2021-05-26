const countdown = () => {
    const countDate = new Date("May 26, 2021 23:59:00").getTime();
    const now = new Date().getTime();
    const difference = countDate - now;

    //HOW DOES TIME WORK? MAGICK
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate the thing
    const textDay = Math.floor(difference / day);
    const textHour = Math.floor((difference % day) / hour);
    const textMinute = Math.floor((difference % hour) / minute);
    const textSecond = Math.floor((difference % minute) / second);

    // Display the thing
    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
};

//Constantly refreshing the thing
setInterval(countdown, 1000);

countdown();