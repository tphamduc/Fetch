        function OutList(){
            let value = fetch('https://todonew412.herokuapp.com/api/list')
                                .then((response) => response.json())
                                .then((get) => {let html = get.map(e=>
                                     e._id + " " + e.name + "\n")
                                      
            t1.innerHTML = html;
        });
        }

        function SearchbyID(){
            let id = bt1.value;
            let link ='https://todonew412.herokuapp.com/api/get/' + id
            let value = fetch(link)
                                .then((response) => response.json())
                                .then((json) =>  
            { let out = json;
            t2.innerHTML= "id: " + out._id +" "+ "name: " + out.name;
         });                      
         } 

         function Create(){
            //  let name = {};
             let name = bt2.value;
             let value = fetch('https://todonew412.herokuapp.com/api/create', {
                            method: 'POST',
                            body: JSON.stringify({
                            name: name
                        }),
                        headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                        },
                        })
                            .then((response) => response.json())
                            .then((json) => {let out = json;
                            t3.innerHTML = out._id + " " + out.name;});
         }

         function Delete(){
             let id = bt3.value;
             let link = 'https://todonew412.herokuapp.com/api/delete/' + id;
             let value = fetch(link, {
                            method: 'POST',
                            body: JSON.stringify({
                        }),
                        headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                        },
                        })
                            .then((response) => response.json())
                            .then((json) => {let out = json;
                            t4.innerHTML = "Delete Sucess";});
         }
         function Update(){
            let id = bt4.value;
            let name = bt5.value;
            let link = 'https://todonew412.herokuapp.com/api/update?id=' + id;
            let value = fetch(link, {
                            method: 'POST',
                            body: JSON.stringify({
                            name: name
                        }),
                        headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                        },
                        })
                            .then((response) => response.json())
                            .then((json) => {let out = json;
                            t5.innerHTML = out._id + " " + out.name;});
         }