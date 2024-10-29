const apikey="eac2fcf0ec7f4b3498203e08eeaf32cf";
const url="https://newsapi.org/v2/everything?q=";
window.addEventListener('load',()=>fetchData("India"));
async function fetchData(topic){
   
    const ans = await fetch(`${url}${topic}&apiKey=${apikey}`);
    const data=await ans.json();
    bindData(data.articles);
}
function bindData(arti){
    const cardscontainer=document.getElementById('cards-container');
    const templatecards=document.getElementById('template-cards');
    cardscontainer.innerHTML="";
    arti.forEach(arti => {
        if(!arti.urlToImage)return;
        const cardclone=templatecards.content.cloneNode(true);//copying the contents of template and storing it in var
        datafill(cardclone,arti);
        
        cardscontainer.appendChild(cardclone);
    });
    
}
function datafill(cardclone,arti){
    const newsimg=cardclone.querySelector('#newsimg');
    const newstit=cardclone.querySelector('#news-title');
    const newsdet=cardclone.querySelector('#newsdet');
    const newspara=cardclone.querySelector('#content-para');
      newsimg.src=arti.urlToImage;
      newstit.innerHTML=arti.title;
      newsdet.innerHTML=arti.description;
      newspara.innerHTML=arti.content;
      cardclone.firstElementChild.addEventListener('click',()=>{
        window.open(arti.url,"_blank");
      })

}
// const navlinks=document.getElementsByClassName('hover-links');
// Array.from(navlinks).forEach((links)=>{addEventListener('click',(topic)=>{
//       const query=links.innerHTML;
//        fetchData(query);
// });
// });
function navclick(newstopic){
    fetchData(newstopic);
}
const searchbtn=document.getElementById('searchbtn');
const searchtext=document.getElementById('searchbar');
searchbtn.addEventListener('click',()=>{
    const val=searchtext.value.trim();
    if(!val)return;
    else fetchData(val);
});
function reload(){
    
        window.location.reload();
     
}