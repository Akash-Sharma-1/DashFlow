const express = require('express')
const axios = require('axios');
const router = express.Router()


// const processData = (req, res) => {
// 	return new Promise((resolve, reject) => {

        
//     });
    
// };


var boardId = "5258"
var weblink = `https://jira.mathworks.com/rest/agile/1.0/board/${boardId}/sprint`;
var accessToken = "Njc2MTgwMzI0NjQ2Onk1Qwi8OispYPUpxedNumn0sJOi"
const populateData = (data) => {
	return new Promise((resolve, reject) => {

        let weblink2 =  data.values[data.values.length-1]["self"] + "/issue"
        var request = require('request');
        var options = {
          'method': 'GET',
          'url': weblink2,
          'headers': {
            'Authorization': 'Bearer Njc2MTgwMzI0NjQ2Onk1Qwi8OispYPUpxedNumn0sJOi',
          }
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          resolve(JSON.parse(response.body))
        });

    });
    
};

const processData = (data) => {
	return new Promise((resolve, reject) => { 
        finalData = []
        for(let i=0; i < data.issues.length; i++) {
            let objj = new Object();
            objj.id = data.issues[i].key
            objj.assigned = data.issues[i].fields.assignee.name
            objj.link = `https://jira.mathworks.com/${data.issues[i].key}`
            objj.status= data.issues[i].fields.status.name
            objj.title= data.issues[i].fields.summary
            finalData.push(objj)
        }
        resolve(finalData)
    });
    
};

const filterData = (data) => {
	return new Promise((resolve, reject) => { 
        finalData = {}
        for(let i=0; i < data.length; i++) {

            if(!(data[i].assigned in finalData)) {
                finalData[data[i].assigned] = {}
                finalData[data[i].assigned]["To Do"] = []
                finalData[data[i].assigned]["In Progress"] = []
                finalData[data[i].assigned]["To Verify"] = []
                finalData[data[i].assigned]["Done"] = []

                finalData[data[i].assigned][data[i].status].push(data[i])
                
            } else {
                finalData[data[i].assigned][data[i].status].push(data[i])
            }
        }
        // console.log(finalData)

        resolve(finalData)
    });
    
};
const fetchJiraData = (req, res) => {
	return new Promise((resolve, reject) => {
        let config = {
            method: 'get',
            url: weblink,
            headers: { 
                'Authorization': `Bearer ${accessToken}`, 
            }
        };

        axios(config)
        .then(function (response) {
            return response.data;
        })
        .then(function (data) {
            return populateData(data)
        })
        .then(function (fdata) {
            return processData(fdata)
        })
        .then(function (fdata) {
            return filterData(fdata)
        })
        .then(function (fdata) {
            res.send(fdata)
        })
        .catch(function (error) {
        console.log(error); 
            res.send(error);

        });
	});
    
};


router.get('/', (req, res) => { 

    return fetchJiraData(req, res)
});


module.exports = router;