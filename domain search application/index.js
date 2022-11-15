// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '38c202632amsh9eafe05cb45ed2fp16a311jsne931cc135a49',
// 		'X-RapidAPI-Host': 'whoisapi-domain-availability-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://whoisapi-domain-availability-v1.p.rapidapi.com/api/v1?domainname=example.com&outputFormat=JSON&mode=DNS_ONLY', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//   document.getElementById("Search").addEventListener("keyup",options);
// const getQuote= async()=>{
//   const res=fetch("https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com");
//   const data=await (await res).json();
//   console.log(data)
//   // const num=Math.floor(Math.random()*data.length);
//   // const item=data[num];

//   // const t=item.text;
 
//   // const a=item.author;
//   // quote.innerText=`"${t},,`;
//   // author.innerText=` ~ ${a}`;
// }
// document.getElementById("Search").addEventListener("keyup",searchuser);
const searchdomain = (e) =>{
  e.preventDefault();
  var search = document.getElementById("search");
//    document.getElementById('result')=
fetch(`https://api.domainsdb.info/v1/domains/search?domain=${search}`)
 .then((result) => result.json(), function (err) {
       console.log('err');
     })
 .then((data) => {
   document.getElementById(
     "result-container"
   ).innerHTML = ` <a target="_blank" href="https://api.domainsdb.info/v1/domains/search=${search}">  <a/> `;
 })
 .catch(console.log("wrong"));
}
document.getElementById("Search").addEventListener("keyup",searchdomain);
