const POSTS_ENDPOINT = "https://fake-twi.glitch.me/posts";

const textAreaElement =  document.querySelector('textarea');

//  const posts = [{
//     text: "Ada Lovelace, angielska matematyczka i pisarka, jest uznawana za twórczynię pierwszego programu a zarazem pierwszą w historii programistkę.",
//     author: "Maria Italiano",
//     date: "28.02.2019, 16:22:15"
// }, {
//     text: "Według serwisu Statisa, szacuje się, że ruch mobilny stanowił w 2018 roku ok. 52.2% całego ruchu w Internecie. Ze względu na rosnący trend, można spodziewać się, że w 2019 ten odsetek będzie jeszcze większy.",
//     author: "Dionizy Złotopolski",
//     date: "27.02.2019, 12:59:20"
// }, {
//     text: "Najpopularniejsza obecnie przeglądarka Google Chrome powstała dopiero w drugiej połowie 2008 roku. Jej udział w rynku szacuje się na ok. 62%.",
//     author: "Barbara Mostowiak",
//     date: "25.02.2019, 08:13:44"
// }, {
//     text: "Codziennie pojawia się ponad 500 milinów nowych Tweetów ",
//     author: "Maurycy Vivaldi",
//     date: "25.02.2019, 06:26:01"
// }]; 

// addPostToHTML({
//     text: "Ada Lovelace, angielska matematyczka i pisarka, jest uznawana za twórczynię pierwszego programu a zarazem pierwszą w historii programistkę.",
//     author: "Maurycy Vivaldi",
//     date: "28.02.2019, 16:22:15"


// // });

// posts.forEach(post => addPostToHTML(post));

fetch(POSTS_ENDPOINT)
   .then(response => response.json())
   .then(data => data.forEach(addPostToHTML));


    
function sendNewPost() {
    const now = new Date();
    const content = addPostToHTML({
         text: textAreaElement.value,
         author: "To ja",
         date: `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
    });
    let requestParams = {
        method: 'POST',
        body: JSON.stringify(content),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    fetch(POSTS_ENDPOINT, requestParams)
        .then(response => response.json())
        .then(post => addPostToHTML(post));
    
    textAreaElement.value = "";
}


    

document.querySelector('button').addEventListener('click', sendNewPost);
