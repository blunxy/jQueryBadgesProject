function addBadgeToPage(badge) {
    var div = $('<div>', {
        'class': 'course'
    });
    var title = $('<h3>').text(badge.title);
    var image = $('<img>').attr('src', badge.badge);
    var link = $('<a>', {
        'href': badge.url
    });
    div.append(title, image, link);
    $('#badges').append(div);
}

$(function () {

    $.ajax({
        url: 'https://www.codeschool.com/users/blunxy.json',
        dataType: 'jsonp',
        success: function (resp) {
            var courses = resp.courses.completed;
            $.each(courses, function (index, course) {
                addBadgeToPage(course);
            })

        }
    })

});