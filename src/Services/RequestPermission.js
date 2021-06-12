const axios = require('axios');
export const getPermissions = async ()=>
{
    axios.get('/permissions')
        .then(function (response) {
        if (response != null && response.isAdded == true)
        {
            return response.data;
        }
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        });
}
export const addPermission = async (inputs )=>
{
    axios.post('/permissions')
    .then(function (response) {
        if (response != null)
            return response.data;
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}
export const deletePermission = async (inputs )=>
{
    axios.delete('/permissions')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {

        console.log(error);
    });
}