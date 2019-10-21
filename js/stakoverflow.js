// https://api.stackexchange.com/docs/badges-on-users#order=desc&sort=rank&ids=2165443&filter=default&site=stackoverflow

console.log('inside');

var userid = 2165443; // which userid to use

// ajax calls
var xhr = new XMLHttpRequest();
// notice the page parameter here
// here the actual api call is created
xhr.open(
  'GET',
  'https://api.stackexchange.com/2.2/users/' +
    userid +
    '/badges?order=desc&sort=rank&site=stackoverflow'
);
xhr.onload = function(e) {
  if (this.status == 200) {
    const resp = JSON.parse(this.response); // JSON response
    console.log(resp.items);

    document.getElementById('reputation-number').innerHTML =
      resp.items[0].user.reputation;
    let awardCounts = 0;
    for (let i = 0; i < resp.items.length; i++) {
      const element = resp.items[i];
      awardCounts = +awardCounts + Number(element.award_count);
      const badge = "<div class='badge-stack'>" + element.name + '</div>'; // Create text with HTML
      console.log(badge);

      $('#badge-name').append(badge);
    }
    document.getElementById('awards-counts').innerHTML = awardCounts;
  }
};
xhr.send();
