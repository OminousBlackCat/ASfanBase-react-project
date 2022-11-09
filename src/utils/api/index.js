import request from '../request'

export function AddMsg (form) {
  request({
    url: '/msg/add',
    method: 'post',
    data: {
      form
    }
  }).then(function (response) {
    console.log(response)
  })
}