var a = '123';
var f = '123';
var d = '123';


function logger(message, type = 'trace') {
  axios.post('/logger', {message: message, page: location.href, type})
  .then(function (response) {
  })
  .catch(function (error) {
	console.log(error)
  })
}

function test(a) {
  return a.split(' ').reverse().join('')
}
