function post_data(data_json) {
    fetch('/update', {
              method: 'post',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data_json),
              json: true
            }).then(res=>res.json())
              .then(res=>console.log(res));
}