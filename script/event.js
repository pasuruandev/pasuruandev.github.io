function renderData({ image, event_type, title, publish_date, content }) {
    $('#imgPoster').attr('src', `images/event/${image}`);
    $('#eventType').text(event_type);
    $('#title').text(title);
    $('title').text(title);
    $('meta[name="description"]').attr('content', event_type);
    $('#publishDate').text(publish_date);
    $('#content').html(content);
}

function getData(event) {
    const param = new URLSearchParams(location.search.substring(1));
    const id = param.get('id');

    return event.id === id;
}

$.getJSON('../data/bncc.json', function(data = []) {
    const event = data.find(getData);
    renderData(event);
});