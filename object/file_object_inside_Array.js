//object inside array
//very useful in real world application
const users=[{
    user_id:1,firstname:"kartikeya",gender:"male"},{user_id:2,firstname:"Vinayak",gender:"male"},{user_id:3,firstname:"Kushwaha",gender:"male"}];
    for(let user of users ){
        console.log(user.gender);
    }

    const [user1,user2,user3]=users;
    console.log(user1.firstname,user3.gender);