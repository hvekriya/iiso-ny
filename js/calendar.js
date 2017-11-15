    var calendar = {
        googleCalendarApiKey: 'AIzaSyAOtGp2YIkqzbPW5-yonk--Go9lf89m8OQ',
        events: {
            googleCalendarId: 'admin@bhujdham.org'
        },
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listMonth,month'
        }
    };
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        calendar.defaultView = 'listMonth'
    } else {
        calendar.defaultView = 'month'
    }

    $('#calendar').fullCalendar(calendar);