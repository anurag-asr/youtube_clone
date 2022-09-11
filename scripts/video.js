let video = JSON.parse(localStorage.getItem("video"));
console.log(video)
let box = document.querySelector("#player");
for(let t of video){
    //console.log(t.videoId)
    let iframe = document.createElement("iframe");
    if(t.videoId===undefined){
        iframe.src=`https://www.youtube.com/embed/${t.id}`;
        iframe.width = "100%";
        iframe.height = "65%";
        iframe.allow = "fullscreen";
    }else{
        iframe.src=`https://www.youtube.com/embed/${t.videoId}`
        iframe.width = "100%";
        iframe.height = "65%";
        iframe.allow = "fullscreen";
    }
    
    let name = document.createElement("h2");
    name.innerText = t.title;
    
    let channel = document.createElement("p");
        channel.innerText = t.channelTitle;
        channel.style.marginLeft="35px"
        channel.style.color="grey"
    box.append(iframe,name,channel)
}
