function MakeCard(Title,Discription,Url,Footer){
    var card=document.createElement('div');
    card.className="Card";
    var title=document.createElement('div');
    title.className="Title";
    title.innerText=Title;

    var discription=document.createElement('div');
    discription.className="Discription";
    discription.innerText=Discription;

    if(Title=="COMPARE-gIT" || Title=="GRIP-TSF"){
        console.log(Title);
    }
    else{
        var IMAGE=document.createElement('img');
        IMAGE.src="https://github.com/AshwinSolanki76/AshwinSolanki76.github.io/blob/master/AllPreview/"+Title+".jpeg?raw=true";
        // https://github.com/AshwinSolanki76/AshwinSolanki76.github.io/blob/master/AllPreview/AshwinSolanki76.github.io.jpeg?raw=true
        IMAGE.className="IMAGE";
    }
    

    var UrlDiv=document.createElement('div');
    UrlDiv.className="UrlDiv";
    var url=document.createElement('a');
    url.className="URL";
    url.target="_blank";
    url.href=Url;
    url.style="text-decoration:none";
    url.innerHTML="See Repository";
    UrlDiv.appendChild(url);

    var footer=document.createElement('div');
    footer.className="Footer";
    footer.innerHTML=Footer;

    card.appendChild(title);
    if(Title=="COMPARE-gIT" || Title=="GRIP-TSF"){
        console.log(Title);
    }
    else{
        card.appendChild(IMAGE);
    }

    card.appendChild(discription);
    card.appendChild(UrlDiv);

    card.appendChild(footer);
    return card;
}

async function getData(Username){
    const url="https://api.github.com/users/AshwinSolanki76/repos";
    // const url="all.json";
    const response=await fetch(url);
    var data = await response.json();
    var container=document.createElement('div');
    var count=1;
    for(var i=0;i<data.length;i++){
        var footer="Made with ❤️"
        if(data[i]['language']!=null){
            footer+=" and "+data[i]['language'];
        }
        if(data[i]['fork']==false)
        {
            c1=MakeCard(data[i]['name'],
                        data[i]['description'],
                        data[i]['html_url'],
                        footer);
            document.getElementById('Container').appendChild(c1);
            count++;
        }
    }
    var card=document.createElement('div');
    card.className="Card";
    card.id="connect";
    var Instagram=document.createElement("a");
    Instagram.href="https://www.instagram.com/aswinsolanki/";
    Instagram.target="_blank";
    var InstaImg=document.createElement("img");
    InstaImg.src="https://github.com/AshwinSolanki76/AshwinSolanki76/blob/main/Instagram_icon.png?raw=true";
    InstaImg.alt="Ashwin Solanki | Instagram";
    InstaImg.className="ConnectIcons";
    Instagram.appendChild(InstaImg);

    
    var Twitter=document.createElement("a");
    Twitter.href="https://twitter.com/Ashwin__Solanki";
    Twitter.target="_blank";
    var TweetImg=document.createElement("img");
    TweetImg.src="https://github.com/AshwinSolanki76/AshwinSolanki76/blob/main/Twitter.png?raw=true";
    TweetImg.alt="Ashwin Solanki | Twitter";
    TweetImg.className="ConnectIcons"
    Twitter.appendChild(TweetImg);

    
    var LinkedIn=document.createElement("a");
    LinkedIn.href="https://www.linkedin.com/in/ashwinsolanki99";
    LinkedIn.target="_blank";
    var LinkImg=document.createElement("img");
    LinkImg.src="https://github.com/AshwinSolanki76/AshwinSolanki76/blob/main/Linkedin.png?raw=true";
    LinkImg.alt="Ashwin Solanki | LinkedIn";
    LinkImg.className="ConnectIcons"
    LinkedIn.appendChild(LinkImg);

    
    var Github=document.createElement("a");
    Github.href="https://github.com/AshwinSolanki76";
    Github.target="_blank";
    var GitImg=document.createElement("img");
    GitImg.src="https://github.com/AshwinSolanki76/AshwinSolanki76/blob/main/Github.png?raw=true";
    GitImg.alt="Ashwin Solanki | Github";
    GitImg.className="ConnectIcons"
    Github.appendChild(GitImg);
    
    card.append(Github);
    card.append(LinkedIn);
    card.append(Twitter);
    card.append(Instagram);
    document.getElementById('Container').appendChild(card);
}
getData();
